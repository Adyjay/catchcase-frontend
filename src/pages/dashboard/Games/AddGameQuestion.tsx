import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addGameQuestion, fetchAllGames } from "../../../services/apis";

interface Game {
  id: number;
  name: string;
}

const AddGameQuestion: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");
  const [selectedGameId, setSelectedGameId] = useState("");
  const [games, setGames] = useState<Game[]>([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  // const [subCategories, ]

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) {
      navigate("/");
    } else {
      setToken(storedToken);
      loadGames(storedToken);
    }
  }, []);

  const loadGames = async (token: string) => {
    try {
      const data = await fetchAllGames(token);
      setGames(data);
    } catch (err) {
      console.error("Failed to fetch games", err);
    }
  };

  const handleAddQuestion = async () => {
    if (!question || !answer || !opt1 || !opt2 || !opt3 || !opt4 || !selectedGameId) {
      alert("All fields including game selection are required.");
      return;
    }

    try {
      setLoading(true);
      const result = await addGameQuestion(
        token,
        Number(selectedGameId),
        question,
        answer,
        opt1,
        opt2,
        opt3,
        opt4
      );

      alert(result.message || "Game question added!");
      setQuestion("");
      setAnswer("");
      setOpt1("");
      setOpt2("");
      setOpt3("");
      setOpt4("");
      setSelectedGameId("");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error adding game question.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl max-w-xl mx-auto space-y-4 shadow">
      <h2 className="text-xl font-bold text-center text-indigo-700">Add Game Question</h2>

      {/* Game selection dropdown */}
      <select
        value={selectedGameId}
        onChange={(e) => setSelectedGameId(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Game</option>
        {games.map((game) => (
          <option key={game.id} value={game.id}>
            {game.name}
          </option>
        ))}
      </select>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Enter Question"
      />
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Correct Answer"
      />
      <input
        value={opt1}
        onChange={(e) => setOpt1(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Option 1"
      />
      <input
        value={opt2}
        onChange={(e) => setOpt2(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Option 2"
      />
      <input
        value={opt3}
        onChange={(e) => setOpt3(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Option 3"
      />
      <input
        value={opt4}
        onChange={(e) => setOpt4(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Option 4"
      />

      <button
        onClick={handleAddQuestion}
        disabled={loading}
        className={`w-full text-white px-4 py-2 rounded font-semibold transition ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"
        }`}
      >
        {loading ? "Adding..." : "Add Game Question"}
      </button>
    </div>
  );
};

export default AddGameQuestion;

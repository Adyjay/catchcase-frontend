import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllQuestions, updateQuestion } from "../../../services/apis";

const UpdateQuestion: React.FC = () => {
  const [token, setToken] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState("None")
//   const [se]

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else {
      setToken(storedToken);
      loadQuestions(storedToken);
    }
  }, []);

  const loadQuestions = async (token: string) => {
    try {
      const data = await fetchAllQuestions(token);
      setQuestions(data);
    } catch (err) {
      console.error("Failed to fetch questions");
    }
  };

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedQuestion(e.target.value)
    // setSelectedId(selected);
    const selected1 = questions.find(x => x.title === e.target.value);
    setSelectedId(selected1[
        'id'
    ]);
    const q = questions.find((q) => q._id === selected);
    if (q) {
      setTitle(q.title);
      setDescription(q.description);
    }
  };

  const handleUpdate = async () => {
    if (!selectedId || !title || !description) {
      alert("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const result = await updateQuestion(token, selectedId, title, description);
      alert(result.message || "Question updated!");
      setSelectedId("");
      setTitle("");
      setDescription("");
    } catch (err: any) {
      alert(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-2 bg-white rounded-xl max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold  text-center">Update Question</h2>

      <select
        value={selectedId}
        onChange={handleSelection}
        className="w-full p-2 border rounded"
      >
        <option value="">{selectedQuestion}</option>
        {questions.map((q) => (
          <option key={q._id} value={q._id}>{q.title}</option>
        ))}
      </select>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Title"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New Description"
        className="w-full p-2 border rounded"
        rows={4}
      />

      <button
        onClick={handleUpdate}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded font-semibold cursor-pointer"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Question"}
      </button>
    </div>
  );
};

export default UpdateQuestion;

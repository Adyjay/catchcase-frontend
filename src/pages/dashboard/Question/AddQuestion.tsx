import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addQuestion, fetchAllSubcategories } from "../../../services/apis";

const AddQuestion: React.FC = () => {
  const [quesTitle, setQuesTitle] = useState("");
  const [quesDesc, setQuesDesc] = useState("");
  const [quesSub, setQuesSub] = useState("");
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else 
    {setToken(storedToken);
    loadSubcategories(storedToken)}

    // Replace this with actual fetch from /user/allsubcategory
    // setSubcategories([
    //   { title: "Assault", id: "1" },
    //   { title: "Fraud", id: "2" },
    //   { title: "Drug Offenses", id: "3" }
    // ]);
  }, []);

    const loadSubcategories = async (token: string) => {
      try {
        const data = await fetchAllSubcategories(token);
        setSubcategories(data);
      //   console.log("dats of subcat is ", data);
      //   console.log("sub categoeis aare ", data);
      } catch (err) {
        console.error("Failed to fetch subcategories");
      }
    };

  const handleAddQuestion = async () => {
    if (!quesTitle || !quesDesc || !quesSub) {
      alert("All fields are required.");
      return;
    }

    try {
      const result = await addQuestion(token, quesTitle, quesDesc, quesSub);
      alert(result.message || "Question added!");
      setQuesTitle("");
      setQuesDesc("");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error adding question.");
    }
  };

  return (
    <div className="p-2 bg-white rounded-xl  max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold  text-center">Add Question</h2>

      <input
        value={quesTitle}
        onChange={(e) => setQuesTitle(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Question Title"
      />

      <textarea
        value={quesDesc}
        onChange={(e) => setQuesDesc(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Question Description"
      />

      <select
        value={quesSub}
        onChange={(e) => setQuesSub(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Subcategory</option>
        {subcategories.map((sub, idx) => (
          <option key={idx} value={sub.title}>
            {sub.title}
          </option>
        ))}
      </select>

      <button
        onClick={handleAddQuestion}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded font-semibold cursor-pointer"
      >
        Add Question
      </button>
    </div>
  );
};

export default AddQuestion;

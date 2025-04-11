import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllQuestions } from "../../../services/apis";

const ViewQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else {
      setToken(storedToken);
      fetchQuestions(storedToken);
    }
  }, []);

  const fetchQuestions = async (token: string) => {
    try {
      setLoading(true);
      const data = await getAllQuestions(token);
      console.log("data ", data);
      setQuestions(data || []);
    } catch (err) {
      console.error("Failed to fetch questions", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-center mb-4">All Questions</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow">
          <table className="min-w-full bg-white border rounded-xl">
            <thead>
              <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Subcategory</th>
                <th className="p-3 text-left">Created At</th>
                <th className="p-3 text-left">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3">{q.id}</td>
                  <td className="p-3 font-medium">{q.title}</td>
                  <td className="p-3">{q.description}</td>
                  <td className="p-3">{q.subCategory.title}</td>
                  <td className="p-3 text-sm text-gray-600">{new Date(q.createdAt).toLocaleString()}</td>
                  <td className="p-3 text-sm text-gray-600">{new Date(q.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewQuestions;

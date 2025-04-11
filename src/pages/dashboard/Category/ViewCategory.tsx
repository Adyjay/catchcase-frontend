import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/apis";
import { useNavigate } from "react-router-dom";

const ViewCategories: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else {
      setToken(storedToken);
      fetchCategories(storedToken);
    }
  }, []);

  const fetchCategories = async (token: string) => {
    try {
      setLoading(true);
      const data = await getAllCategories(token);
      console.log("data i s", data);
      setCategories(data);
    } catch (err) {
      alert("Failed to fetch categories.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-center mb-4">All Categories</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow">
          <table className="min-w-full bg-white border rounded-xl">
            <thead>
              <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Icon</th>
                <th className="p-3 text-left">Created At</th>
                <th className="p-3 text-left">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3">{cat.id}</td>
                  <td className="p-3 font-medium">{cat.title}</td>
                  <td className="p-3">{cat.iconString}</td>
                  <td className="p-3 text-sm text-gray-600">{new Date(cat.createdAt).toLocaleString()}</td>
                  <td className="p-3 text-sm text-gray-600">{new Date(cat.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewCategories;

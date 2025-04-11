import React, { useEffect, useState } from "react";
import { getAllSubcategories } from "../../../services/apis";
import { useNavigate } from "react-router-dom";

const ViewSubcategories: React.FC = () => {
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // @ts-ignore
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else {
      setToken(storedToken);
      fetchSubcategories(storedToken);
    }
  }, []);

  const fetchSubcategories = async (token: string) => {
    try {
      setLoading(true);
      const data = await getAllSubcategories(token);
      console.log("dataa aa", data);
      setSubcategories(data || []);
    } catch (err) {
      console.error("Failed to fetch subcategories", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-center mb-4">All Subcategories</h2>
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
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Created At</th>
                <th className="p-3 text-left">Updated At</th>
              </tr>
            </thead>
            <tbody>
              {subcategories.map((sub, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3">{sub.id}</td>
                  <td className="p-3 font-medium">{sub.title}</td>
                  <td className="p-3">{sub.iconString}</td>
                  <td className="p-3">{sub.category?.title}</td>
                  <td className="p-3 text-sm text-gray-600">{new Date(sub.createdAt).toLocaleString()}</td>
                  <td className="p-3 text-sm text-gray-600">{new Date(sub.updatedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewSubcategories;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../../services/apis";

const AddCategory: React.FC = () => {
  const [catTitle, setCatTitle] = useState("");
  const [catIcon, setCatIcon] = useState("");
  const [token, setToken] = useState("");
  const [catLoading, setCatLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else setToken(storedToken);
  }, []);

  const handleAddCategory = async () => {
    if (!catTitle || !catIcon) {
      alert("Both Title and Icon are required.");
      return;
    }

    try {
      setCatLoading(true);
      const result = await addCategory(token, catTitle, catIcon);
      alert(result.message || "Category added!");
      setCatTitle("");
      setCatIcon("");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error adding category.");
    } finally {
      setCatLoading(false);
    }
  };

  return (
    <div className="p-2 bg-white rounded-xl  max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-center">Add Category</h2>

      <input
        value={catTitle}
        onChange={(e) => setCatTitle(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Category Title"
      />

      <input
        value={catIcon}
        onChange={(e) => setCatIcon(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Category Icon"
      />

      <button
        onClick={handleAddCategory}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded font-semibold cursor-pointer"
        disabled={catLoading}
      >
        {catLoading ? "Adding..." : "Add Category"}
      </button>
    </div>
  );
};

export default AddCategory;

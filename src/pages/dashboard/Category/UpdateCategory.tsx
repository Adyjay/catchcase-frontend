import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCategories, updateCategory } from "../../../services/apis";

const UpdateCategory: React.FC = () => {
  const [token, setToken] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory]  = useState("None")
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else {
      setToken(storedToken);
      loadCategories(storedToken);
    }
  }, []);

  const loadCategories = async (token: string) => {
    try {
      const data = await fetchCategories(token);
      setCategories(data);
    } catch (err) {
      console.error("Failed to fetch categories");
    }
  };

  const handleUpdate = async () => {
    if (!selectedId  || !icon) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      const result = await updateCategory(token, selectedId, title, icon);
      alert(result.message || "Category updated!");
      setTitle("");
      setIcon("");
      setSelectedId("");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error updating category.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setSelectedCategory(e.target.value)
    const selected1 = categories.find(x => x.title === e.target.value);
    setSelectedId(selected1[
        'id'
    ]);
    console.log("select ed ", selectedId);

    const cat = categories.find((c) => c._id === selected);
    if (cat) {
    //   setTitle(cat.title);
      setIcon(cat.icon);
    }
  };

  return (
    <div className="p-2 bg-white rounded-xl  max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold  text-center">Update Category</h2>

      <select
        value={selectedId}
        onChange={handleSelection}
        className="w-full p-2 border rounded"
      >
        <option value="">{selectedCategory}</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>{cat.title}</option>
        ))}
      </select>
{/* 
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Title"
        className="w-full p-2 border rounded"
      /> */}
      <input
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        placeholder="New Icon"
        className="w-full p-2 border rounded"
      />

      <button
        onClick={handleUpdate}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded font-semibold cursor-pointer"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Category"}
      </button>
    </div>
  );
};

export default UpdateCategory;

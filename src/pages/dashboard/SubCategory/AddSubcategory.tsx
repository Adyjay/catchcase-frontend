import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addSubcategory, fetchCategories } from "../../../services/apis";

const AddSubcategory: React.FC = () => {
  const [token, setToken] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [subIcon, setSubIcon] = useState("");
  const [subCatCategory, setSubCatCategory] = useState("");
  const [catLoading, setCatLoading] = useState(false);
  const [categories, setCategories] = useState([]);
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
      const cats = await fetchCategories(token);
      setCategories(cats);
    } catch (err) {
      console.error("Error loading categories");
    }
  };

  const handleAddSubcategory = async () => {
    if (!subTitle || !subIcon || !subCatCategory) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      setCatLoading(true);
      const data = await addSubcategory(token, subTitle, subIcon, subCatCategory);
      alert(data.message);
      setSubTitle("");
      setSubIcon("");
      setSubCatCategory("");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error adding subcategory.");
    } finally {
      setCatLoading(false);
    }
  };

  return (
    <div className=" space-y-4 bg-white rounded-xl max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-center ">Add Subcategory</h2>
      <input
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Subcategory Title"
      />
      <input
        value={subIcon}
        onChange={(e) => setSubIcon(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Icon String"
      />
      <select
        value={subCatCategory}
        onChange={(e) => setSubCatCategory(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat: any, idx) => (
          <option key={idx} value={cat.title}>{cat.title}</option>
        ))}
      </select>
      <button
        onClick={handleAddSubcategory}
        className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        disabled={catLoading}
      >
        {catLoading ? "Adding..." : "Add SubCategory"}
      </button>
    </div>
  );
};

export default AddSubcategory;

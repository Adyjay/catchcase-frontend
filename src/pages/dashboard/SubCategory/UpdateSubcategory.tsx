import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllSubcategories, updateSubcategory } from "../../../services/apis";

const UpdateSubcategory: React.FC = () => {
  const [token, setToken] = useState("");
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [title, setTitle] = useState("");
  const [selectedValue, setSelectedValue] = useState("None")
  const [icon, setIcon] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else {
      setToken(storedToken);
      loadSubcategories(storedToken);
    }
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

  const handleUpdate = async () => {
    if (!selectedId || !title || !icon) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      const result = await updateSubcategory(token, selectedId, title, icon);
      alert(result.message || "Subcategory updated!");
      setTitle("");
      setIcon("");
      setSelectedId("");
    } catch (err: any) {
      alert(err.response?.data?.message || "Error updating subcategory.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value)
    const selected = e.target.value;
    console.log("id is ", e.target.value);

    setSelectedId(selected);
    console.log("sub cate is ", subcategories);
    
    

    // subcategories.map((x ) => {
    //     if (x['title'] === e.target.value) {
    //         setSelectedId(x['id'])
    //     }
    // })
    const selected1 = subcategories.find(x => x.title === e.target.value);
if (selected) {
    setSelectedId(selected1.id);
}

    // console.log("this s xxx ", x);
    const sub = subcategories.find((sc) => sc._id === selected);
    if (sub) {
      setTitle(sub.title);
      setIcon(sub.icon);
    }
  };

  return (
    <div className="space-y-4 bg-white rounded-xl  max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold  text-center">Update Subcategory</h2>

      <select
        value={selectedId}
        onChange={handleSelection}
        className="w-full p-2 border rounded"
      >
        <option value="">{selectedValue}</option>
        {subcategories.map((sub) => (
          <option key={sub._id} value={sub._id}>{sub.title}</option>
        ))}
      </select>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Title"
        className="w-full p-2 border rounded"
      />
      <input
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
        placeholder="New Icon"
        className="w-full p-2 border rounded"
      />

      <button
        onClick={handleUpdate}
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded font-semibold"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Subcategory"}
      </button>
    </div>
  );
};

export default UpdateSubcategory;

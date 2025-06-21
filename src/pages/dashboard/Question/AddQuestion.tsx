// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { addQuestion, fetchAllSubcategories } from "../../../services/apis";

// const AddQuestion: React.FC = () => {
//   const [quesTitle, setQuesTitle] = useState("");
//   const [quesDesc, setQuesDesc] = useState("");
//   const [quesSub, setQuesSub] = useState("");
//   const [subcategories, setSubcategories] = useState<any[]>([]);
//   const [token, setToken] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedToken = localStorage.getItem("adminToken");
//     if (!storedToken) navigate("/");
//     else 
//     {setToken(storedToken);
//     loadSubcategories(storedToken)}

//     // Replace this with actual fetch from /user/allsubcategory
//     // setSubcategories([
//     //   { title: "Assault", id: "1" },
//     //   { title: "Fraud", id: "2" },
//     //   { title: "Drug Offenses", id: "3" }
//     // ]);
//   }, []);

//     const loadSubcategories = async (token: string) => {
//       try {
//         const data = await fetchAllSubcategories(token);
//         setSubcategories(data);
//       //   console.log("dats of subcat is ", data);
//       //   console.log("sub categoeis aare ", data);
//       } catch (err) {
//         console.error("Failed to fetch subcategories");
//       }
//     };

//   const handleAddQuestion = async () => {
//     if (!quesTitle || !quesDesc || !quesSub) {
//       alert("All fields are required.");
//       return;
//     }

//     try {
//       const result = await addQuestion(token, quesTitle, quesDesc, quesSub);
//       alert(result.message || "Question added!");
//       setQuesTitle("");
//       setQuesDesc("");
//     } catch (err: any) {
//       alert(err.response?.data?.message || "Error adding question.");
//     }
//   };

//   return (
//     <div className="p-2 bg-white rounded-xl  max-w-xl mx-auto space-y-4">
//       <h2 className="text-xl font-semibold  text-center">Add Question</h2>

//       <input
//         value={quesTitle}
//         onChange={(e) => setQuesTitle(e.target.value)}
//         className="w-full p-2 border rounded"
//         placeholder="Question Title"
//       />

//       <textarea
//         value={quesDesc}
//         onChange={(e) => setQuesDesc(e.target.value)}
//         className="w-full p-2 border rounded"
//         placeholder="Question Description"
//       />

//       <select
//         value={quesSub}
//         onChange={(e) => setQuesSub(e.target.value)}
//         className="w-full p-2 border rounded"
//       >
//         <option value="">Select Subcategory</option>
//         {subcategories.map((sub, idx) => (
//           <option key={idx} value={sub.title}>
//             {sub.title}
//           </option>
//         ))}
//       </select>

//       <button
//         onClick={handleAddQuestion}
//         className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded font-semibold cursor-pointer"
//       >
//         Add Question
//       </button>
//     </div>
//   );
// };

// export default AddQuestion;
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   addQuestion,
// //   // fetchAllSubcategories,
// //   fetchCategories,
// //   getsubcatwithcat
// // } from "../../../services/apis";

// // const AddQuestion: React.FC = () => {
// //   const [quesTitle, setQuesTitle] = useState("");
// //   const [quesDesc, setQuesDesc] = useState("");
// //   const [quesSub, setQuesSub] = useState("");
// //   const [subCatCategory, setSubCatCategory] = useState(""); // category ID
// //   const [categories, setCategories] = useState<any[]>([]);
// //   const [categoryid, setCategoryId] = useState("");
// //   const [subCategories1, setSubCategories1] = useState() // map sub categories with t
  
// //   const [subcategories, setSubcategories] = useState<any[]>([]);
// //   const [token, setToken] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const storedToken = localStorage.getItem("adminToken");
// //     if (!storedToken) navigate("/");
// //     else {
// //       setToken(storedToken);
// //       loadCategories(storedToken);
// //       // loadSubcategories(storedToken);
// //     }
// //   }, []);

// //   const getSubCategoriesOfCategory = async (catID: string) => {
// //     const data = await getsubcatwithcat(token, catID)
// //     setSubCategories1(data)
// //     setSubcategories(data)
// //     console.log("response is ", data)
// //   }

// //   const loadCategories = async (token: string) => {
// //     try {
// //       const data = await fetchCategories(token);
// //       setCategories(data);
// //     } catch (err) {
// //       console.error("Failed to fetch categories");
// //     }
// //   };

// //   // const loadSubcategories = async (token: string) => {
// //   //   try {
// //   //     const data = await fetchAllSubcategories(token);
// //   //     setSubcategories(data);
// //   //   } catch (err) {
// //   //     console.error("Failed to fetch subcategories");
// //   //   }
// //   // };

// //   // const filteredSubcategories = subCatCategory
// //   //   ? subcategories.filter((sub) =>
// //   //       typeof sub.category === "string"
// //   //         ? sub.category === subCatCategory
// //   //         : sub.category?.id === subCatCategory
// //   //     )
// //   //   : [];

// //     const handleCategoryChange = async (categoryId: string) => {
// //     setSubCatCategory(categoryId);
// //     setQuesSub(""); // Clear subcategory when category changes

// //     if (!categoryId) {
// //       setSubcategories([]);
// //       return;
// //     }

// //     try {
// //       const subcats = await getsubcatwithcat(token, categoryId);
// //       setSubcategories(subcats);
// //     } catch (err) {
// //       console.error("Failed to fetch subcategories");
// //       setSubcategories([]);
// //     }
// //   };


// //   const handleAddQuestion = async () => {
// //     if (!quesTitle || !quesDesc || !quesSub) {
// //       alert("All fields are required.");
// //       return;
// //     }

// //     try {
// //       const result = await addQuestion(token, quesTitle, quesDesc, quesSub);
// //       alert(result.message || "Question added!");
// //       setQuesTitle("");
// //       setQuesDesc("");
// //       setQuesSub("");
// //       setSubCatCategory("");
// //     } catch (err: any) {
// //       alert(err.response?.data?.message || "Error adding question.");
// //     }
// //   };

// //   return (
// //     <div className="p-2 bg-white rounded-xl max-w-xl mx-auto space-y-4">
// //       <h2 className="text-xl font-semibold text-center">Add Question</h2>

// //       <input
// //         value={quesTitle}
// //         onChange={(e) => setQuesTitle(e.target.value)}
// //         className="w-full p-2 border rounded"
// //         placeholder="Question Title"
// //       />

// //       <textarea
// //         value={quesDesc}
// //         onChange={(e) => setQuesDesc(e.target.value)}
// //         className="w-full p-2 border rounded"
// //         placeholder="Question Description"
// //       />

// //       {/* Category Selection */}
// //       <select
// //         value={subCatCategory}
// //         onChange={async (e) => {
// //           handleCategoryChange(e.target.value)
// //           setCategoryId(e.target.value);
// //           await getSubCategoriesOfCategory(e.target.value)
// //           setSubCatCategory(e.target.value);
        
// //           // setQuesSub(""); // clear subcategory when category changes
// //         }}
// //         className="w-full p-2 border rounded"
// //       >
// //         <option value="">Select Category</option>
// //         {categories.map((cat, idx) => (
// //           <option key={idx} value={cat.id}>
// //             {cat.title}
// //           </option>
// //         ))}
// //       </select>

// //       {/* Subcategory Selection */}
// //       <select
// //         value={quesSub}
// //         onChange={(e) => setQuesSub(e.target.value)}
// //         className="w-full p-2 border rounded"
// //         disabled={!subCatCategory}
// //       >
// //         <option value="">Select Subcategory</option>
// //         {subcategories.map((sub, idx) => (
// //           <option key={idx} value={sub.id}>
// //             {sub.title}
// //           </option>
// //         ))}
// //       </select>

// //       <button
// //         onClick={handleAddQuestion}
// //         className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded font-semibold cursor-pointer"
// //       >
// //         Add Question
// //       </button>
// //     </div>
// //   );
// // };

// // export default AddQuestion;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  addQuestion,
  fetchCategories,
  getsubcatwithcat
} from "../../../services/apis";

const AddQuestion: React.FC = () => {
  const [quesTitle, setQuesTitle] = useState("");
  const [quesDesc, setQuesDesc] = useState("");
  const [quesSub, setQuesSub] = useState("");
  const [subCatCategory, setSubCatCategory] = useState(""); // selected category ID
  const [categories, setCategories] = useState<any[]>([]);
  const [subcategories, setSubcategories] = useState<any[]>([]);
  const [token, setToken] = useState("");
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

  const handleCategoryChange = async (categoryId: string) => {
    setSubCatCategory(categoryId);
    setQuesSub(""); // Clear selected subcategory

    if (!categoryId) {
      setSubcategories([]);
      return;
    }

    try {
      const subcats = await getsubcatwithcat(token, categoryId);
      setSubcategories(subcats);
    } catch (err) {
      console.error("Failed to fetch subcategories");
      setSubcategories([]);
    }
  };

  const handleAddQuestion = async () => {
    if (!quesTitle || !quesDesc || !quesSub) {
      alert("All fields are required.");
      return;
    }

    console.log("cat id ", subCatCategory)
    console.log("subcat id ", quesSub)

    try {
      const result = await addQuestion(token, quesTitle, subCatCategory, quesDesc, quesSub);
      alert(result.message || "Question added!");
      setQuesTitle("");
      setQuesDesc("");
      setQuesSub("");
      setSubCatCategory("");
      setSubcategories([]);
    } catch (err: any) {
      alert(err.response?.data?.message || "Error adding question.");
    }
  };

  return (
    <div className="p-2 bg-white rounded-xl max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-center">Add Question</h2>

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

      {/* Category Selection */}
      <select
        value={subCatCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.title}
          </option>
        ))}
      </select>

      {/* Subcategory Selection */}
      <select
        value={quesSub}
        onChange={(e) => setQuesSub(e.target.value)}
        className="w-full p-2 border rounded"
        disabled={!subCatCategory}
      >
        <option value="">Select Subcategory</option>
        {subcategories.map((sub) => (
          <option key={sub.id} value={sub.id}>
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

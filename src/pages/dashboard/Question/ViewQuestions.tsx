// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllQuestions } from "../../../services/apis";

// const ViewQuestions: React.FC = () => {
//   const [questions, setQuestions] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
// //   @ts-ignore
//   const [token, setToken] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedToken = localStorage.getItem("adminToken");
//     if (!storedToken) navigate("/");
//     else {
//       setToken(storedToken);
//       fetchQuestions(storedToken);
//     }
//   }, []);

//   const fetchQuestions = async (token: string) => {
//     try {
//       setLoading(true);
//       const data = await getAllQuestions(token);
//       console.log("data ", data);
//       setQuestions(data || []);
//     } catch (err) {
//       console.error("Failed to fetch questions", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold text-center mb-4">All Questions</h2>
//       {loading ? (
//         <div className="text-center text-gray-500">Loading...</div>
//       ) : (
//         <div className="overflow-x-auto rounded-xl shadow">
//           <table className="min-w-full bg-white border rounded-xl">
//             <thead>
//               <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//                 <th className="p-3 text-left">ID</th>
//                 <th className="p-3 text-left">Title</th>
//                 <th className="p-3 text-left">Description</th>
//                 <th className="p-3 text-left">Subcategory</th>
//                 <th className="p-3 text-left">Created At</th>
//                 <th className="p-3 text-left">Updated At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {questions.map((q, idx) => (
//                 <tr key={idx} className="border-b hover:bg-gray-50">
//                   <td className="p-3">{q.id}</td>
//                   <td className="p-3 font-medium">{q.title}</td>
//                   <td className="p-3">{q.description}</td>
//                   <td className="p-3">{q.subCategory.title}</td>
//                   <td className="p-3 text-sm text-gray-600">{new Date(q.createdAt).toLocaleString()}</td>
//                   <td className="p-3 text-sm text-gray-600">{new Date(q.updatedAt).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewQuestions;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllQuestions } from "../../../services/apis";

const QUESTIONS_PER_PAGE = 10;

const ViewQuestions: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    if (!storedToken) navigate("/");
    else fetchQuestions(storedToken);
  }, []);

  const fetchQuestions = async (token: string) => {
    try {
      setLoading(true);
      const data = await getAllQuestions(token);
      setQuestions(data || []);
    } catch (err) {
      console.error("Failed to fetch questions", err);
    } finally {
      setLoading(false);
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
  const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
  const currentQuestions = questions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-center mb-4">All Questions</h2>
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <>
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
                {currentQuestions.map((q, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="p-3">{q.id}</td>
                    <td className="p-3 font-medium">{q.title}</td>
                    <td className="p-3">{q.description}</td>
                    <td className="p-3">{q.subCategory?.title}</td>
                    <td className="p-3 text-sm text-gray-600">{new Date(q.createdAt).toLocaleString()}</td>
                    <td className="p-3 text-sm text-gray-600">{new Date(q.updatedAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === idx + 1 ? "bg-purple-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewQuestions;

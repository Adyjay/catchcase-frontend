// import React, { useEffect, useState } from "react";
// import { getAllGames, getGameQuestions } from "../../../services/apis";

// interface Game {
//   id: number;
//   name: string;
// }

// interface Question {
//   id: number;
//   question: string;
//   answer: string;
//   opt01: string;
//   opt02: string;
//   opt03: string;
//   opt04: string;
// }

// const QUESTIONS_PER_PAGE = 10;

// const ViewGameQuestions: React.FC = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [token, setToken] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("adminToken");
//     if (storedToken) {
//       setToken(storedToken);
//       fetchGames(storedToken);
//     }
//   }, []);

//   const fetchGames = async (token: string) => {
//     try {
//       const result = await getAllGames(token,);
//       if (result.success && result.data) {
//         setGames(result.data);
//       } else {
//         alert(result.message || "No games found.");
//       }
//     } catch (err: any) {
//       alert(err.response?.data?.message || "Failed to fetch games.");
//     }
//   };

//   const fetchQuestions = async (gameId: number) => {
//     try {
//       setLoading(true);
//       setQuestions([]);
//       const result = await getGameQuestions(token, gameId);
//       if (result.success && result.data) {
//         setQuestions(result.data);
//         setCurrentPage(1);
//       } else {
//         alert(result.message || "No questions found.");
//       }
//     } catch (err: any) {
//       alert(err.response?.data?.message || "Error fetching questions.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Pagination logic
//   const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE);
//   const startIndex = (currentPage - 1) * QUESTIONS_PER_PAGE;
//   const currentQuestions = questions.slice(startIndex, startIndex + QUESTIONS_PER_PAGE);

//   const goToPage = (page: number) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-xl font-semibold text-center mb-4">View Game Questions</h2>

//       <div className="mb-4 max-w-sm mx-auto">
//         <select
//           value={selectedGameId ?? ""}
//           onChange={(e) => {
//             const gameId = Number(e.target.value);
//             setSelectedGameId(gameId);
//             fetchQuestions(gameId);
//           }}
//           className="w-full p-2 border rounded"
//         >
//           <option value="">Select Game</option>
//           {games.map((game) => (
//             <option key={game.id} value={game.id}>
//               {game.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {loading ? (
//         <div className="text-center text-gray-500">Loading...</div>
//       ) : questions.length === 0 && selectedGameId ? (
//         <div className="text-center text-gray-600 mt-4">No questions found.</div>
//       ) : (
//         <>
//           <div className="overflow-x-auto rounded-xl shadow">
//             <table className="min-w-full bg-white border rounded-xl">
//               <thead>
//                 <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//                   <th className="p-3 text-left">ID</th>
//                   <th className="p-3 text-left">Question</th>
//                   <th className="p-3 text-left">Answer</th>
//                   <th className="p-3 text-left">Option 1</th>
//                   <th className="p-3 text-left">Option 2</th>
//                   <th className="p-3 text-left">Option 3</th>
//                   <th className="p-3 text-left">Option 4</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentQuestions.map((q, idx) => (
//                   <tr key={idx} className="border-b hover:bg-gray-50">
//                     <td className="p-3">{q.id}</td>
//                     <td className="p-3">{q.question}</td>
//                     <td className="p-3 font-semibold text-green-700">{q.answer}</td>
//                     <td className="p-3">{q.opt01}</td>
//                     <td className="p-3">{q.opt02}</td>
//                     <td className="p-3">{q.opt03}</td>
//                     <td className="p-3">{q.opt04}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination Controls */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center mt-4 space-x-2">
//               <button
//                 onClick={() => goToPage(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Prev
//               </button>
//               {[...Array(totalPages)].map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => goToPage(idx + 1)}
//                   className={`px-3 py-1 border rounded ${
//                     currentPage === idx + 1
//                       ? "bg-purple-500 text-white font-semibold"
//                       : "bg-gray-100 hover:bg-gray-200"
//                   }`}
//                 >
//                   {idx + 1}
//                 </button>
//               ))}
//               <button
//                 onClick={() => goToPage(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default ViewGameQuestions;

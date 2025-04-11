// import React, { useState } from "react";
// import CategoryPage from "./CategoryPage";
// import SubCategoryPage from "./SubCategoryPage";
// import QuestionsPage from "./QuestionsPage";
// import UsersPage from "./UsersPage";

// const tabs = ["Category", "SubCategory", "Questions", "Users"] as const;
// type Tab = typeof tabs[number];

// const Dashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<Tab>("Category");

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "Category":
//         return <CategoryPage />;
//       case "SubCategory":
//         return <SubCategoryPage />;
//       case "Questions":
//         return <QuestionsPage />;
//       case "Users":
//         return <UsersPage />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
//       {/* Gradient Header */}
//       <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-center text-white shadow-md">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//       </header>

//       {/* Tabs */}
//       <div className="max-w-6xl mx-auto mt-6">
//         <div className="flex justify-center gap-4 border-b border-gray-300 bg-white/60 rounded-t-xl backdrop-blur-sm px-6 py-3 shadow">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`py-2 px-4 text-sm font-medium border-b-2 transition-all duration-200 ${
//                 activeTab === tab
//                   ? "border-indigo-600 text-indigo-600"
//                   : "border-transparent text-gray-500 hover:text-indigo-500"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Content Area */}
//         <div className="mt-6 bg-white p-6 rounded-b-xl shadow-xl backdrop-blur-md">
//           {renderTabContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

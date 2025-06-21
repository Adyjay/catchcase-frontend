// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import CategoryPage from "./CategoryPage";
// import SubCategoryPage from "./SubCategoryPage";
// import QuestionsPage from "./QuestionsPage";
// import UsersPage from "./UsersPage";
// import { dummyImage } from "../../services/constants";
// // const [searchQuery, setSearchQuery] = useState('');

// const tabs = ["Category", "SubCategory", "Questions", "Users"] as const;
// type Tab = typeof tabs[number];

// const Dashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<Tab>("Category");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   // @ts-ignore
//   const [photo, setPhoto] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedName = localStorage.getItem("adminName");
//     const storedEmail = localStorage.getItem("adminEmail");
//     // const storedPhoto = localStorage.getItem("adminPhoto");

//     if (!storedName || !storedEmail) {
//       navigate("/"); // Redirect to login if data missing
//     }

//     setName(storedName || "");
//     setEmail(storedEmail || "");
//     // setPhoto(dummyImage)
//     // setPhoto(storedPhoto || "");
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

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
//       <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-white shadow-md flex justify-between items-center">
//         <h1 className="text-2xl font-bold"><span>Catchcase</span>: Admin Dashboard</h1>
//         <div className="flex items-center gap-4">
//           <div className="text-right hidden sm:block">
//             <p className="font-semibold">Welcome, {name || "Admin"} 👋</p>
//             <p className="text-sm">{email}</p>
//           </div>
//           <img
//             src={dummyImage.toString()}
//             alt="Admin"
//             className="w-10 h-10 rounded-full border-2 border-white"
//           />
//           <button
//             onClick={handleLogout}
//             className="ml-2 px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </header>
//       {/* <input
//       type="text"
//       value={searchQuery}
//       onChange={(e) => setSearchQuery(e.target.value)}
//        placeholder="Search anything..."
//        className="w-full p-2 mb-4 border rounded"/> */}

//       {/* Tabs */}
//       <div className="max-w-6xl mx-auto mt-6 flex gap-6">
//         {/* <div className="flex justify-center gap-4 border-b border-gray-300 bg-white/60 rounded-t-xl backdrop-blur-sm px-6 py-3 shadow"> */}
//         {/* Sidebar Tabs */}
// <div className="w-56 bg-white p-6 rounded-xl shadow-xl backdrop-blur-md flex flex-col gap-4 h-fit">
//   {tabs.map((tab) => (
//     <button
//       key={tab}
//       onClick={() => setActiveTab(tab)}
//       className={`py-2 px-3 text-left text-sm font-medium rounded-lg transition-all duration-200 ${
//         activeTab === tab
//           ? "bg-indigo-600 text-white shadow"
//           : "bg-white hover:bg-indigo-100 text-gray-700"
//       }`}
//     >
//       {tab}
//     </button>
//   ))}
// </div>


//         {/* Content Area */}
//         <div className="flex-1 bg-white p-6 rounded-b-xl shadow-xl backdrop-blur-md">
//           {renderTabContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
 
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import CategoryPage from "./CategoryPage";
// import SubCategoryPage from "./SubCategoryPage";
// import QuestionsPage from "./QuestionsPage";
// import UsersPage from "./UsersPage";
// import { dummyImage } from "../../services/constants";
// import AddGameQuestion from "./AddGameQuestion";
// const tabs = ["Category", "SubCategory", "Questions", "Users"] as const;
// type Tab = typeof tabs[number];

// const Dashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<Tab>("Category");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedName = localStorage.getItem("adminName");
//     const storedEmail = localStorage.getItem("adminEmail");

//     if (!storedName || !storedEmail) {
//       navigate("/");
//     }

//     setName(storedName || "");
//     setEmail(storedEmail || "");
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

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
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
//       {/* Header */}
//       <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-white shadow-md flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Catchcase: Admin Dashboard</h1>
//         <div className="flex items-center gap-4">
//           <div className="text-right hidden sm:block">
//             <p className="font-semibold">Welcome, {name || "Admin"} 👋</p>
//             <p className="text-sm">{email}</p>
//           </div>
//           <img
//             src={dummyImage.toString()}
//             alt="Admin"
//             className="w-10 h-10 rounded-full border-2 border-white"
//           />
//           <button
//             onClick={handleLogout}
//             className="ml-2 px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-60 bg-white shadow-md p-6 space-y-3">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
//                 activeTab === tab
//                   ? "bg-indigo-600 text-white shadow"
//                   : "hover:bg-indigo-100 text-gray-700"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </aside>

//         {/* Content */}
//         <main className="flex-1 bg-white m-6 p-6 rounded-xl shadow-lg overflow-auto">
//           {renderTabContent()}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import SubCategoryPage from "./SubCategoryPage";
import QuestionsPage from "./QuestionsPage";
import UsersPage from "./UsersPage";
import AddGameQuestion from "./Games/AddGameQuestion";
import { dummyImage } from "../../services/constants";

const tabs = ["Category", "SubCategory", "Questions", "Users", "AddGameQuestion"] as const;
type Tab = typeof tabs[number];

// Optional: To show user-friendly labels in the sidebar
const tabLabels: Record<Tab, string> = {
  Category: "Category",
  SubCategory: "SubCategory",
  Questions: "Questions",
  Users: "Users",
  AddGameQuestion: "Add Game Question",
};

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Category");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("adminName");
    const storedEmail = localStorage.getItem("adminEmail");

    if (!storedName || !storedEmail) {
      navigate("/");
    }

    setName(storedName || "");
    setEmail(storedEmail || "");
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Category":
        return <CategoryPage />;
      case "SubCategory":
        return <SubCategoryPage />;
      case "Questions":
        return <QuestionsPage />;
      case "Users":
        return <UsersPage />;
      case "AddGameQuestion":
        return <AddGameQuestion />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-white shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Catchcase: Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="font-semibold">Welcome, {name || "Admin"} 👋</p>
            <p className="text-sm">{email}</p>
          </div>
          <img
            src={dummyImage.toString()}
            alt="Admin"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <button
            onClick={handleLogout}
            className="ml-2 px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-white shadow-md p-6 space-y-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow"
                  : "hover:bg-indigo-100 text-gray-700"
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </aside>

        {/* Content */}
        <main className="flex-1 bg-white m-6 p-6 rounded-xl shadow-lg overflow-auto">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

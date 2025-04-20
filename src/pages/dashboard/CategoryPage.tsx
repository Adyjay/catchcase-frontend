import React, { useState } from "react";
import AddCategory from "./Category/AddCategory";
import UpdateCategory from "./Category/UpdateCategory";
import ViewCategory from "./Category/ViewCategory";

const subtabs = ["AddCategory", "UpdateCategory", "ViewCategory"] as const;
type SubTab = typeof subtabs[number];


const CategoryPage: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("AddCategory");

  return (
    <div>
      {/* Subtabs */}
      <div className="flex gap-3 border-b mb-6">
        {subtabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`py-2 px-4 border-b-2 font-medium transition ${
              activeSubTab === tab
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-indigo-500"
            }`}
          >
            {tab.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>

      {/* Subtab Content */}
      <div className="p-4 bg-white rounded-xl shadow">
        {activeSubTab === "AddCategory" && <AddCategory />}
        {activeSubTab === "UpdateCategory" && <UpdateCategory />}
        {activeSubTab === "ViewCategory" && <ViewCategory />}
      </div>
    </div>
  );
};

export default CategoryPage;

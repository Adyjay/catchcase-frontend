import React, { useState } from "react";
import AddSubcategory from "./SubCategory/AddSubcategory";
import UpdateSubcategory from "./SubCategory/UpdateSubcategory";
import ViewSubcategory from "./SubCategory/ViewSubcategory";

const tabs = ["Add Subcategory", "Update Subcategory", "View Subcategories"] as const;
type TabType = typeof tabs[number];

const SubCategoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Add Subcategory");

  return (
    <div>
      <div className="flex gap-3 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 border-b-2 font-medium transition ${
              activeTab === tab
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-indigo-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white rounded-xl shadow">
        {activeTab === "Add Subcategory" && <AddSubcategory />}
        {activeTab === "Update Subcategory" && <UpdateSubcategory />}
        {activeTab === "View Subcategories" && <ViewSubcategory />}
      </div>
    </div>
  );
};

export default SubCategoryPage;

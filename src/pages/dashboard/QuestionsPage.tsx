import React, { useState } from "react";
import AddQuestion from "./Question/AddQuestion";
import UpdateQuestion from "./Question/UpdateQuestion";
import ViewQuestions from "./Question/ViewQuestions";


const tabs = ["Add Question", "Update Question", "View Questions"] as const;
type TabType = typeof tabs[number];

const QuestionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Add Question");

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
        {activeTab === "Add Question" && <AddQuestion />}
        {activeTab === "Update Question" && <UpdateQuestion />}
        {activeTab === "View Questions" && <ViewQuestions />}
      </div>
    </div>
  );
};

export default QuestionsPage;

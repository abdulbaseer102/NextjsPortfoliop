// app/skill/page.tsx
import React from "react";

// Hardcoded SkillCards
const SkillCard1 = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">JavaScript</h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-600">
          <div
            style={{ width: `90%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 dark:bg-blue-400"
          ></div>
        </div>
      </div>
    </div>
  );
};

const SkillCard2 = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">React.js</h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-600">
          <div
            style={{ width: `85%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 dark:bg-blue-400"
          ></div>
        </div>
      </div>
    </div>
  );
};

const SkillCard3 = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">Tailwind CSS</h3>
      <div className="relative pt-1">
        <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-300 dark:bg-gray-600">
          <div
            style={{ width: `95%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 dark:bg-blue-400"
          ></div>
        </div>
      </div>
    </div>
  );
};

// The main SkillsPage component
const SkillsPage  = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCard1 />
        <SkillCard2 />
        <SkillCard3 />
      </div>
    </div>
  );
};

export default SkillsPage;

import React from "react";
import { SkillCard } from '../skill/page'  // Make sure SkillCard is in the right path

const skills = [
  { skill: "JavaScript", level: 90 },
  { skill: "React.js", level: 85 },
  { skill: "Next.js", level: 80 },
  { skill: "Tailwind CSS", level: 95 },
];

const SkillsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((item, index) => (
          <SkillCard key={index} skill={item.skill} level={item.level} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;

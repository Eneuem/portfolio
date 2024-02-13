'use client'

import React from 'react';

// Define the interface outside the component for clarity and reusability.
interface SkillCardProps {
  title: string;
  skills: string[];
}

// Use the SkillCardProps interface to type the component props.
const SkillSection: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="w-44 h-auto py-2 border border-gray-400 flex-col justify-start items-start gap-2">
      <div className="self-stretch px-2 justify-start items-start border-b border-gray-400">
        <div className="text-white text-base font-semibold">{title}</div>
      </div>
      <div className="p-2 flex-col justify-start items-start gap-2 flex">
        {skills.map((skill, index) => (
          <div key={index} className="text-gray-400 text-base font-normal">{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
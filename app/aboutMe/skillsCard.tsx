'use client'

import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}
const SkillSection: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="w-44 h-auto border border-gray-400 flex-col justify-start items-start gap-2">
      <div className="p-2 justify-start items-start border-b border-gray-400 bg-teal-900">
        <div className="text-white text-base font-semibold ">{title}</div>
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

'use client'

import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}
const SkillSection: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="w-auto h-auto border border-primary flex-col justify-start items-start gap-2">
      <div className="p-2 justify-start items-start border-b border-primary">
        <div className="text-primary text-base font-semibold ">{title}</div>
      </div>
      <div className="p-2 flex-col justify-start items-start gap-2 flex">
        {skills.map((skill, index) => (
          <div key={index} className="text-primary text-base font-normal">{skill}</div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;

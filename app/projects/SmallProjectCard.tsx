'use client';

import React from 'react';

interface SmallProject {
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
}

const SmallProjectCard: React.FC<{ project: SmallProject }> = ({ project }) => {
  return (
    <div className="w-96 h-64 border border-gray-400 flex flex-col justify-start items-start">
      <div className="p-2 flex justify-start items-start gap-2 w-full">
        {project.technologies.map((tech, index) => (
          <div key={index} className="text-gray-400 text-base font-normal" style={{ whiteSpace: 'pre-wrap' }}>{tech}</div>
        ))}
      </div>
      <div className="self-stretch flex-grow p-4 border-t border-gray-400 flex flex-col justify-between items-start gap-4">
        <div>
          <div className="text-white text-2xl font-medium">{project.title}</div>
          <div className="text-gray-400 text-base font-normal">{project.description}</div>
        </div>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-400 flex justify-center items-end text-gray-400 text-base font-medium hover:bg-gray-400 hover:text-background transition-all">
          Visit
        </a>
      </div>
    </div>
  );
};

export default SmallProjectCard;

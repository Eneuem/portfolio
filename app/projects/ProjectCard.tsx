'use client'

import Image from 'next/image';
import React from 'react';


interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="w-96 h-96 border border-gray-400 flex flex-col justify-start items-start">
      <Image width={384} height={250} className="border-b border-gray-400" src={project.imageUrl} alt={project.title} />
      <div className="self-stretch p-2 flex justify-start items-start gap-2">
        {project.technologies.map((tech, index) => (
          <div key={index} className="text-gray-400 text-base font-normal">{tech}</div>
        ))}
      </div>
      <div className="self-stretch h-44 p-4 border-t border-gray-400 flex flex-col justify-start items-start gap-4">
        <div className="self-stretch text-white text-2xl font-medium">{project.title}</div>
        <div className="self-stretch text-gray-400 text-base font-normal">{project.description}</div>
        <div className="flex justify-start items-end gap-4">
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 border ${project.status === "Live" ? "border-indigo-700  hover:bg-indigo-700" : "border-gray-400"} flex justify-center items-center gap-2.5 text-${project.status === "Live" ? "white" : "gray-400"} text-base font-medium`}>
            {project.status}
          </a>
        </div>

      </div>
    </div>

  );
};

export default ProjectCard;
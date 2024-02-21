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
<div className="w-96 h-auto flex flex-col justify-between border border-primary">
  <div>
    <Image width={384} height={250} className="border-b border-primary" src={project.imageUrl} alt={project.title} />
    <div className="p-2 flex justify-start items-start gap-2">
      {project.technologies.map((tech, index) => (
        <div key={index} className="text-primary text-base font-normal">{tech}</div>
      ))}
    </div>
    <div className="p-4 border-t border-primary flex flex-col justify-start items-start gap-4">
      <div className="text-primary text-2xl font-medium">{project.title}</div>
      <div className="text-primary text-base font-normal">{project.description}</div>
    </div>
  </div>
  <div className="p-4 flex justify-start items-end">
    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 border ${project.status === "Live" ? "border-secondary hover:bg-secondary" : "border-primary"} flex justify-center items-center gap-2.5 text-${project.status === "Live" ? "white" : "secondary"} text-base font-medium`}>
      {project.status}
    </a>
  </div>
</div>


  );
};

export default ProjectCard;

'use strict';

import React from 'react';
import ProjectCard from './ProjectCard'; 
import SmallProjectCard from './SmallProjectCard';
import { projects, SmallProjects } from './ProjectData';
import Link from 'next/link';

const Projects: React.FC = () => {


    return (
        <div className="flex flex-col m-auto mt-20 justify-around w-[76%] py-8">
            <div className="flex justify-between ">
                <div className="items-center gap-4 inline-flex ">
                    <div className="items-start flex gap-5">
                        <div className="text-secondary text-3xl font-medium ">#</div>
                        <div className="text-primary text-3xl font-medium ">projects</div>
                        <div className="hidden md:flex self-center w-96 h-1 bg-secondary" ></div>
                        <div className="md:hidden self-center w-10 h-1 bg-secondary" ></div>
                    </div>
            </div>
            </div>
            <div className="flex">
            <div className="mt-10 flex flex-wrap gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            </div>
                <>
                    <div className="items-center gap-4 inline-flex mt-10">
                    <div className="items-start flex gap-5">
                        <div className="text-secondary text-3xl font-medium ">#</div>
                        <div className="text-primary text-3xl font-medium ">small projects</div>
                        <div className="hidden md:flex self-center w-96 h-1 bg-secondary" ></div>
                        <div className="md:hidden self-center w-10 h-1 bg-secondary" ></div>
                    </div>
            </div>
                    <div className="mt-10 flex flex-col gap-10">
                        {/* Affichage des SmallProjectCard */}
                        {SmallProjects.map((project, index) => (
                            <SmallProjectCard key={`small-${index}`} project={project} />
                        ))}
                    </div>
                </>
        </div>
    );
};

export default Projects;
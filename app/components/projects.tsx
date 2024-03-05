'use strict'

import React from 'react'
import Link from 'next/link'
import { projects } from '../projects/ProjectData'
import ProjectCard from '../projects/ProjectCard'

const ProjectsSum: React.FC = () => {
    return (
        <div className="flex flex-col m-auto mt-20 justify-around w-[76%] py-8">
            <div className="flex justify-between ">
                <div className="items-center gap-4 inline-flex ">
                    <div className="items-start flex gap-5">
                        <div className="text-secondary text-3xl font-medium">#</div>
                        <div className="text-primary text-3xl font-medium">projects</div>
                        <div className="hidden md:flex self-center w-96 h-1 bg-secondary"></div>
                        <div className="md:hidden self-center w-10 h-1 bg-secondary" ></div>
                    </div>
                    <div className="justify-self-end inline-flex">
                        <Link className="text-primary text-base font-medium border border-primary p-2 hover:bg-primary hover:text-background transition-all" href="/projects" passHref>
                            View all
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-10">
                {projects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsSum;

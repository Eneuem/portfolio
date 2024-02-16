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
                        <div className="text-indigo-700 text-3xl font-medium">#</div>
                        <div className="text-white text-3xl font-medium">projects</div>
                        <div className="hidden md:flex self-center" style={{ width: 550, height: 1, background: '#5158BB' }}></div>
                        <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>
                    </div>
                    <div className="justify-self-end inline-flex">
                        <Link className="text-white text-base font-medium border border-white p-2 hover:bg-white hover:text-background transition-all" href="/projects" passHref>
                            View all
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-col md:flex-row gap-10 flex-wrap">
                {projects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsSum;

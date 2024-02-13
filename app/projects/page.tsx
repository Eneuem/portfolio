'use client';

import React from 'react';
import ProjectCard from './ProjectCard'; 
import SmallProjectCard from './SmallProjectCard';
import { projects, SmallProjects } from './ProjectData';
import Link from 'next/link';

const Projects: React.FC<{ maxProjects?: number, includeSmallProjects?: boolean, showViewAllButton?: boolean }> = ({ maxProjects, includeSmallProjects = true, showViewAllButton = false }) => {

    const displayedProjects = maxProjects ? projects.slice(0, maxProjects) : projects;

    return (
        <div className="flex flex-col m-auto mt-20 justify-around w-[76%] py-8">
            <div className="flex justify-between ">
                <div className="items-center gap-4 inline-flex ">
                    <div className="items-start flex gap-5">
                        <div className="text-indigo-700 text-3xl font-medium ">#</div>
                        <div className="text-white text-3xl font-medium ">projects</div>
                        <div className="hidden md:flex self-center" style={{ width: 580, height: 1, background: '#5158BB' }}></div>
                        <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>
                    </div>
                    <div className="justify-self-end">
                    {showViewAllButton && (
                    <Link className="text-white text-base font-medium border border-white p-2 hover:bg-white hover:text-background transition-all" href="/projects" passHref>
                        View all
                    </Link>     
                )}
                </div>
            </div>
            </div>
            {/* <div className="mt-10 flex flex-col md:flex-row gap-10">
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div> */}
            <div className="mt-10 flex flex-col md:flex-row gap-10">
                {/* Affichage des ProjectCard */}
                {displayedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            {includeSmallProjects && (
                <>
                    <div className="items-center gap-4 inline-flex mt-10">
                    <div className="items-start flex gap-5">
                        <div className="text-indigo-700 text-3xl font-medium ">#</div>
                        <div className="text-white text-3xl font-medium ">small projects</div>
                        <div className="hidden md:flex self-center" style={{ width: 580, height: 1, background: '#5158BB' }}></div>
                        <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>
                    </div>
            </div>
                    <div className="mt-10 flex flex-col md:flex-row gap-10">
                        {/* Affichage des SmallProjectCard */}
                        {SmallProjects.map((project, index) => (
                            <SmallProjectCard key={`small-${index}`} project={project} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Projects;
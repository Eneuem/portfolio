'use client';

import React from 'react';
import ProjectCard from './ProjectCard'; 

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Cryptobel - NFT I.A",
            description: "FAQ Web3 for Belgian Citizens (Non-profit)",
            technologies: ["PHP", "Tailwindcss", "jquery", "MYSQL"],
            status: "Live",
            imageUrl: "https://via.placeholder.com/331x201"
        },
        {
            title: "NEM - L'épilogue",
            description: "Album promotion website",
            technologies: ["REACT", "JS", "CSS"],
            status: "Live",
            imageUrl: "https://via.placeholder.com/331x201"
        },
        {
            title: "Cryptobel - NFT I.A",
            description: "FAQ Web3 for Belgian Citizens (Non-profit)",
            technologies: ["PHP", "Tailwindcss", "jquery", "MYSQL"],
            status: "Live",
            imageUrl: "https://via.placeholder.com/331x201"
        },
    ];

    return (
        <div className="flex flex-col w-[76%] m-auto content-center mt-20 justify-around">
            <div className="flex justify-between">
                <div className="items-center gap-4 inline-flex">
                    <div className="items-start flex gap-5">
                        <div className="text-indigo-700 text-3xl font-medium ">#</div>
                        <div className="text-white text-3xl font-medium ">projects</div>
                        <div className="self-center" style={{ width: 511, height: 1, background: '#5158BB' }}></div>
                    </div>
                <div className="text-white text-base font-medium justify-self-end">View all</div>
            </div>
            </div>
            <div className="mt-10 flex gap-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

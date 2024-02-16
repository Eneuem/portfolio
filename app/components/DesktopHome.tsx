'use client'

import React from 'react';
import Image from 'next/image';
import ProjectsSum from '../components/projects';
import Skills from '../components/skills';
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";

const DesktopHome: React.FC = () => {
    return (
        <div className="pt-10 p-4 flex flex-col overflow-x-hidden">
            {/* TITLE */}
            <div className="flex justify-between w-[76%] m-auto">
                <div className="flex flex-col pt-16">
                    <span className="text-white text-3xl font-semibold">Naïm Chelbat,</span>
                    <span className="text-indigo-700 text-3xl font-semibold">Front-end developer,</span>
                    <span className="text-white text-3xl font-light">Brussels</span>

                    <div className="w-80 text-gray-400 text-base font-normal pt-10">
                        Making websites from scratch,with a strong afinity for databases, API and web3
                    </div>
                </div>
                {/* IMAGE */}
                <div className="w-96 h-96 relative">
                    <div className="w-28 h-28 left-[6px] top-[125.60px] absolute">
                        {/* <img className="w-14 h-20 left-[42.18px] top-[24.10px] absolute border border-indigo-700" src="https://via.placeholder.com/52x78" />
                        <img className="w-14 h-20 left-[1px] top-[65.27px] absolute origin-top-left -rotate-90 border border-indigo-700" src="https://via.placeholder.com/52x78" /> */}
                    </div>
                    <Image src="/avatar.png" alt="Avatar" width={384} height={384} />
                    <div className="w-14 h-14 left-[280.62px] top-[300.75px] absolute flex-col justify-between items-start inline-flex">
                        <div className="self-stretch justify-between items-start inline-flex">
                            {Array(5).fill(null).map((_, index) => (
                                <div key={index} className="w-1 h-1 bg-black" />
                            ))}
                        </div>
                        <div className="self-stretch justify-between items-start inline-flex">
                            {Array(5).fill(null).map((_, index) => (
                                <div key={index} className="w-1 h-1 bg-black" />
                            ))}
                        </div>
                        <div className="self-stretch justify-between items-start inline-flex">
                            {Array(5).fill(null).map((_, index) => (
                                <div key={index} className="w-1 h-1 bg-black" />
                            ))}
                        </div>
                        <div className="self-stretch justify-between items-start inline-flex">
                            {Array(5).fill(null).map((_, index) => (
                                <div key={index} className="w-1 h-1 bg-black" />
                            ))}
                        </div>
                    </div>
                    <div className="w-96 h-9 p-2 bg-teal-900 border border-gray-400 justify-start items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 bg-indigo-700 border border-indigo-700" />
                        <div><span className="text-gray-400 text-base font-medium">Currently working on </span><span className="text-white text-base font-semibold">Portfolio</span></div>
                    </div>
                </div>
            </div>
            <br />
            <div className="w-[76%] h-auto m-auto mt-10 p-8 border border-gray-400 flex justify-center items-center gap-2.5 relative">
                <div className="text-white text-2xl font-medium inline-flex gap-2 items-center"><BiSolidQuoteLeft />You should consider hiring Naïm before it’s too late<BiSolidQuoteRight /><span className="text-sm md:hidden self-end">Nobody</span></div>
                <div className="hidden md:flex w-[15%] h-auto p-4 border border-gray-400 justify-start items-start absolute right-0 md:right-6 bottom-0 translate-y-2/3">
                    <div className="text-white text-2xl font-thin">- Nobody</div>
                </div>
            </div>


            <div className="hidden md:flex flex-col">
                <ProjectsSum />
                <Skills />
            </div>
        </div>




    );
};

export default DesktopHome;
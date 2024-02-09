'use client'

import React from 'react';
import Image from 'next/image';

const MobileHome: React.FC = () => {
    return (
        <div className="w-auto pt-10 pl-4 flex flex-col">
            <span className="text-white text-3xl font-semibold font-['Fira Code']">Naïm Chelbat,</span>
            <span className="text-indigo-700 text-3xl font-semibold font-['Fira Code']">Front-end developer,</span>
            <span className="text-white text-3xl font-light font-['Fira Code']">Brussels</span>

            <div className="w-80 text-gray-400 text-base font-normal pt-10">
                Making websites from scratch,with a strong afinity for databases, and web3
            </div>

            <div className="w-80 h-80 relative">
                <div className="w-28 h-28 left-[6px] top-[125.60px] absolute">
                    <img className="w-14 h-20 left-[42.18px] top-[24.10px] absolute border border-indigo-700" src="https://via.placeholder.com/52x78" />
                    <img className="w-14 h-20 left-[1px] top-[65.27px] absolute origin-top-left -rotate-90 border border-indigo-700" src="https://via.placeholder.com/52x78" />
                </div>
                <Image src="/avatar.png" alt="Avatar" width={326} height={326} />
                <div className="w-14 h-14 left-[254.62px] top-[234.75px] absolute flex-col justify-between items-start inline-flex">
                    <div className="self-stretch justify-between items-start inline-flex">
                        {Array(5).fill(null).map((_, index) => (
                            <div key={index} className="w-1 h-1 bg-gray-400" />
                        ))}
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        {Array(5).fill(null).map((_, index) => (
                            <div key={index} className="w-1 h-1 bg-gray-400" />
                        ))}
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        {Array(5).fill(null).map((_, index) => (
                            <div key={index} className="w-1 h-1 bg-gray-400" />
                        ))}
                    </div>
                    <div className="self-stretch justify-between items-start inline-flex">
                        {Array(5).fill(null).map((_, index) => (
                            <div key={index} className="w-1 h-1 bg-gray-400" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-96 h-9 p-2 bg-teal-900 border border-gray-400 justify-start items-center gap-2.5 inline-flex">
                        <div className="w-4 h-4 bg-indigo-700 border border-indigo-700" />
                        <div><span className="text-gray-400 text-base font-medium">Currently working on </span><span className="text-white text-base font-semibold font-['Fira Code']">Portfolio</span></div>
                    </div>
        </div>



    );
};

export default MobileHome;
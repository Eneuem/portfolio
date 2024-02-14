'use client'

import React from 'react';

interface HobbiesCardProps {
    hobbies: string[];
}

const HobbiesSection: React.FC<HobbiesCardProps> = ({ hobbies }) => {
    return (
        <div className="w-auto h-auto py-2 flex justify-start items-start gap-4 flex-wrap">
                {hobbies.map((hobbie, index) => (
                    <div key={index} className="flex text-gray-400 text-base font-normal border border-gray-400 p-2">{hobbie}</div>
                ))}
        </div>
    );
};

export default HobbiesSection;
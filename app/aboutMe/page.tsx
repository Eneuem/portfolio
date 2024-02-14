'use client';

import React from 'react';
import Link from 'next/link';
import SkillSection from './skillsCard';
import skillsData from './skillsData';
import HobbiesSection from './HobbiesCard';
import HobbiesData from './HobbiesData';

// Ajout des props pour gérer l'affichage conditionnel
const About: React.FC<{ showViewAllButton?: boolean, includeAboutMe?: boolean }> = ({ showViewAllButton = false, includeAboutMe = true }) => {
  return (
    <div className="flex flex-col m-auto mt-20 justify-around w-[76%] py-8">
      {includeAboutMe && (
        <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="justify-start items-start flex pb-6 gap-5">
            <div className="text-indigo-700 text-3xl font-medium">#</div>
            <div className="text-white text-3xl font-medium">about-me</div>
            <div className="hidden md:flex self-center" style={{ width: 200, height: 1, background: '#5158BB' }}></div>
          <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>
          </div>
          <div className=" text-gray-400 text-base font-normal leading-relaxed">
            Hello, i’m Naïm!<br /><br />I use to make website as a kid. I discovered HTML CSS and php shortly after to dev my owns Warhammer & LOTR fan-pages. <br /><br />Since then, I never stopped learning and making website from scratch or with Wordpress, Wix, and others tools.    In 2023 I started an intensive learning at Ecole 19 then at BeCode where I learned a lot about Frameworks, Databases & API.          </div>
        </div>
        <div className="flex w-auto h-auto">
          <img className="hidden md:flex" src="/codeur.png" />
        </div>
        </div>
        </>
        )}
     
      <div className="flex flex-col mt-10">
        <div className="justify-start items-start flex pb-6 gap-5">
          <div className="text-indigo-700 text-3xl font-medium">#</div>
          <div className="text-white text-3xl font-medium">skills</div>
          <div className="hidden md:flex self-center" style={{ width: 580, height: 1, background: '#5158BB' }}></div>
          <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>
        
        {showViewAllButton && (
          <div className="justify-self-end">
            <Link className="text-white text-base font-medium border border-white p-2 hover:bg-white hover:text-background transition-all" href="/aboutMe" passHref>
              View all
            </Link>
          </div>
        )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-4">
        <SkillSection title="Languages" skills={skillsData.languages} />
        <SkillSection title="Databases" skills={skillsData.databases} />
        <SkillSection title="Frameworks" skills={skillsData.frameworks} />
        <SkillSection title="Other" skills={skillsData.others} />
        <SkillSection title="Tools" skills={skillsData.tools} />
      </div>
      <div className="flex flex-col mt-10">
        <div className="justify-start items-start flex pb-6 gap-5">
          <div className="text-indigo-700 text-3xl font-medium">#</div>
          <div className="text-white text-3xl font-medium">facts</div>
          <div className="hidden md:flex self-center" style={{ width: 580, height: 1, background: '#5158BB' }}></div>
          <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>
        </div>
      </div>
      <div>
        <HobbiesSection hobbies={HobbiesData.hobbies} />
      </div>
    </div>
  );
};

export default About;

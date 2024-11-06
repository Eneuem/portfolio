'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SkillSection from './skillsCard';
import skillsData from './skillsData';
import HobbiesSection from './HobbiesCard';
import HobbiesData from './HobbiesData';

const About: React.FC = () => {
  return (
    <div className="flex flex-col m-auto mt-20 justify-around w-[76%] py-8">
      <>
        <div className="flex flex-col md:flex-row">
          <div className="md:flex md:flex-col md:flex-grow">
            <div className="flex justify-start items-start pb-6 gap-5">
              <div className="text-secondary text-3xl font-medium">#</div>
              <div className="text-primary text-3xl font-medium">about-me</div>
              <div className="hidden md:flex self-center w-96 h-1 bg-secondary"></div>
              <div className="md:hidden self-center w-10 h-1 bg-secondary"></div>
            </div>
            <div className="text-primary text-base font-normal leading-relaxed">
              Hello, i’m Naïm!
              <br /><br />
              I use to make website as a kid. I discovered HTML CSS and php shortly after to dev my own personnal pages & blogs. 
              <br /><br />
              Since then, I never stopped learning and making website from scratch or with Wordpress, Wix, and others tools. In 2023 I started an intensive learning at Ecole 19 then at BeCode where I learned a lot about Frameworks, Databases & API.
              <br /><br />
              I even spent a few months teaching web development to adults in a non-profit organization in Brussels.            
            </div>
          </div>
          <div className="hidden md:flex md:justify-end md:flex-shrink-0">
            <Image src="/codeur.png" alt="Hello World" width={300} height={300} className="object-contain" />
          </div>
        </div>

      </>
      <div className="flex flex-col mt-10">
        <div className="justify-start items-start flex pb-6 gap-5">
          <div className="text-secondary text-3xl font-medium">#</div>
          <div className="text-primary text-3xl font-medium">skills</div>
          <div className="hidden md:flex self-center w-96 h-1 bg-secondary"></div>
          <div className="md:hidden self-center w-10 h-1 bg-secondary" ></div>

        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-4">
        <SkillSection title="Languages" skills={skillsData.languages} />
        <SkillSection title="Databases" skills={skillsData.databases} />
        <SkillSection title="Frameworks" skills={skillsData.frameworks} />
        <SkillSection title="Tools" skills={skillsData.tools} />
        <SkillSection title="Other" skills={skillsData.others} />
      </div>
      <div className="flex flex-col mt-10">
        <div className="justify-start items-start flex pb-6 gap-5">
          <div className="text-secondary text-3xl font-medium">#</div>
          <div className="text-primary text-3xl font-medium">facts</div>
          <div className="hidden md:flex self-center w-96 h-1 bg-secondary"></div>
          <div className="md:hidden self-center w-10 h-1 bg-secondary"></div>
        </div>
      </div>
      <div>
        <HobbiesSection hobbies={HobbiesData.hobbies} />
      </div>
    </div>
  );
};

export default About;

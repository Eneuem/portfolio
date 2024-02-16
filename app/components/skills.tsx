'use strict'

import React from 'react'
import Link from 'next/link'
import skillsData from '../aboutMe/skillsData'
import SkillSection from '../aboutMe/skillsCard'



const Skills: React.FC = () => {
    return (
<div className="flex flex-col m-auto mt-20 justify-around w-[76%] py-8 ">
  <div className="flex flex-col mt-10">
    <div className="justify-start items-start flex pb-6 gap-5">
      <div className="text-indigo-700 text-3xl font-medium">#</div>
      <div className="text-white text-3xl font-medium">skills</div>
      <div className="hidden md:flex self-center" style={{ width: 580, height: 1, background: '#5158BB' }}></div>
      <div className="md:hidden self-center" style={{ width: 25, height: 1, background: '#5158BB' }}></div>

      <div className="justify-self-end inline-flex">
        <Link className="text-white text-base font-medium border border-white p-2 hover:bg-white hover:text-background transition-all" href="/aboutMe" passHref>
          View all
        </Link>
      </div>
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-start gap-4">
    <SkillSection title="Languages" skills={skillsData.languages} />
    <SkillSection title="Databases" skills={skillsData.databases} />
    <SkillSection title="Frameworks" skills={skillsData.frameworks} />
    <SkillSection title="Other" skills={skillsData.others} />
    <SkillSection title="Tools" skills={skillsData.tools} />
  </div>
</div>
    );
};

export default Skills;
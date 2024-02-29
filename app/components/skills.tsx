'use strict'

import React from 'react'
import Link from 'next/link'
import skillsData from '../aboutMe/skillsData'
import SkillSection from '../aboutMe/skillsCard'



const Skills: React.FC = () => {
    return (
<div className="flex flex-col m-auto mt-20 justify-around py-8 w-[76%]">
  <div className="flex flex-col mt-10">
    <div className="justify-start items-start flex pb-6 gap-5">
      <div className="text-secondary text-3xl font-medium">#</div>
      <div className="text-primary text-3xl font-medium">skills</div>
      <div className="hidden md:flex self-center w-96 h-1 bg-secondary"></div>
      <div className="md:hidden self-center w-10 h-1 bg-secondary"></div>

      <div className="justify-self-end inline-flex">
        <Link className="text-white text-base font-medium border border-white p-2 hover:bg-white hover:text-background transition-all" href="/aboutMe" passHref>
          View all
        </Link>
      </div>
    </div>
  </div>
  <div className="flex flex-col md:w-auto md:flex-row justify-start gap-4 inline-flex">
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
'use client';

import React from 'react';
import Link from 'next/link';

// Ajout des props pour gérer l'affichage conditionnel
const About: React.FC<{ showViewAllButton?: boolean, includeAboutMe?: boolean }> = ({ showViewAllButton = false, includeAboutMe = true }) => {
  return (
    <div className="flex flex-col m-auto mt-20 justify-around w-[76%] py-8">
      {includeAboutMe && (
        <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="justify-start items-start flex pb-6">
            <div className="text-indigo-700 text-3xl font-medium">#</div>
            <div className="text-white text-3xl font-medium">about-me</div>
          </div>
          <div className=" text-gray-400 text-base font-normal leading-relaxed">
            Hello, i’m Naïm!<br /><br />I use to make website as a kid. I discovered HTML CSS and php shortly after to dev my owns Warhammer & LOTR fan-pages. <br /><br />Since then, I never stopped learning and making website from scratch or with Wordpress, Wix, and others tools.    In 2023 I started an intensive learning at Ecole 19 then at BeCode where I learned a lot about Frameworks, Databases & API.          </div>
        </div>
        <div className="flex w-auto h-auto">
          <img className="" src="/codeur.png" />
        </div>
        </div>
        </>
        )}
     
      <div className="flex flex-col mt-10">
        <div className="justify-start items-start flex pb-4 gap-5">
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
      <div className="flex justify-end gap-4">
        <div className="w-36 h-auto py-2 border border-gray-400 flex-col justify-start items-start gap-2">
          <div className="self-stretch px-2 justify-start items-start border-b border-gray-400">
            <div className="text-white text-base font-semibold">Languages</div>
          </div>
          <div className="p-2 flex-col justify-start items-start gap-2 flex">
            <div className="text-gray-400 text-base font-normal">HTML/CSS</div>
            <div className="text-gray-400 text-base font-normal">JS/TS</div>
            <div className="text-gray-400 text-base font-normal">PHP</div>
            <div className="text-gray-400 text-base font-normal">C </div>
          </div>
        </div>
        <div className="w-44 h-auto py-2 border border-gray-400 flex-col justify-start items-start gap-2">
          <div className="self-stretch px-2 justify-start items-start border-b border-gray-400">
            <div className="text-white text-base font-semibold">Databases</div>
          </div>
          <div className="p-2 flex-col justify-start items-start gap-2 flex">
            <div className="text-gray-400 text-base font-normal">Mysql</div>
            <div className="text-gray-400 text-base font-normal">Mongodb</div>
            <div className="text-gray-400 text-base font-normal">SQLite</div>
          </div>
        </div>
        <div className="w-44 h-auto py-2 border border-gray-400 flex-col justify-start items-start gap-2">
          <div className="self-stretch px-2 justify-start items-start border-b border-gray-400">
            <div className="text-white text-base font-semibold">Frameworks</div>
          </div>
          <div className="p-2 flex-col justify-start items-start gap-2 flex">
            <div className="text-gray-400 text-base font-normal">React</div>
            <div className="text-gray-400 text-base font-normal">Laravel</div>
            <div className="text-gray-400 text-base font-normal">Vite</div>
            <div className="text-gray-400 text-base font-normal">Tailwindcss</div>
            <div className="text-gray-400 text-base font-normal">Bootstrap</div>
          </div>
        </div>
        <div className="w-44 h-auto py-2 border border-gray-400 flex-col justify-start items-start gap-2">
          <div className="self-stretch px-2 justify-start items-start border-b border-gray-400">
            <div className="text-white text-base font-semibold">Other</div>
          </div>
          <div className="p-2 flex-col justify-start items-start gap-2 flex">
            <div className="text-gray-400 text-base font-normal">API REST</div>
            <div className="text-gray-400 text-base font-normal">Solana-Cli</div>
            <div className="text-gray-400 text-base font-normal">Agile - Scrum</div>
            <div className="text-gray-400 text-base font-normal">Blockchain</div>
            <div className="text-gray-400 text-base font-normal">Wordpress</div>
          </div>
        </div>
        <div className="w-44 h-auto py-2 border border-gray-400 flex-col justify-start items-start gap-2">
          <div className="self-stretch px-2 justify-start items-start border-b border-gray-400">
            <div className="text-white text-base font-semibold">Tools</div>
          </div>
          <div className="p-2 flex-col justify-start items-start gap-2 flex">
            <div className="text-gray-400 text-base font-normal">VSCode</div>
            <div className="text-gray-400 text-base font-normal">vim</div>
            <div className="text-gray-400 text-base font-normal">Linux</div>
            <div className="text-gray-400 text-base font-normal">Figma</div>
            <div className="text-gray-400 text-base font-normal">Adobe</div>
            <div className="text-gray-400 text-base font-normal">Gimp</div>
            <div className="text-gray-400 text-base font-normal">Git</div>
            <div className="text-gray-400 text-base font-normal">Filezilla/FTP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

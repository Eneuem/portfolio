'use client';

import React from 'react';
import Image from 'next/image';
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col w-[76%] h-auto m-auto pt-8 md:py-8 justify-around items-center gap-8">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-center gap-4">
          <div className='flex justify-between items-end gap-6'>
            <Image className="hidden md:flex" src="/eneuemlogowhite.png" alt="Logo" width={96} height={24} />
            <div className="text-gray-400 text-base font-normal">naim.chelbat@gmail.com</div>
          </div>
          <div>
            <div className="text-white text-base font-normal">Front-end developer - Learning Fullstack</div>
          </div>
        </div>
        <div className="flex items-center gap-8 text-white text-xl">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/na%C3%AFm-chelbat-83723b56/">
            <SiLinkedin className="hover:scale-125" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Eneuem">
          <SiGithub className="hover:scale-125" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/file/3I2CyhhwdhvfqYqDpcFofM/ARTISTORY?type=design&node-id=0%3A1&mode=design&t=FA1s6nW1Jjvia5Rp-1">
          <SiFigma className="hover:scale-125" />
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-gray-400 text-base font-normal gap-2">© {currentYear}. Made with <TbBrandNextjs /></div>
    </footer>
  );
};

export default Footer;

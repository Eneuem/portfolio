'use client';

import React from 'react';
import Image from 'next/image';
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col w-[76%] h-auto m-auto pt-8 md:py-8 justify-around items-center gap-8">
      <div className="flex-col md:flex-row justify-between items-center w-full">
        <div className="flex flex-col items-center gap-4">
          <div className='flex justify-between items-end gap-6'>
            <Image className="hidden md:flex" src="/eneuemlogowhite.png" alt="Logo" width={96} height={24} />
            <div className="text-primary text-base font-normal">naim.chelbat@gmail.com</div>
          </div>
          <div>
            <div className="text-primary text-base font-normal">Front-end developer - Learning Fullstack</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 text-primary text-xl pt-4">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/na%C3%AFm-chelbat-83723b56/">
            <SiLinkedin className="hover:scale-125 text-primary" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Eneuem">
          <SiGithub className="hover:scale-125 text-primary" />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/design/SCgkcaoQgTk8mThRdlbR47/BEESBOOST?node-id=0-1&t=ZbfhZHpiQrIPHphe-1">
          <SiFigma className="hover:scale-125 text-primary" />
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center text-primary text-base font-normal gap-2 mb-4"><AiOutlineCopyright className="text-2xl"/> {currentYear} | Made with <TbBrandNextjs className="text-2xl"/></div>
    </footer>
  );
};

export default Footer;

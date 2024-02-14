'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";

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
          <Link rel="noopener noreferrer" href="https://www.linkedin.com/in/na%C3%AFm-chelbat-83723b56/">
            <SiLinkedin className="hover:scale-125" />
          </Link>
          <SiGithub className="hover:scale-125" />
          <SiFigma className="hover:scale-125" />
        </div>
      </div>
      <div className="w-full text-center text-gray-400 text-base font-normal">© {currentYear}. Made by Eneuem</div>
    </footer>
  );
};

export default Footer;

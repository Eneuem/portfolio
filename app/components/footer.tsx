'use client';

import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col w-[76%] h-auto m-auto pt-8 md:py-8 justify-around items-center gap-8">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col items-center gap-4">
          <div className='flex items-end'>
          <img className="hidden md:flex w-24 h-6" src="/eneuemlogowhite.png" alt="Logo" />
          <div className="text-gray-400 text-base font-normal">naim.chelbat@gmail.com</div>
          </div>
          <div>
            <div className="text-white text-base font-normal">Front-end developer - Learning Fullstack</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <LinkedInIcon className="text-white" />
        </div>
      </div>
      <div className="w-full text-center text-gray-400 text-base font-normal">© {currentYear}. Made by Eneuem</div>
    </footer>
  );
};

export default Footer;

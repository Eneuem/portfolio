'use client'

import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
    return (

<div className="flex flex-col w-[76%] h-auto m-auto py-8 justify-around items-center gap-8">
  <div className="flex justify-start items-center gap-12">
    <div className="w-auto justify-between items-start flex">
      <div className="justify-start items-start gap-4">
        <div className="justify-start items-center gap-6 inline-flex">
          <img className="w-24 h-6" src="/eneuemlogowhite.png" />
          <div className="text-gray-400 text-base font-normal">naim.chelbat@gmail.com</div>
        </div>
        <div className="text-white text-base font-normal">Front-end developer - Learning Fullstack</div>
      </div>
    </div>
  </div>
  <div className="w-80 text-gray-400 text-base font-normal">© Copyright 2022. Made by Eneuem</div>

</div>
);
};

export default Footer;

'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="md:w-[76%] m-auto p-4 flex justify-between items-center">
      <Image src="/eneuemlogowhite.png" alt="Logo" width={96} height={24} />
      {menuOpen && (
        <aside className="fixed inset-0 bg-gray-800 bg-opacity-95 z-50 flex justify-end">
          <div className="w-full h-full flex flex-col p-4 gap-y-8 justify-centertext-white">
            <Link href="/" passHref className="text-secondary text-xl leading-8 hover:text-white transition-all"><span className="text-primary">#</span> home
            </Link>
            <Link href="/projects" passHref className="text-secondary text-xl leading-8  hover:text-white transition-all"><span className="text-primary">#</span> works
            </Link>
            <Link href="/aboutMe" passHref className="text-secondary text-xl leading-8 hover:text-white transition-all"><span className="text-primary">#</span> about me
            </Link>
            <Link href="/contact" passHref className="text-secondary text-xl leading-8 hover:text-white transition-all"><span className="text-primary">#</span> contact
            </Link>
          </div>
        </aside>
      )}
      <div className='md:hidden'>
      <IconButton className="z-50 text-secondary" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      </div>
      <div className='hidden md:flex gap-6'>
      <Link href="/" passHref className="text-secondary text-xl leading-8 hover:text-white transition-all"><span className="text-primary">#</span>home
            </Link>
            <Link href="/projects" passHref className="text-secondary text-xl leading-8 hover:text-white transition-all "><span className="text-primary">#</span>works
            </Link>
            <Link href="/aboutMe" passHref className="text-secondary text-xl leading-8 hover:text-white transition-all"><span className="text-primary">#</span>about me
            </Link>
            <Link href="/contact" passHref className="text-secondary text-xl leading-8 hover:text-white transition-all"><span className="text-primary">#</span>contact
            </Link>
      </div>
    </header>
  );
};

export default Header;



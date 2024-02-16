'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { usePathname, useRouter } from 'next/navigation'; 

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname(); 
  const router = useRouter();

  const isActive = (href: string) => pathname === href ? 'text-white' : 'text-secondary hover:text-white';

  const handleNavigate = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  }

  return (
    <header className="md:w-[76%] m-auto p-4 flex justify-between items-center">
      <Image src="/eneuemlogowhite.png" alt="Logo" width={96} height={24} />
      {menuOpen && (
        <aside className="fixed inset-0 bg-gray-800 bg-opacity-95 z-50 flex justify-end">
          <div className="w-full h-full flex flex-col p-4 gap-y-8 justify-center text-white">
            <Link href="/" className={`${isActive('/')} text-xl leading-8`}><span className="text-primary" >#</span><span onClick={() => handleNavigate('/')}>home</span></Link>
            <Link href="/projects" className={`${isActive('/projects')} text-xl leading-8`}><span className="text-primary" >#</span><span onClick={() => handleNavigate('/projects')}>works</span></Link>
            <Link href="/aboutMe" className={`${isActive('/aboutMe')} text-xl leading-8`}><span className="text-primary" >#</span><span onClick={() => handleNavigate('/aboutMe')}>about me</span></Link>
            <Link href="/contact" className={`${isActive('/contact')} text-xl leading-8`}><span className="text-primary" >#</span><span onClick={() => handleNavigate('/contact')}>contact</span></Link>
          </div>
        </aside>
      )}
      <div className="md:hidden">
      <IconButton className="z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      </div>
      <div className='hidden md:flex gap-6'>
        <Link href="/" className={`${isActive('/')} text-xl leading-8`}><span className="text-primary">#</span>home</Link>
        <Link href="/projects" className={`${isActive('/projects')} text-xl leading-8`}><span className="text-primary">#</span>works</Link>
        <Link href="/aboutMe" className={`${isActive('/aboutMe')} text-xl leading-8`}><span className="text-primary">#</span>about me</Link>
        <Link href="/contact" className={`${isActive('/contact')} text-xl leading-8`}><span className="text-primary">#</span>contact</Link>
      </div>
    </header>
  );
};

export default Header;




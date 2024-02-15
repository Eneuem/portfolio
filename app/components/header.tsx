'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { usePathname } from 'next/navigation'; // Importez usePathname

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname(); // Utilisez usePathname pour obtenir le chemin actuel

  // Cette fonction détermine si le lien est actif en vérifiant si le chemin correspond
  const isActive = (href: string) => pathname === href ? 'text-white' : 'text-secondary hover:text-white';

  return (
    <header className="md:w-[76%] m-auto p-4 flex justify-between items-center">
      <Image src="/eneuemlogowhite.png" alt="Logo" width={96} height={24} />
      {menuOpen && (
        <aside className="fixed inset-0 bg-gray-800 bg-opacity-95 z-50 flex justify-end">
          <div className="w-full h-full flex flex-col p-4 gap-y-8 justify-center text-white">
            <Link href="/"><a className={`${isActive('/')} text-xl leading-8`}><span className="text-primary">#</span> home</a></Link>
            <Link href="/projects"><a className={`${isActive('/projects')} text-xl leading-8`}><span className="text-primary">#</span> works</a></Link>
            <Link href="/aboutMe"><a className={`${isActive('/aboutMe')} text-xl leading-8`}><span className="text-primary">#</span> about me</a></Link>
            <Link href="/contact"><a className={`${isActive('/contact')} text-xl leading-8`}><span className="text-primary">#</span> contact</a></Link>
          </div>
        </aside>
      )}
      <IconButton className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <div className='hidden md:flex gap-6'>
        <Link href="/"><a className={`${isActive('/')} text-xl leading-8`}><span className="text-primary">#</span>home</a></Link>
        <Link href="/projects"><a className={`${isActive('/projects')} text-xl leading-8`}><span className="text-primary">#</span>works</a></Link>
        <Link href="/aboutMe"><a className={`${isActive('/aboutMe')} text-xl leading-8`}><span className="text-primary">#</span>about me</a></Link>
        <Link href="/contact"><a className={`${isActive('/contact')} text-xl leading-8`}><span className="text-primary">#</span>contact</a></Link>
      </div>
    </header>
  );
};

export default Header;




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
    <header className="bg-background p-4 flex justify-between items-center">
      {/* Utilisation de Image de Next.js pour l'image optimisée */}
      <Image src="/eneuemlogowhite.png" alt="Logo" width={96} height={24} />
      {menuOpen && (
        <aside className="fixed inset-0 bg-gray-800 bg-opacity-95 z-50 flex justify-end">
          <div className="w-full h-full flex flex-col pl-4 gap-y-8 justify-center text-white">
            {/* Utilisation de Link de Next.js pour la navigation */}
            <Link href="/" passHref className="text-secondary text-xl leading-8" onClick={() => window.location.reload()}><span className="text-primary">#</span> home
            </Link>
            <Link href="/works" passHref className="text-secondary text-xl leading-8"><span className="text-primary">#</span> works
            </Link>
            <Link href="/about-me" passHref className="text-secondary text-xl leading-8"><span className="text-primary">#</span> about me
            </Link>
            <Link href="/contact" passHref className="text-secondary text-xl leading-8"><span className="text-primary">#</span> contact
            </Link>
          </div>
        </aside>
      )}
      <IconButton className="z-50 text-secondary" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </header>
  );
};

export default Header;



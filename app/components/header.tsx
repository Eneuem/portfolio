'use client'

import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="bg-background p-4 flex justify-between items-center">
      <img src="./eneuemlogowhite.png" alt="Logo" className="w-24 h-6" />
      {menuOpen && (
        <aside className="fixed inset-0 bg-gray-800 bg-opacity-90 z-50 flex justify-end">
          <div className="w-full h-full flex flex-col pl-4 pt-12 gap-y-8 justify-start items-start text-white">
            <p className="text-secondary text-xl leading-8"><span className="text-primary">#</span> home</p>
            <p className="text-secondary text-xl leading-8"><span className="text-primary">#</span> works</p>
            <p className="text-secondary text-xl leading-8"><span className="text-primary">#</span> about me</p>
            <p className="text-secondary text-xl leading-8"><span className="text-primary">#</span> contact</p>
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

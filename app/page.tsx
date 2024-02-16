'use client'

import React, { useState, useEffect } from 'react';
import MobileHome from './components/MobileHome';
import DesktopHome from './components/DesktopHome';

const Home: React.FC = () => {

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
    
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  return (
    <>
      {/* {isMobile ? <MobileHome /> : <DesktopHome />} */}
      <DesktopHome />
    </>
  );
};

export default Home;


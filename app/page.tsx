'use client'

import React, { useState, useEffect } from 'react';
import Header from './components/header';
import MobileHome from './components/MobileHome';
import DesktopHome from './components/DesktopHome';

const Home: React.FC = () => {
  // Définir un état pour suivre si l'appareil est mobile
  const [isMobile, setIsMobile] = useState(false);

  // Utiliser useEffect pour ajouter un écouteur d'événement de redimensionnement
  useEffect(() => {
    // Fonction pour vérifier la largeur de l'écran et mettre à jour `isMobile`
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Vérifier immédiatement lors du montage du composant
    handleResize();

    // Ajouter l'écouteur d'événement de redimensionnement
    window.addEventListener('resize', handleResize);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'au montage et au démontage

  return (
    <>
      <Header />
      {isMobile ? <MobileHome /> : <DesktopHome />}
    </>
  );
};

export default Home;


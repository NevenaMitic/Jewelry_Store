"use client";
import { useState, useEffect, useCallback } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToUp = () => {
  const [visible, setVisible] = useState(false); // Stanje za vidljivost dugmeta

  // Funkcija za pomeranje na vrh stranice
  const scrollToTop = useCallback(() => {
    scroll.scrollToTop(); // Koristi react-scroll za pomeranje
  }, []);

 // Funkcija za upravljanje scroll događajem
  const handleScroll = useCallback(() => {
    if (window.scrollY > 200) { 
      setVisible(true); // Prikazuje dugme ako je skrolovanje veće od 200px
    } else {
      setVisible(false);
    }
  }, []);

  // Efekat za dodavanje i uklanjanje scroll događaja
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
   
      <button
        onClick={scrollToTop} // Poziva funkciju za pomeranje na vrh stranice kada se klikne
        className={`fixed bottom-4 right-4 w-12 h-12 bg-black text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
        aria-label="Scroll to top"
      >
        ↑  {/* Simbol za pomeranje na vrh */}
      </button>
  );
};

export default ScrollToUp;

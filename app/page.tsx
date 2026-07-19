// src/App.tsx
"use client";

import React, { useEffect } from 'react';
import { HeroSection as Hero } from './Component/Hero';
import { About } from './Component/About';
import { Services } from './Component/Service';
import { Experience } from './Component/Experience';
import { Book } from './Component/Book';
import { Footer } from './Component/Footer';


export default function Page() {
  useEffect(() => {
    // Smooth scroll for anchor links (global handler)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor) {
        e.preventDefault();
        const destination = document.querySelector(anchor.getAttribute('href') || '');
        if (destination) {
          destination.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Book/>
      <Footer />
    </>
  );
};



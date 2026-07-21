// src/components/AboutSection.tsx
"use client";

import React from 'react';
import { BackgroundSection } from '../Component/BackgroundSection';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';

export const About: React.FC = () => {
  const subtitleRef = useIntersectionReveal();
  const titleRef = useIntersectionReveal();
  const taglineRef = useIntersectionReveal();
  const ctaRef = useIntersectionReveal();

  return (
    <BackgroundSection 
      id="about" 
      bgImage={{
        src: '/jamaa.mp4',
        alt: 'Jamaica',
        parallaxSpeed: 0.5,
        parallaxDirection: 1,
      }}
    >
      <div ref={subtitleRef} className="reveal-scale">
        <p className="section-subtitle">Discover Jamaica</p>
      </div>
      <div ref={titleRef} className="reveal">
        <h2 className="section-title">
          <span className="red-accent">The Heart of the</span> <span className="gold">Caribbean</span>
        </h2>
      </div>
      <div ref={taglineRef} className="reveal" style={{ transitionDelay: '0.2s' }}>
        <p className="hero-tagline white-paragraph" style={{ maxWidth: '700px' }}>
From the rhythmic pulse of Kingston&apos;s streets to the tranquil waters of
          Negril's Seven Mile Beach, Jamaica is a symphony of culture, adventure, and
          natural beauty. Let us be your guide to every hidden gem.
        </p>
      </div>
      <div ref={ctaRef} className="reveal" style={{ transitionDelay: '0.4s', marginTop: '35px' }}>
        <a href="#services" className="cta-btn-outline">
          Explore Services
        </a>
      </div>
    </BackgroundSection>
  );
};

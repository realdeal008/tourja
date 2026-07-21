// src/components/HeroSection.tsx
import React from 'react';
import { BackgroundSection } from './BackgroundSection';
import { ScrollIndicator } from '../Component/ScrollingIndicator';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';

export const HeroSection: React.FC = () => {
  const subtitleRef = useIntersectionReveal();
  const titleRef = useIntersectionReveal();
  const taglineRef = useIntersectionReveal();
  const ctaRef = useIntersectionReveal();

  const particles = [
    { top: '15%', left: '12%', delay: '0s' },
    { top: '55%', left: '85%', delay: '2s' },
    { top: '35%', left: '50%', delay: '4s' },
    { top: '75%', left: '28%', delay: '1s' },
    { top: '20%', left: '72%', delay: '3s' },
  ];

  return (
    <BackgroundSection
      id="hero"
      bgImage={{
        src: '/raft-water.jpg',
        alt: 'Jamaica Night Beach',
        parallaxSpeed: 0.3,
        parallaxDirection: -1,
      }}
      showParticles
      particles={particles}
    >
      <div ref={subtitleRef} className="reveal-scale">
        <p className="hero-subtitle">Welcome to Paradise</p>
      </div>
      <div ref={titleRef} className="reveal">
        <h1 className="hero-title">
          <span className="hero-title-yellow">J.R.G   TOURS</span> <br></br>
          <span className="hero-title-green">JA BY TREY</span>
        </h1>
      </div>
      <div ref={taglineRef} className="reveal" style={{ transitionDelay: '0.25s' }}>
        <p className="hero-tagline">
          Experience the island like never before. From vibrant nightlife to serene
          excursions, luxury transport to seamless arrivals — we craft unforgettable
          Jamaican moments.
        </p>
      </div>
      <div ref={ctaRef} className="reveal" style={{ transitionDelay: '0.45s' }}>
        <a href="#book" className="cta-btn hero-cta-btn">
          Book Your Experience
        </a>
      </div>

      <ScrollIndicator />
    </BackgroundSection>
  );
};

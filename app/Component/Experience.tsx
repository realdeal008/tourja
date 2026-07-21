// src/components/ExperienceSection.tsx
"use client";

import React from 'react';
import { BackgroundSection } from '../Component/BackgroundSection';
import { StatCard } from '../Component/StatCard';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';

export const Experience: React.FC = () => {
  const subtitleRef = useIntersectionReveal();
  const titleRef = useIntersectionReveal();

  const stats = [
    { value: '10+', label: 'Years Experience', delay: 0.1 },
    { value: '5000+', label: 'Happy Travelers', delay: 0.2 },
    { value: '24/7', label: 'Support Available', delay: 0.3 },
    { value: '100%', label: 'Satisfaction Rate', delay: 0.4 },
  ];

  return (
    <BackgroundSection
      id="experience"
      bgImage={{
        src: '/lifestyle.png',
        alt: 'Jamaica River Rafting Under Bridge',
        parallaxSpeed: 0.6,
        parallaxDirection: 1,
      }}
    >
      <div ref={subtitleRef} className="reveal-scale">
        <p className="section-subtitle">Why Choose Us</p>
      </div>
      <div ref={titleRef} className="reveal">
        <h2 className="section-title">
          <span className="white-accent">The</span> <span className="gold">J.R.G</span> <span className="green-accent">Difference</span>
        </h2>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            delay={stat.delay}
          />
        ))}
      </div>
    </BackgroundSection>
  );
};

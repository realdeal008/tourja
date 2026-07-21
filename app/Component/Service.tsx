// src/components/ServicesSection.tsx
"use client";

import React from 'react';
import { BackgroundSection } from '../Component/BackgroundSection';
import { GlassCard } from '../Component/GlassCard';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';

export const Services: React.FC = () => {
  const subtitleRef = useIntersectionReveal();
  const titleRef = useIntersectionReveal();

  const services = [
    {
      icon: '🌙',
      title: 'Island Nightlife',
      description:
        "Experience Jamaica's legendary nightlife — beach bonfires, cliffside bars in Negril, and the vibrant dancehall scene in Kingston. VIP access guaranteed.",
      delay: 0.1,
      animation: 'reveal-left' as const,
    },
    {
      icon: '🏝',
      title: 'Excursions',
      description:
        "Raft down the Martha Brae, climb Dunn's River Falls, explore the Blue Mountains, or snorkel in Montego Bay. Every adventure tailored to you.",
      delay: 0.2,
      animation: 'reveal' as const,
    },
    {
      icon: '✈',
      title: 'Arrival & Departure',
      description:
        'Seamless airport transfers from KIN, MBJ, or OCJ. Meet & greet, luggage assistance, and direct-to-resort comfort.',
      delay: 0.3,
      animation: 'reveal-right' as const,
    },
    {
      icon: '🚗',
      title: 'Luxury Transport',
      description:
        'Travel in style with premium SUVs, sedans, and coaches. Professional drivers, air-conditioned comfort, island-wide coverage.',
      delay: 0.4,
      animation: 'reveal-left' as const,
    },
    {
      icon: '🍽',
      title: 'Private Dining',
      description:
        'From jerk pits on the beach to fine dining with ocean views. Exclusive culinary experiences showcasing Jamaican flavors.',
      delay: 0.5,
      animation: 'reveal' as const,
    },
    {
      icon: '📸',
      title: 'Custom Tours',
      description:
        'Bob Marley heritage tours, coffee plantations, hidden waterfalls, or off-the-beaten-path adventures — your wish is our command.',
      delay: 0.6,
      animation: 'reveal-right' as const,
    },
  ];

  return (
    <BackgroundSection
      id="services"
      bgImage={{
        src: '/crafts.png',
        alt: 'Jamaica River Rafting',
        parallaxSpeed: 0.4,
        parallaxDirection: -1,
      }}
    >
      <div style={{ width: '100%', height: '100%' }}>

        <div ref={subtitleRef} className="reveal-scale">
          <p className="section-subtitle">What We Offer</p>
        </div>
        <div ref={titleRef} className="reveal">
          <h2 className="section-title">
            <span className="green-accent">Premium</span> <span className="gold">Services</span>
          </h2>
        </div>

        <div className="services-grid" style={{ marginTop: '50px' }}>
          {services.map((service, index) => (
            <GlassCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              animation={service.animation}
            />
          ))}
        </div>
      </div>
    </BackgroundSection>
  );
};

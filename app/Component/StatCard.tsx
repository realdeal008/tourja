// src/components/StatCard.tsx
"use client";

import React from 'react';
import { StatCardProps } from '../types';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';

export const StatCard: React.FC<StatCardProps> = ({ value, label, delay = 0 }) => {
  const ref = useIntersectionReveal();

  return (
    <div ref={ref} className="reveal-flip" style={{ transitionDelay: `${delay}s` }}>
      <div className="glass-card" style={{ textAlign: 'center', padding: '30px 20px' }}>
        <h3 style={{ fontSize: '2.5rem', color: 'var(--jamaica-gold)', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
          {value}
        </h3>
        <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{label}</p>
      </div>
    </div>
  );
};

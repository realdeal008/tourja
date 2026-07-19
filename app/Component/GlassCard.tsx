// src/components/GlassCard.tsx
import React from 'react';
import { GlassCardProps } from '../types';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';

export const GlassCard: React.FC<GlassCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  animation = 'reveal',
}) => {
  const ref = useIntersectionReveal();

  const animationClass =
    animation === 'reveal-left'
      ? 'reveal-left'
      : animation === 'reveal-right'
      ? 'reveal-right'
      : animation === 'reveal-scale'
      ? 'reveal-scale'
      : animation === 'reveal-flip'
      ? 'reveal-flip'
      : 'reveal';

  return (
    <div
      ref={ref}
      className={`glass-card ${animationClass}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

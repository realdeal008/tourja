// src/components/ScrollIndicator.tsx
import React from 'react';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';

export const ScrollIndicator: React.FC = () => {
  const ref = useIntersectionReveal();

  return (
    <div ref={ref} className="scroll-indicator reveal" style={{ transitionDelay: '0.7s' }}>
      <span />
      <p>Scroll</p>
    </div>
  );
};

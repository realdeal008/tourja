// src/hooks/useScrollMotion.ts
"use client";

import { useEffect, useRef, useState, useCallback } from 'react';
import { ScrollMotionState } from '../types';

export const useScrollMotion = (): ScrollMotionState => {
  const [state, setState] = useState<ScrollMotionState>({
    scrollY: 0,
    scrollVelocity: 0,
    scrollProgress: 0,
    isFastScroll: false,
  });

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const fastScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateMotion = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = docHeight > 0 ? scrollY / docHeight : 0;
    const scrollVelocity = Math.abs(scrollY - lastScrollY.current);
    lastScrollY.current = scrollY;

    const isFastScroll = scrollVelocity > 12;

    if (isFastScroll && fastScrollTimeout.current) {
      clearTimeout(fastScrollTimeout.current);
    }
    if (isFastScroll) {
      fastScrollTimeout.current = setTimeout(() => {
        setState(prev => ({ ...prev, isFastScroll: false }));
      }, 150);
    }

    setState({
      scrollY,
      scrollVelocity,
      scrollProgress,
      isFastScroll,
    });

    ticking.current = false;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(updateMotion);
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateMotion();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (fastScrollTimeout.current) clearTimeout(fastScrollTimeout.current);
    };
  }, [updateMotion]);

  return state;
};

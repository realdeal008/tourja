// src/types/index.ts
"use client";

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface BackgroundImageProps {
  src: string;
  alt: string;
  parallaxSpeed?: number;
  parallaxDirection?: number;
}

export interface GlassCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
  animation?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale' | 'reveal-flip';
}

export interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export interface FormField {
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

export interface ParticleConfig {
  top: string;
  left: string;
  delay: string;
}

export interface ScrollMotionState {
  scrollY: number;
  scrollVelocity: number;
  scrollProgress: number;
  isFastScroll: boolean;
}

export interface SectionRect {
  top: number;
  bottom: number;
  height: number;
  center: number;
}

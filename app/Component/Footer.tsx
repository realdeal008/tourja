// src/components/FooterSection.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';
import { useScrollMotion } from '../hooks/useScrollMotion';

export const Footer: React.FC = () => {
  const brandRef = useIntersectionReveal();
  const linksRef = useIntersectionReveal();
  const copyRef = useIntersectionReveal();

  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScrollMotion();

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#book', label: 'Book Now' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const bgImg = bgRef.current;
    const overlay = overlayRef.current;
    if (!section || !bgImg) return;

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Only animate if near viewport
    if (rect.top < viewportHeight + 300 && rect.bottom > -300) {
      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      const offset = (viewportCenter - sectionCenter) * 0.4;
      const contentOffset = (viewportCenter - sectionCenter) * 0.1;

      const speed = 0.25; // footer-specific parallax speed
      const direction = 1;

      const sectionProgress = Math.max(
        0,
        Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height))
      );
      const scale = 1 + Math.sin(sectionProgress * Math.PI) * 0.12;

      const translateY = offset * speed;
      const translateX = offset * speed * 0.08 * direction;

      bgImg.style.transform = `scale(${scale}) translate3d(${translateX}px, ${translateY}px, 0)`;

      // Footer has no separate content ref; still shift overlay gradient like sections
      if (overlay) {
        const gradientAngle = 180 + (offset / viewportHeight) * 20;
        overlay.style.background = `linear-gradient(${gradientAngle}deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.55) 100%)`;
      }

      // (Optional) minor content parallax if desired later.
      // const content = section.querySelector('.footer-content') as HTMLElement | null;
      // if (content) content.style.transform = `translate3d(0, ${contentOffset * -0.06}px, 0)`;
    }
  }, [scrollY]);

  return (
    <footer className="footer" id="footer" ref={sectionRef}>
      <Image
        ref={bgRef}
        src="/kusk.png"
        className="bg-image"
        alt="Jamaica"
        fill
        sizes="1000px"
        priority
      />
      <div className="overlay scroll-shift" ref={overlayRef} />
      <div className="mirror-glass" />
      <div className="mirror-frame" />

      <div className="footer-content">
        <div ref={brandRef} className="reveal">
          <div className="footer-brand">
            <span className="brand-initials">
              <span className="green-letter">J</span>
              <span className="dot-letter">.</span>
              <span className="gold-letter">R</span>
              <span className="dot-letter">.</span>
              <span className="red-letter">G</span>
            </span>
            {' '}
            <span className="gold">TOURS</span>
            {' '}
            <span className="red-accent">JA</span>
            {' '}
            <span className="white-text">BY TREY</span>
          </div>
        </div>
        <div ref={linksRef} className="reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="footer-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div ref={copyRef} className="reveal" style={{ transitionDelay: '0.3s' }}>
          <p className="footer-copy">
            © 2026 J.R.G Tours JA by Trey. All rights reserved. Jamaica, W.I.
          </p>
        </div>
      </div>

      <div className="flag-strip">
        <div className="green" />
        <div className="gold" />
        <div className="black" />
        <div className="gold2" />
        <div className="green2" />
      </div>
    </footer>
  );
};


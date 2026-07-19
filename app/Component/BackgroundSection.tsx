// src/components/BackgroundSection.tsx

"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { SectionProps, BackgroundImageProps } from '../types';
import { useScrollMotion } from '../hooks/useScrollMotion';

interface BackgroundSectionProps extends SectionProps {
  bgImage: BackgroundImageProps;
  showParticles?: boolean;
  particles?: { top: string; left: string; delay: string }[];
}

export const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  id,
  children,
  bgImage,
  showParticles = false,
  particles = [],
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);


  const contentRef = useRef<HTMLDivElement>(null);


  const overlayRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScrollMotion();


  useEffect(() => {
    const section = sectionRef.current;
    const bgImg = bgRef.current;
    const content = contentRef.current;
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

      const speed = bgImage.parallaxSpeed || 0.4;
      const direction = bgImage.parallaxDirection || 1;

      const sectionProgress = Math.max(
        0,
        Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height))
      );
      const scale = 1 + Math.sin(sectionProgress * Math.PI) * 0.12;

      const translateY = offset * speed;
      const translateX = offset * speed * 0.08 * direction;

      bgImg.style.transform = `scale(${scale}) translate3d(${translateX}px, ${translateY}px, 0)`;

      if (content) {
        content.style.transform = `translate3d(0, ${contentOffset * -0.06}px, 0)`;
      }

      if (overlay) {
        const gradientAngle = 180 + (offset / viewportHeight) * 20;
        overlay.style.background = `linear-gradient(${gradientAngle}deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.55) 100%)`;
      }
    }
  }, [scrollY, bgImage.parallaxSpeed, bgImage.parallaxDirection]);

  // Seamless loop for video backgrounds (reduce visible end/start frame)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const srcLower = bgImage.src.toLowerCase();
    const isVideo = srcLower.endsWith('.mp4') || srcLower.endsWith('.webm');
    if (!isVideo) return;

    let rafId = 0;

    const PRELOOP_OFFSET_SEC = 0.08; // seek slightly before the end for smoother transition

    const onTimeUpdate = () => {
      if (!video.duration || !isFinite(video.duration)) return;
      if (video.paused) return;

      const remaining = video.duration - video.currentTime;
      if (remaining <= PRELOOP_OFFSET_SEC) {
        // Hard loop: jump to the start of the segment (tiny pre-roll already handled by seek)
        const target = Math.max(0, Math.min(video.duration - 0.01, 0.02));
        if (Math.abs(video.currentTime - target) > 0.05) {
          try {
            video.currentTime = target;
          } catch {
            // ignore seek errors
          }
        }
      }
    };

    const start = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        video.addEventListener('timeupdate', onTimeUpdate);
      });
    };

    start();

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [bgImage.src]);

  return (
    <section className="page-section" id={id} ref={sectionRef}>
      {(() => {
        const srcLower = bgImage.src.toLowerCase();
        const isVideo = srcLower.endsWith('.mp4') || srcLower.endsWith('.webm');

        if (isVideo) {
          return (
            <video
              ref={videoRef}
              className="bg-imag ken-burns blur-scroll"
              style={{
                '--parallax-speed': bgImage.parallaxSpeed,
                '--parallax-direction': bgImage.parallaxDirection,
              } as React.CSSProperties}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={bgImage.src} type={srcLower.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
            </video>
          );
        }

        return (
          <Image
            ref={bgRef}
            src={bgImage.src}
            alt={bgImage.alt}
            className="bg-image ken-burns blur-scroll"
            style={{
              '--parallax-speed': bgImage.parallaxSpeed,
              '--parallax-direction': bgImage.parallaxDirection,
            } as React.CSSProperties}
            fill
            sizes="100vw"
            priority
          />
        );
      })()}
      <div className="overlay scroll-shift" ref={overlayRef} />
      <div className="mirror-glass" />
      <div className="reflection-sweep" />
      <div className="mirror-frame" />

      {showParticles &&
        particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{ top: p.top, left: p.left, animationDelay: p.delay }}
          />
        ))}

      <div className="section-content" ref={contentRef}>
        {children}
      </div>

      <div className="flag-strip">
        <div className="green" />
        <div className="gold" />
        <div className="black" />
        <div className="gold2" />
        <div className="green2" />
      </div>
    </section>
  );
};

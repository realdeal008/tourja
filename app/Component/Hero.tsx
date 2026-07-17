"use client";

import Image from "next/image";

const particles = [
  { top: "15%", left: "12%", delay: "0s" },
  { top: "55%", left: "85%", delay: "2s" },
  { top: "35%", left: "50%", delay: "4s" },
  { top: "75%", left: "28%", delay: "1s" },
  { top: "20%", left: "72%", delay: "3s" },
] as const;

export default function Hero() {
  return (
    <section className="page-section" id="hero">
      <Image
        src="/hero-night.jpeg"
        alt="Jamaica Night Beach"
        width={1200}
        height={675}
        priority
        sizes="100vw"
        className="bg-image"
        style={{ objectFit: "contain" }}
      />

      <div className="overlay" />
      <div className="mirror-glass" />
      <div className="reflection-sweep" />
      <div className="mirror-frame" />

      {particles.map(({ top, left, delay }, index) => (
        <div
          key={index}
          className="particle"
          style={{
            top,
            left,
            animationDelay: delay,
          }}
        />
      ))}

      <div className="section-content">
        <div className="reveal-scale">
          <p className="hero-subtitle">Welcome to Paradise</p>
        </div>

        <div className="reveal">
          <h1 className="hero-title">
            JRG TOUR
            <br />
            <span className="gold">JA BY TREY</span>
          </h1>
        </div>

        <div
          className="reveal"
          style={{
            transitionDelay: "0.25s",
          }}
        >
          <p className="hero-tagline">
            Experience the island like never before. From vibrant nightlife to
            serene excursions, luxury transport to seamless arrivals—we craft
            unforgettable Jamaican moments.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            transitionDelay: "0.45s",
          }}
        >
          <a href="#book" className="cta-btn">
            Book Your Experience
          </a>
        </div>
      </div>

      <div
        className="scroll-indicator reveal"
        style={{
          transitionDelay: "0.7s",
        }}
      >
        <span />
        <p>Scroll</p>
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
}
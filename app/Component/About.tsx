"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="page-section" id="about">
      <Image
        src="/img/jamaica-sign.jpg"
        alt="Jamaica Sign"
        fill
        priority
        sizes="100vw"
        className="bg-image"
      />

      <div className="overlay" />
      <div className="mirror-glass" />
      <div className="reflection-sweep" />
      <div className="mirror-frame" />

      <div className="section-content">
        <div className="reveal-scale">
          <p className="section-subtitle">Discover Jamaica</p>
        </div>

        <div className="reveal">
          <h2 className="section-title">
            The Heart of the <span className="gold">Caribbean</span>
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            transitionDelay: "0.2s",
          }}
        >
          <p
            className="hero-tagline"
            style={{
              maxWidth: "700px",
            }}
          >
            From the rhythmic pulse of Kingston&apos;s streets to the tranquil
            waters of Negril&apos;s Seven Mile Beach, Jamaica is a symphony of
            culture, adventure, and natural beauty. Let us be your guide to
            every hidden gem.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            transitionDelay: "0.4s",
            marginTop: "35px",
          }}
        >
          <a href="#services" className="cta-btn-outline">
            Explore Services
          </a>
        </div>
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
"use client";

import Image from "next/image";

interface Stat {
  value: string;
  label: string;
  delay: string;
}

const stats: readonly Stat[] = [
  {
    value: "10+",
    label: "Years Experience",
    delay: "0.1s",
  },
  {
    value: "5000+",
    label: "Happy Travelers",
    delay: "0.2s",
  },
  {
    value: "24/7",
    label: "Support Available",
    delay: "0.3s",
  },
  {
    value: "100%",
    label: "Satisfaction Rate",
    delay: "0.4s",
  },
] as const;

export default function Experience() {
  return (
    <section className="page-section" id="experience">
      <Image
        src="/img/raft-bridge.jpg"
        alt="Jamaica River Rafting Under Bridge"
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
          <p className="section-subtitle">Why Choose Us</p>
        </div>

        <div className="reveal">
          <h2 className="section-title">
            The JRG <span className="gold">Difference</span>
          </h2>
        </div>

        <div className="stats-grid">
          {stats.map(({ value, label, delay }) => (
            <div
              key={label}
              className="reveal-flip"
              style={{
                transitionDelay: delay,
              }}
            >
              <div className="glass-card">
                <h3>{value}</h3>
                <p>{label}</p>
              </div>
            </div>
          ))}
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
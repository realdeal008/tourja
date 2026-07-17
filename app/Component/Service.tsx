"use client";

import Image from "next/image";

interface Service {
  icon: string;
  title: string;
  description: string;
  revealClass: string;
  delay: string;
}

const services: readonly Service[] = [
  {
    icon: "🌙",
    title: "Island Nightlife",
    description:
      "Experience Jamaica's legendary nightlife — beach bonfires, cliffside bars in Negril, and the vibrant dancehall scene in Kingston. VIP access guaranteed.",
    revealClass: "reveal-left",
    delay: "0.1s",
  },
  {
    icon: "🏝️",
    title: "Excursions",
    description:
      "Raft down the Martha Brae, climb Dunn's River Falls, explore the Blue Mountains, or snorkel in Montego Bay. Every adventure tailored to you.",
    revealClass: "reveal",
    delay: "0.2s",
  },
  {
    icon: "✈️",
    title: "Arrival & Departure",
    description:
      "Seamless airport transfers from KIN, MBJ, or OCJ. Meet & greet, luggage assistance, and direct-to-resort comfort.",
    revealClass: "reveal-right",
    delay: "0.3s",
  },
  {
    icon: "🚗",
    title: "Luxury Transport",
    description:
      "Travel in style with premium SUVs, sedans, and coaches. Professional drivers, air-conditioned comfort, island-wide coverage.",
    revealClass: "reveal-left",
    delay: "0.4s",
  },
  {
    icon: "🍽️",
    title: "Private Dining",
    description:
      "From jerk pits on the beach to fine dining with ocean views. Exclusive culinary experiences showcasing Jamaican flavors.",
    revealClass: "reveal",
    delay: "0.5s",
  },
  {
    icon: "📸",
    title: "Custom Tours",
    description:
      "Bob Marley heritage tours, coffee plantations, hidden waterfalls, or off-the-beaten-path adventures — your wish is our command.",
    revealClass: "reveal-right",
    delay: "0.6s",
  },
] as const;

export default function Services() {
  return (
    <section className="page-section" id="services">
      <Image
        src="/img/raft-river.jpg"
        alt="Jamaica River Rafting"
        fill
        priority
        sizes="100vw"
        className="bg-image"
      />

      <div className="overlay" />
      <div className="mirror-glass" />
      <div className="reflection-sweep" />
      <div className="mirror-frame" />

      <div
        className="section-content"
        style={{
          width: "100%",
          maxWidth: "1300px",
        }}
      >
        <div className="reveal-scale">
          <p className="section-subtitle">What We Offer</p>
        </div>

        <div className="reveal">
          <h2 className="section-title">
            Premium <span className="gold">Services</span>
          </h2>
        </div>

        <div
          className="services-grid"
          style={{
            marginTop: "50px",
          }}
        >
          {services.map(
            ({ icon, title, description, revealClass, delay }) => (
              <div
                key={title}
                className={`glass-card ${revealClass}`}
                style={{
                  transitionDelay: delay,
                }}
              >
                <span className="icon">{icon}</span>

                <h3>{title}</h3>

                <p>{description}</p>
              </div>
            )
          )}
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
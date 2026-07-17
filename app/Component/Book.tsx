"use client";

import type { FormEvent } from "react";
import Image from "next/image";

interface ServiceOption {
  value: string;
  label: string;
}

const services: readonly ServiceOption[] = [
  { value: "", label: "Select a service..." },
  { value: "nightlife", label: "Island Nightlife" },
  { value: "excursion", label: "Excursion / Tour" },
  { value: "arrival", label: "Arrival Transfer" },
  { value: "departure", label: "Departure Transfer" },
  { value: "transport", label: "Luxury Transport" },
  { value: "custom", label: "Custom Package" },
] as const;

export default function Book() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(
      "Thank you! We will contact you shortly to confirm your booking."
    );
  };

  return (
    <section className="page-section" id="book">
      <Image
        src="/nightlife.jpg"
        alt="Jamaica Nightlife"
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

      <div
        className="section-content"
        style={{
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <div className="reveal-scale">
          <p className="section-subtitle">Start Your Journey</p>
        </div>

        <div className="reveal">
          <h2 className="section-title">
            Book <span className="gold">Now</span>
          </h2>
        </div>

        <div
          className="reveal"
          style={{
            transitionDelay: "0.2s",
            marginTop: "35px",
          }}
        >
          <form
            className="contact-form glass-card"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                autoComplete="tel"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Type</label>

              <select
                id="service"
                name="service"
                defaultValue=""
                required
              >
                {services.map(({ value, label }) => (
                  <option
                    key={value || "placeholder"}
                    value={value}
                    disabled={value === ""}
                  >
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dates">Travel Dates</label>

              <input
                id="dates"
                name="dates"
                type="text"
                placeholder="e.g., Dec 15 - Dec 22, 2026"
              />
            </div>

            <div className="form-group">
              <label htmlFor="requests">Special Requests</label>

              <textarea
                id="requests"
                name="requests"
                rows={5}
                placeholder="Tell us about your dream Jamaican experience..."
              />
            </div>

            <button
              type="submit"
              className="cta-btn"
              style={{
                width: "100%",
                marginTop: "8px",
              }}
            >
              Submit Booking Request
            </button>
          </form>
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
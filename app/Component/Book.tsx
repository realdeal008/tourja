// src/components/BookingSection.tsx
"use client";

import React, { useState, FormEvent } from 'react';
import { BackgroundSection } from '../Component/BackgroundSection';
import { useIntersectionReveal } from '../hooks/useIntersectionReveal';

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  travelDates: string;
  specialRequests: string;
}

export const Book: React.FC = () => {
  const subtitleRef = useIntersectionReveal();
  const titleRef = useIntersectionReveal();
  const formRef = useIntersectionReveal();

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    travelDates: '',
    specialRequests: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly to confirm your booking.');
  };

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'nightlife', label: 'Island Nightlife' },
    { value: 'excursion', label: 'Excursion / Tour' },
    { value: 'arrival', label: 'Arrival Transfer' },
    { value: 'departure', label: 'Departure Transfer' },
    { value: 'transport', label: 'Luxury Transport' },
    { value: 'custom', label: 'Custom Package' },
  ];

  return (
    <BackgroundSection
      id="book"
      bgImage={{
src: '/live.png',
        alt: 'Jamaica Nightlife',
        parallaxSpeed: 0.35,
        parallaxDirection: -1,
      }}
    >
      <div style={{ width: '100%', maxWidth: '700px' }}>
        <div ref={subtitleRef} className="reveal-scale">
          <p className="section-subtitle">Start Your Journey</p>
        </div>
        <div ref={titleRef} className="reveal">
          <h2 className="section-title">
            Book <span className="gold">Now</span>
          </h2>
        </div>

        <div ref={formRef} className="reveal" style={{ transitionDelay: '0.2s', marginTop: '35px' }}>
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceType">Service Type</label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="travelDates">Travel Dates</label>
              <input
                type="text"
                id="travelDates"
                name="travelDates"
                placeholder="e.g., Dec 15 - Dec 22, 2026"
                value={formData.travelDates}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                placeholder="Tell us about your dream Jamaican experience..."
                value={formData.specialRequests}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="cta-btn book-cta-btn" style={{ width: '100%', marginTop: '8px' }}>
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </BackgroundSection>
  );
};

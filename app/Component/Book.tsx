"use client";

import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
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

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

export const Book: React.FC = () => {
  const subtitleRef = useIntersectionReveal();
  const titleRef = useIntersectionReveal();
  const formRevealRef = useIntersectionReveal();

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    travelDates: '',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: 'success' | 'error') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Auto-dismiss toasts after 5 seconds
  useEffect(() => {
    if (toasts.length === 0) return;
    const timer = setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [toasts]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.serviceType) {
      addToast('Please fill in all required fields.', 'error');
      setIsSubmitting(false);
      return;
    }

    // Get EmailJS credentials from environment variables
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID;
    const customerTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID;

    // Check if EmailJS is configured
    if (!publicKey || publicKey === 'nwgw-dtyw-jwaf-aebz') {
      addToast(
        '⚠️ Email service not configured. See SETUP_EMAILJS.md to complete setup.',
        'error'
      );
      setIsSubmitting(false);
      return;
    }

    const serviceTypeLabel =
      serviceOptions.find((opt) => opt.value === formData.serviceType)?.label ||
      formData.serviceType;

    const templateParams = {
      customer_name: formData.fullName,
      customer_email: formData.email,
      customer_phone: formData.phone,
      service_type: serviceTypeLabel,
      travel_dates: formData.travelDates || 'Not specified',
      special_requests: formData.specialRequests || 'None',
    };

    try {
      // 1. Send admin notification to iCloud
      await emailjs.send(serviceId!, adminTemplateId!, templateParams, {
        publicKey: publicKey!,
      });

      // 2. Send customer confirmation email
      await emailjs.send(serviceId!, customerTemplateId!, templateParams, {
        publicKey: publicKey!,
      });

      // Success toast notification
      addToast('✅ Booking request sent! Check your email for confirmation.', 'success');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: '',
        travelDates: '',
        specialRequests: '',
      });
    } catch (err) {
      console.error('EmailJS Error:', err);
      addToast(
        '❌ Something went wrong. Please try again or contact us directly.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
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
      {/* Toast Notifications Container */}
      {toasts.length > 0 && (
        <div
          style={{
            position: 'fixed',
            top: '24px',
            right: '24px',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            maxWidth: '420px',
          }}
        >
          {toasts.map((toast) => (
            <div
              key={toast.id}
              onClick={() => removeToast(toast.id)}
              style={{
                padding: '16px 22px',
                borderRadius: '12px',
                background:
                  toast.type === 'success'
                    ? 'linear-gradient(135deg, #1f7a1f, #144b14)'
                    : 'linear-gradient(135deg, #d62828, #a61b1b)',
                color: '#ffffff',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.15)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                animation: 'toastSlideIn 0.4s ease',
              }}
            >
              <span style={{ fontSize: '20px' }}>
                {toast.type === 'success' ? '✅' : '⚠️'}
              </span>
              <span style={{ flex: 1 }}>{toast.message}</span>
              <span style={{ opacity: 0.6, fontSize: '12px', marginLeft: '8px' }}>✕</span>
            </div>
          ))}
        </div>
      )}

      <div style={{ width: '100%', maxWidth: '700px' }}>
        <div ref={subtitleRef} className="reveal-scale">
          <p className="section-subtitle">Start Your Journey</p>
        </div>
        <div ref={titleRef} className="reveal">
          <h2 className="section-title">
            Book <span className="gold">Now</span>
          </h2>
        </div>

        <div ref={formRevealRef} className="reveal" style={{ transitionDelay: '0.2s', marginTop: '35px' }}>
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
            <button
              type="submit"
              className="cta-btn book-cta-btn"
              style={{
                width: '100%',
                marginTop: '8px',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
              }}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
<span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <span className="toast-spinner" />
                  Sending...
                </span>
              ) : (
                'Submit Booking Request'
              )}
            </button>
          </form>
        </div>
      </div>
    </BackgroundSection>
  );
};

"use client";

import Image from "next/image";

interface FooterLink {
  href: string;
  label: string;
}

const footerLinks: readonly FooterLink[] = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#book", label: "Book Now" },
] as const;

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <Image
        src="/jamaica-sign.jpg"
        alt="Jamaica"
        width={1200}
        height={675}
        priority
        sizes="100vw"
        className="bg-image"
        style={{ objectFit: "contain" }}
      />

      <div className="overlay" />
      <div className="mirror-glass" />
      <div className="mirror-frame" />

      <div className="footer-content">
        <div className="reveal">
          <div className="footer-brand">
            JRG TOUR JA BY TREY
          </div>
        </div>

        <div
          className="reveal"
          style={{
            transitionDelay: "0.15s",
          }}
        >
          <nav
            className="footer-links"
            aria-label="Footer Navigation"
          >
            {footerLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className="reveal"
          style={{
            transitionDelay: "0.3s",
          }}
        >
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} JRG Tour JA by Trey.
            All rights reserved. Jamaica, W.I.
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
}
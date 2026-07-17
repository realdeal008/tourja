"use client";


import { useEffect } from "react";

const AnimationProvider = () => {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.12,
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-flip"
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });

    const anchors = document.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#"]'
    );

    const handleClick = (e: Event) => {
      e.preventDefault();

      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");

      if (!href) return;

      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    const timer = setTimeout(() => {
      document
        .querySelectorAll("#hero .reveal, #hero .reveal-scale")
        .forEach((element) => {
          element.classList.add("visible");
        });
    }, 200);

    return () => {
      revealObserver.disconnect();

      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });

      clearTimeout(timer);
    };
  }, []);

  return null;
};

export default AnimationProvider;
"use client";

import Hero from "./Component/Hero";
import About from "./Component/About";
import Services from "./Component/Service";
import Experience from "./Component/Experience";
import Book from "./Component/Book";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Book />
      <Footer />
    </main>
  );
}
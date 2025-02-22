"use client"; // Required for using hooks or React state in the App Router

import { FC } from "react";
import "@/styles/About.css"; // Import the CSS file

const About: FC = () => {
  return (
    <section className="about-section">
      <p className="about-text">
      Viet is a digital alchemist and seasoned tech entrepreneur, uniquely situated at the nexus of business, technology, and creativity. With a strong consultancy background and a flair for experimentation, he transforms abstract ideas into impactful digital realities. Each line of code, pixel, and frame stands as a testament to his passion for innovation and excellence.
      </p>
    </section>
  );
};

export default About;
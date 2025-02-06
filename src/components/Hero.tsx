"use client"; // Required for using hooks or React state in the App Router

import { FC } from "react";
import "@/styles/Hero.css"; // Keep a single CSS file for all hero styles

const Hero: FC = () => {
  return (
    <section id="hero" className="relative bg-[#054D95] h-screen hero">
      {/* Hero Text */}
      <h1 className="hero-text text-white text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
        INSPIRING <br /> THE NEXT{" "}
        <span className="kelsi-container">
          <span className="kelsi-text">G</span>
          <span className="kelsi">G</span>
          <img src="/svgs/genLine.svg" alt="Gen Line" className="line-svg gen-line" />
        </span>
        EN OF
        <br />
        <span className="kelsi-container">
          <span className="kelsi-text">T</span>
          <span className="kelsi">T</span>
          <img src="/svgs/techLine.svg" alt="Tech Line" className="line-svg tech-line" />
        </span>
        ECH LEADERS
      </h1>

      {/* Fixed SVGs */}
      <img
        src="/svgs/leftTopVector.svg"
        alt="Top Left Corner"
        className="svg-fixed top-0 left-0"
        style={{ padding: "20px" }} // Example padding
      />
      <img
        src="/svgs/leftBottomVector.svg"
        alt="Bottom Left Corner"
        className="svg-fixed bottom-0 left-0"
        style={{ padding: "20px" }}
      />
      <img
        src="/svgs/rightTopVector.svg"
        alt="Top Right Corner"
        className="svg-fixed top-0 right-0"
        style={{ padding: "20px" }}
      />
      <img
        src="/svgs/rightBottomVector.svg"
        alt="Bottom Right Corner"
        className="svg-fixed bottom-0 right-0"
        style={{ padding: "20px" }}
      />
      <img
        src="/svgs/middleVector.svg"
        alt="Middle Left"
        className="svg-fixed top-1/2 left-0"
        style={{ transform: "translateY(-50%)", padding: "20px" }}
      />
      <img
        src="/svgs/middleVector.svg"
        alt="Middle Right"
        className="svg-fixed top-1/2 right-0"
        style={{ transform: "translateY(-50%)", padding: "20px" }}
      />
    </section>
  );
};

export default Hero;
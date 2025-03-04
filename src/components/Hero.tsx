"use client"; // Required for using hooks or React state in the App Router

import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import "@/styles/Hero.css"; // Keep a single CSS file for all hero styles

const Hero: FC = () => {
  const curtainRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Dispatch custom event when Hero's animation is finished
        window.dispatchEvent(new Event("heroAnimationFinished"));
      },
    });

    tl.to(curtainRefs.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.15,
    })
    .to(".gen-line", {
      clipPath: "inset(0 0% 0 0)", // Reveal from left to right
      duration: 0.5,
      ease: "power2.out",
    })
    .to(".tech-line", {
      clipPath: "inset(0 0% 0 0)", // Reveal from left to right
      duration: 0.5,
      ease: "power2.out",}
      );
  }, []);

  return (
    <section id="hero" className="relative bg-[#054D95] h-screen hero overflow-hidden">
      {/* Curtains */}
      <div className="hero-curtains">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) curtainRefs.current[i] = el;
            }}
            className="hero-curtain"
          />
        ))}
      </div>

      {/* Hero Text */}
      <h1 className="hero-text text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.8] 2xl:leading-[0.9]">
        {/* Desktop layout */}
        <span className="hidden sm:block">
        INSPIRING <br /> THE NEXT{" "}
        <span className="kelsi-container md:text-[3.5rem] lg:text-[4rem] xl:text-[5.5rem] 2xl:text-[7rem]">
          <span className="kelsi-text">G</span>
          <span className="kelsi">G</span>
          <img 
            src="/svgs/genLine.svg" 
            alt="Gen Line" 
            className="line-svg gen-line bottom-[-0.1rem] md:w-[7rem] lg:w-[8rem] xl:w-[11rem] 2xl:w-[14rem]" 
          />
        </span>
        EN OF
        <br />
        <span className="kelsi-container md:text-[3.5rem] lg:text-[4rem] xl:text-[5.5rem] 2xl:text-[7rem]">
          <span className="kelsi-text">T</span>
          <span className="kelsi">T</span>
          <img 
            src="/svgs/techLine.svg" 
            alt="Tech Line" 
            className="line-svg tech-line bottom-[-0.1rem] md:w-[9rem] lg:w-[11rem] xl:w-[14rem] 2xl:w-[19rem]" 
          />
        </span>
        ECH LEADERS
        </span>
        {/* Mobile layout */}
        <span className="block sm:hidden">
        INSPIRING <br /> THE NEXT<br />
        <span className="kelsi-container text-[3.5rem]">
          <span className="kelsi-text">G</span>
          <span className="kelsi">G</span>
          <img 
            src="/svgs/genLine.svg" 
            alt="Gen Line" 
            className="line-svg gen-line bottom-[0.1rem] w-[7rem]" 
          />
        </span>
        EN OF
        <span className="kelsi-container text-[3.5rem] ml-[1.5rem]"> {/* Add margin ml to align with the desktop layout */}
          <span className="kelsi-text">T</span>
          <span className="kelsi">T</span>
          <img 
            src="/svgs/techLine.svg" 
            alt="Tech Line" 
            className="line-svg tech-line bottom-[0.1rem] w-[9rem]" 
          />
        </span>
        ECH <br /> LEADERS
        </span>
      </h1>

      {/* Fixed SVGs */}
      <img
        src="/svgs/leftTopVector.svg"
        alt="Top Left Corner"
        className="svg-fixed top-0 left-0 w-[55px] sm:w-[60px]"
        style={{ padding: "20px" }}
      />
      <img
        src="/svgs/leftBottomVector.svg"
        alt="Bottom Left Corner"
        className="svg-fixed bottom-0 left-0 w-[55px] sm:w-[60px]"
        style={{ padding: "20px" }}
      />
      <img
        src="/svgs/rightTopVector.svg"
        alt="Top Right Corner"
        className="svg-fixed top-0 right-0 w-[55px] sm:w-[60px]"
        style={{ padding: "20px" }}
      />
      <img
        src="/svgs/rightBottomVector.svg"
        alt="Bottom Right Corner"
        className="svg-fixed bottom-0 right-0 w-[55px] sm:w-[60px]"
        style={{ padding: "20px" }}
      />
      <img
        src="/svgs/middleVector.svg"
        alt="Middle Left"
        className="svg-fixed top-1/2 left-0 w-[55px] sm:w-[60px]"
        style={{ transform: "translateY(-50%)", padding: "20px" }}
      />
      <img
        src="/svgs/middleVector.svg"
        alt="Middle Right"
        className="svg-fixed top-1/2 right-0 w-[55px] sm:w-[60px]"
        style={{ transform: "translateY(-50%)", padding: "20px" }}
      />
    </section>
  );
};

export default Hero;
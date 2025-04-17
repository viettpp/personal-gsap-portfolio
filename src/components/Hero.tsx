"use client"; // Required for using hooks or React state in the App Router

import { FC, useEffect } from "react";
import gsap from "gsap";
import "@/styles/Hero.css"; // Keep a single CSS file for all hero styles
import Image from 'next/image';

const Hero: FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Dispatch custom event when Hero's animation is finished
        // Remove: window.dispatchEvent(new Event("heroAnimationFinished"));
      },
    });

    // Start with line animation
    tl.to(".gen-line", {
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
      {/* Hero Text */}
      <h1 className="hero-text text-[3.75rem] md:text-[5.5rem] lg:text-[7.5rem] xl:text-[8rem] 2xl:text-[11rem] leading-[0.9] md:leading-[0.85] lg:leading-[0.85] xl:leading-[0.8] 2xl:leading-[0.8]">
        {/* Desktop layout */}
        <span className="hidden sm:block">
        INSPIRING <br /> THE NEXT{" "}
        <span className="kelsi-container md:text-[5rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[10.5rem]">
          <span className="kelsi-text">G</span>
          <span className="kelsi">G</span>
          <Image 
            src="/svgs/genLine.svg" 
            alt="Gen Line" 
            className="line-svg gen-line bottom-[-0.1rem] w-[6.25rem] md:w-[9rem] lg:w-[13rem] xl:w-[14rem] 2xl:w-[18rem]" 
            width={625}
            height={18}
          />
        </span>
        EN OF
        <br />
        <span className="kelsi-container md:text-[5rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[10.5rem]">
          <span className="kelsi-text">T</span>
          <span className="kelsi">T</span>
          <Image 
            src="/svgs/techLine.svg" 
            alt="Tech Line" 
            className="line-svg tech-line bottom-[-0.1rem] w-[8.25rem] md:w-[12rem] lg:w-[16rem] xl:w-[18rem] 2xl:w-[24rem]" 
            width={825}
            height={24}
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
          <Image 
            src="/svgs/genLine.svg" 
            alt="Gen Line" 
            className="line-svg gen-line bottom-[0.1rem] w-[6.25rem]" 
            width={625}
            height={18}
          />
        </span>
        EN OF
        <span className="kelsi-container text-[3.5rem] ml-[1.5rem]"> {/* Add margin ml to align with the desktop layout */}
          <span className="kelsi-text">T</span>
          <span className="kelsi">T</span>
          <Image 
            src="/svgs/techLine.svg" 
            alt="Tech Line" 
            className="line-svg tech-line bottom-[0.1rem] w-[8.25rem]" 
            width={825}
            height={24}
          />
        </span>
        ECH <br /> LEADERS
        </span>
      </h1>

      {/* Fixed SVGs */}
      <Image
        src="/svgs/leftTopVector.svg"
        alt="Top Left Corner"
        className="svg-fixed top-2 left-2 w-[15px] sm:w-[20px]"
        width={15}
        height={20}
      />
      <Image
        src="/svgs/leftBottomVector.svg"
        alt="Bottom Left Corner"
        className="svg-fixed bottom-2 left-2 w-[15px] sm:w-[20px]"
        width={15}
        height={20}
      />
      <Image
        src="/svgs/rightTopVector.svg"
        alt="Top Right Corner"
        className="svg-fixed top-2 right-2 w-[15px] sm:w-[20px]"
        width={15}
        height={20}
      />
      <Image
        src="/svgs/rightBottomVector.svg"
        alt="Bottom Right Corner"
        className="svg-fixed bottom-2 right-2 w-[15px] sm:w-[20px]"
        width={15}
        height={20}
      />
      <Image
        src="/svgs/middleVector.svg"
        alt="Middle Left"
        className="svg-fixed top-1/2 left-2 w-[15px] sm:w-[20px]"
        style={{ transform: "translateY(-50%)"}}
        width={15}
        height={20}
      />
      <Image
        src="/svgs/middleVector.svg"
        alt="Middle Right"
        className="svg-fixed top-1/2 right-2 w-[15px] sm:w-[20px]"
        style={{ transform: "translateY(-50%)"}}
        width={15}
        height={20}
      />
    </section>
  );
};

export default Hero;
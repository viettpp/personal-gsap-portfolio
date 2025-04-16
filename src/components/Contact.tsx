"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from "@/lib/animations";
import '@/styles/Contact.css';
import { SlotMachineText } from "@/components/animations";

const Contact: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    // Clone the content for seamless looping
    const content = marqueeRef.current.firstElementChild as HTMLElement;
    if (!content) return;

    const clone = content.cloneNode(true) as HTMLElement;
    marqueeRef.current.appendChild(clone);
  }, []);

  const socialLinks = [
    { text: 'LINKEDIN', href: 'www.linkedin.com/in/viettppham' },
    { text: 'GITHUB', href: 'https://github.com/viettpp' },
    { text: 'YOUTUBE', href: 'https://www.youtube.com/@viettpp' },
    { text: 'INSTAGRAM', href: 'https://www.instagram.com/heyimveo/' },
  ];

  return (
    <div className="contact">
      <div className="contact__inner">
        <div className="flex flex-col h-full">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start pt-[5rem] md:pt-[8rem] lg:pt-[10rem] xl:pt-[12rem] 2xl:pt-[15rem] px-[3rem] lg:px-[5rem] xl:px-[6rem] 2xl:px-[8rem]">
            {/* Left Text */}
            <p className="contact__description text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] max-w-[18rem] md:max-w-[23rem] lg:max-w-[27rem] xl:max-w-[30rem] 2xl:max-w-[40rem] mb-[1.5rem] md:mb-0">
              Fusing experimentation with execution, Viet builds digital products that shift perception and drive progress.
            </p>

            {/* Right Links */}
            <div className="flex flex-col items-start">
              <span className="contact__connect text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pb-[0.5rem]">[CONNECT]</span>
              <div className="flex flex-col items-start">
                {socialLinks.map((link) => (
                  <a 
                    key={link.text}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] py-[0.1rem] tracking-[0.05em]"
                  >
                    <SlotMachineText text={link.text} showArrow={true} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Section - Marquee */}
          <div className="flex items-center justify-center py-4">
            <div className="contact__marquee" ref={marqueeRef}>
              <div className="contact__marquee-content">
                <a href="mailto:hello@viet.dk" className="block">
                  <span className="contact__marquee-text text-[4rem] md:text-[8rem] lg:text-[12.5rem] xl:text-[12.5rem] 2xl:text-[15rem]">
                    LET'S TALK <span className="kelsi">X</span>&nbsp;
                  </span>
                  <span className="contact__marquee-text text-[4rem] md:text-[8rem] lg:text-[12.5rem] xl:text-[12.5rem] 2xl:text-[15rem]">
                    LET'S TALK <span className="kelsi">X</span>&nbsp;
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end px-[3rem] lg:px-[5rem] xl:px-[6rem] 2xl:px-[8rem]">
            <span className="contact__footer-text text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem]">[©2023]</span>
            <span className="contact__footer-text text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] text-right">MADE BY VIET</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
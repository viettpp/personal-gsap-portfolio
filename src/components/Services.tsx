"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '@/styles/Services.css';
import SlotMachineText from "@/components/SlotMachineText";

const CoreServices: React.FC = () => {
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const arrow = arrowRef.current;
    const link = arrow?.parentElement;

    if (arrow && link) {
      // Initial rotation
      gsap.set(arrow, { rotation: -45 });

      // Create hover animation
      const hoverAnimation = gsap.to(arrow, {
        paused: true,
        rotation: 0,
        duration: 0.4,
        ease: "expo.out",
        stagger: 0.05
      });

      // Define event handler functions
      const handleMouseEnter = () => hoverAnimation.play();
      const handleMouseLeave = () => hoverAnimation.reverse();

      // Add event listeners
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const rows = gsap.utils.toArray('.services-table tr');

    rows.forEach((row) => {
      const numWrapper = (row as HTMLElement).querySelector('.number-cell .text-wrapper');
      const itemWrapper = (row as HTMLElement).querySelector('.item-cell .text-wrapper');
      const topLine = (row as HTMLElement).querySelector('.top-line');

      if (!numWrapper || !itemWrapper || !topLine) return;

      gsap.timeline({
        scrollTrigger: {
          trigger: row as HTMLElement,
          start: 'top 80%',
          scrub: false, // no scrubbing; animate once triggered
        },
      })
        // 1) Slide num wrapper up from y=100% to y=0 and fade in
        .fromTo(
          numWrapper,
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.2, ease: 'power2.inOut' }
        )
        // 2) Slide item wrapper up from y=100% to y=0, with small delay and fade in
        .fromTo(
          itemWrapper,
          { y: '100%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.2, ease: 'power2.inOut' },
          '+=0.1'
        )
        // 3) Expand the line from width=0 to full width, with small delay
        .fromTo(
          topLine,
          { width: 0 },
          { width: 'calc(100% + 20px)', duration: 0.2, ease: 'power2.out' },
          '+=0.1'
        );
    });
  }, []);

  return (
    <div className="core-services min-h-screen max-w-[20rem] md:max-w-[42rem] lg:max-w-[52rem] xl:max-w-[70rem] 2xl:max-w-[125rem] mx-auto">
      <div className="flex flex-col md:flex-row w-full gap-[3rem] lg:gap-[4rem] xl:gap-[15rem] 2xl:gap-[25rem]">
        <div className="core-services__left">
          <h1 className="title text-[3.75rem] md:text-[5.5rem] lg:text-[7.5rem] xl:text-[8rem] 2xl:text-[11rem] leading-[0.9] mb-4">
            Core<br />S<span className="kelsi text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[7.5rem] 2xl:text-[10.5rem] relative -left-[0.10em] -mr-[0.20em]">e</span>rvices
          </h1>
          <p className="description text-[1.063rem] md:text-[1rem] lg:text-[1.063rem] xl:text-[1.125rem] 2xl:text-[1.563rem] leading-relaxed mb-2 2xl:mb-4 mr-10 md:mr-[5rem] lg:mr-[10rem] 2xl:mr-[25rem]">
            Responsibly innovative, this is what Viet can do for you without
            getting himself fired from his day job.
          </p>
          <a 
            href="https://standardresume.co/r/QGXQF0QMK16iYfDR7mKqU" /* Replace with your resume link */
            target="_blank" 
            rel="noopener noreferrer" 
            className="resume-link text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] flex items-center gap-1"
          >
            <svg 
              ref={arrowRef} /* Ref for the arrow SVG */
              width="5" 
              height="6" 
              viewBox="0 0 5 6" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-[0.5rem] xl:h-[0.563rem] 2xl:h-[0.75rem] w-[0.5rem] xl:w-[0.563rem] 2xl:w-[0.75rem] cursor-pointer"
            >
              <path d="M3.80469 2.6875L2.05469 0.9375L2.5 0.5L5 3L2.5 5.5L2.05469 5.0625L3.80469 3.3125L0 3.3125L0 2.6875L3.80469 2.6875Z" fill="currentColor"/>
            </svg>
            <SlotMachineText text="WORK RESUME" />
          </a>
        </div>

        {/* Right section */}
        <div className="core-services__right pr-2">
          <table className="services-table w-full">
            <tbody>
              {/* [TECH] Category */}
              <tr>
                <td rowSpan={3} className="category-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] w-[60px] xl:w-[100px] 2xl:w-[150px]">[TECH]</td>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 w-[20px]" data-category="[TECH]">
                  <div className="text-wrapper">01</div>
                </td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-1 pb-4">
                  <span className="top-line"></span>
                  <div className="text-wrapper">Tech Strategy</div>
                </td>
              </tr>
              <tr>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4">
                  <div className="text-wrapper">02</div>
                </td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">
                  <span className="top-line"></span>
                  <div className="text-wrapper">AI/ML Prototypes</div>
                </td>
              </tr>
              <tr>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4">
                  <div className="text-wrapper">03</div>
                </td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">
                  <span className="top-line"></span>
                  <div className="text-wrapper">Full-Stack</div>
                </td>
              </tr>

              {/* [BRAND] Category */}
              <tr>
                <td rowSpan={2} className="category-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pt-4">[BRAND]</td>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4" data-category="[BRAND]">
                  <div className="text-wrapper">04</div>
                </td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">
                  <span className="top-line"></span>
                  <div className="text-wrapper">Brand Design</div>
                </td>
              </tr>
              <tr>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4">
                  <div className="text-wrapper">05</div>
                </td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">
                  <span className="top-line"></span>
                  <div className="text-wrapper">AI Video Production</div>
                </td>
              </tr>

              {/* [GROW] Category */}
              <tr>
                <td rowSpan={2} className="category-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pt-4">[GROW]</td>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4" data-category="[GROW]">
                  <div className="text-wrapper">06</div>
                </td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">
                  <span className="top-line"></span>
                  <div className="text-wrapper">Public Speaking</div>
                </td>
              </tr>
              <tr>
                <td className="number-cell text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem] pl-0 pt-4">
                  <div className="text-wrapper">07</div>
                </td>
                <td className="item-cell text-[1.25rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.75rem] 2xl:text-[2.375rem] pl-4 xl:pl-8 pt-5 pb-4 2xl:pt-7 2xl:pb-6">
                  <span className="top-line"></span>
                  <div className="text-wrapper">Startup Mentorship</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
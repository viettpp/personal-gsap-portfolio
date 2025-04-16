"use client";

import { FC, useEffect } from "react";
import "@/styles/About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About: FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const aboutText = document.querySelector(".about-text");
    if (!aboutText) return;

    // Split text content into words and wrap each in a span with the "word" class
    const text = (aboutText as HTMLElement).innerText;
    const words = text.split(" ");
    aboutText.innerHTML = words
      .map((word) => `<span class="word">${word} </span>`)
      .join("");

    // Animate each word with a stagger fade effect on scroll:
    gsap.fromTo(
      ".word",
      { opacity: 0.1 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top bottom",
          end: "bottom center",
          scrub: 2,
        },
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <section className="about-section max-w-[20rem] md:max-w-[40rem] lg:max-w-[50rem] xl:max-w-[70rem] 2xl:max-w-[120rem] pb-[5rem] md:pb-[8rem] lg:pb-[10rem] xl:pb-[12rem] 2xl:pb-[15rem] mx-auto">
      <p className="about-text text-[1.8rem] md:text-[2.25rem] lg:text-[3.5rem] xl:text-[3.5rem] 2xl:text-[5rem] indent-[4rem] md:indent-[8rem] lg:indent-[10rem] xl:indent-[12rem] 2xl:indent-[24rem]">
        Viet is a digital alchemist and seasoned tech entrepreneur, uniquely
        situated at the nexus of business, technology, and creativity. With a
        strong consultancy background and a flair for experimentation, he
        transforms abstract ideas into impactful digital realities. Each line
        of code, pixel, and frame stands as a testament to his passion for
        innovation and excellence.
      </p>
    </section>
  );
};

export default About;
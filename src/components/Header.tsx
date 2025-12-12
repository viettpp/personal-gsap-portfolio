"use client";

import { FC, useEffect } from "react";
import gsap from "gsap";
import "@fontsource/redacted-script"; // Import Redacted Script font
import "@/styles/Header.css";

const Header: FC = () => {
  useEffect(() => {
    // Set the initial position of .logo-container to be above the viewport
    gsap.set(".logo-container", { y: "-40%", opacity: 0 });

    const onHeroFinished = () => {
      // Animate the logo drop once the custom event fires
      gsap.to(".logo-container", { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" });
    };

    window.addEventListener("heroAnimationFinished", onHeroFinished);

    return () => {
      window.removeEventListener("heroAnimationFinished", onHeroFinished);
    };
  }, []);

  return (
    <header className="logo-container">
      <div className="logo pt-4">
        <span className="kelsi text-5xl sm:text-6xl 2xl:text-7xl">V</span>
        <span className="redacted text-4xl sm:text-5xl 2xl:text-6xl">iet</span>
      </div>
    </header>
  );
};

export default Header;

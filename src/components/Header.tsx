"use client";

import { FC, useEffect } from "react";
import gsap from "gsap";
import "@fontsource/redacted-script"; // Import Redacted Script font
import "@/styles/Header.css";

const Header: FC = () => {
  useEffect(() => {
    // Set the initial position of .logo-container to be above the viewport
    gsap.set(".logo-container", { y: "-100%" });

    const onHeroFinished = () => {
      // Animate the logo drop once the custom event fires
      gsap.to(".logo-container", { y: 0, duration: 0.5, ease: "power2.out" });
    };

    window.addEventListener("heroAnimationFinished", onHeroFinished);

    return () => {
      window.removeEventListener("heroAnimationFinished", onHeroFinished);
    };
  }, []);

  return (
    <header className="logo-container">
      <div className="logo">
        <span className="kelsi">V</span>
        <span className="redacted">iet</span>
      </div>
    </header>
  );
};

export default Header;
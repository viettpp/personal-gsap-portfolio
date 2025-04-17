"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

export default function CurtainReveal() {
  const curtainRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        window.dispatchEvent(new Event("curtainAnimationFinished"));
      },
    });

    tl.to(curtainRefs.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.15,
    });
  }, []);

  return (
    <div className="curtain-reveal-portal pointer-events-none fixed inset-0 z-[9999]">
      <div className="hero-curtains absolute inset-0 flex z-[9999]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={el => { if (el) curtainRefs.current[i] = el; }}
            className="hero-curtain"
            style={{ height: "100%", width: "20%", background: "#043D77" }}
          />
        ))}
      </div>
    </div>
  );
}

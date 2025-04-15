"use client"

import { useState, useRef, useEffect } from "react"
import gsap from 'gsap';

interface SlotMachineTextProps {
  text: string
  staggerDelay?: number
  duration?: number
  className?: string
  showArrow?: boolean
}

export default function SlotMachineText({
  text = "Hover over me!",
  staggerDelay = 50,
  duration = 300,
  className = "",
  showArrow = false,
}: SlotMachineTextProps) {
  const [isTextHovering, setIsTextHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<SVGSVGElement>(null)
  const hoverAnimationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (!showArrow || !arrowRef.current) return;

    const arrow = arrowRef.current;

    // Initial rotation
    gsap.set(arrow, { rotation: -45 });

    // Create hover animation with slower (smoother) duration
    hoverAnimationRef.current = gsap.to(arrow, {
      paused: true,
      rotation: 0,
      duration: 0.6,
      ease: "expo.out",
      stagger: 0.05
    });

    // Define event handler functions for arrow hover
    const handleArrowMouseEnter = () => hoverAnimationRef.current?.play();
    const handleArrowMouseLeave = () => hoverAnimationRef.current?.reverse();

    // Add event listeners for arrow hover
    arrow.addEventListener('mouseenter', handleArrowMouseEnter);
    arrow.addEventListener('mouseleave', handleArrowMouseLeave);

    // Cleanup
    return () => {
      arrow.removeEventListener('mouseenter', handleArrowMouseEnter);
      arrow.removeEventListener('mouseleave', handleArrowMouseLeave);
    };
  }, [showArrow]);

  const handleTextMouseEnter = () => {
    // First trigger arrow animation
    hoverAnimationRef.current?.play();
    // Then trigger text animation after a short delay
    setTimeout(() => {
      setIsTextHovering(true);
    }, 100); // Small delay to ensure arrow animation starts first
  };

  const handleTextMouseLeave = () => {
    setIsTextHovering(false);
    hoverAnimationRef.current?.reverse();
  };
  
  return (
    <div 
      ref={containerRef}
      className={`inline-flex items-center gap-1 cursor-pointer ${className}`}
    >
      {showArrow && (
        <svg 
          ref={arrowRef}
          width="5" 
          height="6" 
          viewBox="0 0 5 6" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="h-[0.5rem] xl:h-[0.563rem] 2xl:h-[0.75rem] w-[0.5rem] xl:w-[0.563rem] 2xl:w-[0.75rem]"
        >
          <path d="M3.80469 2.6875L2.05469 0.9375L2.5 0.5L5 3L2.5 5.5L2.05469 5.0625L3.80469 3.3125L0 3.3125L0 2.6875L3.80469 2.6875Z" fill="currentColor"/>
        </svg>
      )}
      <div 
        className="flex"
        onMouseEnter={handleTextMouseEnter}
        onMouseLeave={handleTextMouseLeave}
        onClick={() => setIsTextHovering(!isTextHovering)}
      >
        {text.split("").map((char, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden"
            style={{ 
              height: "1.0em",
              width: char === " " ? "0.3em" : index === 0 ? "1em" : "0.7em",
            }}
          >
            {char === " " ? (
              <span>&nbsp;</span>
            ) : (
              <>
                {/* Front layer */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform"
                  style={{
                    transitionProperty: "transform",
                    transitionDuration: `${duration}ms`,
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDelay: `${isTextHovering ? index * staggerDelay : (text.length - index - 1) * staggerDelay}ms`,
                    transform: isTextHovering ? "translateY(-100%)" : "translateY(0)",
                  }}
                >
                  {char}
                </div>
                
                {/* Back layer */}
                <div
                  className="absolute inset-0 flex items-center justify-center transition-transform"
                  style={{
                    transitionProperty: "transform",
                    transitionDuration: `${duration}ms`,
                    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                    transitionDelay: `${isTextHovering ? index * staggerDelay : (text.length - index - 1) * staggerDelay}ms`,
                    transform: isTextHovering ? "translateY(0)" : "translateY(100%)",
                  }}
                >
                  {char}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
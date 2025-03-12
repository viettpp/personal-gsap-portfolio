"use client"

import { useState, useEffect, useRef } from "react"
import gsap from 'gsap';

interface AnimatedLinkProps {
  href: string
  text: string
  staggerDelay?: number
  duration?: number
  className?: string
}

export default function AnimatedLink({
  href,
  text = "Hover over me!",
  staggerDelay = 50,
  duration = 300,
  className = "",
}: AnimatedLinkProps) {
  const [isHovering, setIsHovering] = useState(false)
  const arrowRef = useRef<SVGSVGElement>(null)
  
  useEffect(() => {
    const arrow = arrowRef.current;
    if (arrow) {
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

      // Animation will be controlled by the same hover state as the text
      if (isHovering) {
        hoverAnimation.play();
      } else {
        hoverAnimation.reverse();
      }
    }
  }, [isHovering]);

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsHovering(!isHovering)}
    >
      <div className="flex items-center gap-1">
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
        
        <div className="flex">
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
                      transitionDelay: `${isHovering ? index * staggerDelay : (text.length - index - 1) * staggerDelay}ms`,
                      transform: isHovering ? "translateY(-100%)" : "translateY(0)",
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
                      transitionDelay: `${isHovering ? index * staggerDelay : (text.length - index - 1) * staggerDelay}ms`,
                      transform: isHovering ? "translateY(0)" : "translateY(100%)",
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
    </a>
  )
}
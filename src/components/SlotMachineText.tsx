"use client"

import { useState, useEffect, useRef } from "react"

interface SlotMachineTextProps {
  text: string
  staggerDelay?: number
  duration?: number
  className?: string
}

export default function SlotMachineText({
  text = "Hover over me!",
  staggerDelay = 50,
  duration = 300,
  className = "",
}: SlotMachineTextProps) {
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <div 
      ref={containerRef}
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => setIsHovering(!isHovering)} // Added click toggle for mobile testing
    >
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
  )
}
"use client"

import { useState, useEffect, useRef } from "react"
// Add GSAP import
import { gsap } from "@/lib/animations";

// Utility function for className merging
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

const tabs = ["STORY", "CHAT", "BOOK", "SHOP"]

export default function NavigationDock() {
  const [activeTab, setActiveTab] = useState("STORY")
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const highlightRef = useRef<HTMLDivElement>(null)
  const dockInnerRef = useRef<HTMLDivElement>(null)
  const dockRef = useRef<HTMLDivElement>(null) // Add ref for the dock

  const currentTab = hoveredTab || activeTab

  useEffect(() => {
    const updateHighlightPosition = () => {
      if (!highlightRef.current) return
      const currentTabElement = tabRefs.current[currentTab]
      const dockInner = dockInnerRef.current
      if (!currentTabElement || !dockInner) return

      // Calculate position relative to dockInner
      const tabRect = currentTabElement.getBoundingClientRect()
      const dockRect = dockInner.getBoundingClientRect()
      const left = tabRect.left - dockRect.left
      const top = tabRect.top - dockRect.top

      highlightRef.current.style.width = `${tabRect.width}px`
      highlightRef.current.style.height = `${tabRect.height}px`
      highlightRef.current.style.left = `${left}px`
      highlightRef.current.style.top = `${top}px`
    }

    updateHighlightPosition()
    setIsLoaded(true)

    window.addEventListener("resize", updateHighlightPosition)
    window.addEventListener("scroll", updateHighlightPosition)
    return () => {
      window.removeEventListener("resize", updateHighlightPosition)
      window.removeEventListener("scroll", updateHighlightPosition)
    }
  }, [currentTab])

  // Set initial position off-screen (down)
  useEffect(() => {
    if (dockRef.current) {
      gsap.set(dockRef.current, { y: 100, opacity: 0 })
    }
    // Animate up when hero animation finishes
    const onHeroFinished = () => {
      if (dockRef.current) {
        gsap.to(dockRef.current, {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
        })
      }
    }
    window.addEventListener("heroAnimationFinished", onHeroFinished)
    return () => {
      window.removeEventListener("heroAnimationFinished", onHeroFinished)
    }
  }, [])

  const handleDockMouseLeave = () => {
    setHoveredTab(null)
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab)
    const section = document.getElementById(tab.toLowerCase())
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      ref={dockRef} // Attach ref here
      className={cn(
        "fixed bottom-[3rem] left-1/2 -translate-x-1/2 flex items-center justify-center rounded-md shadow-lg overflow-hidden z-[100]",
        "backdrop-blur-md bg-white/20", // Frosted glass effect and bottom class to control space to the bottom of the screen
        "w-[80vw] max-w-[15rem] xl:max-w-[16.35rem] 2xl:max-w-[21.8rem]",
        "h-[2.6rem] xl:h-[2.83rem] 2xl:h-[3.78rem]" // Dock size
      )}
      style={{
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        fontFamily: "'PP Neue Montreal Medium', sans-serif",
      }}
      onMouseLeave={handleDockMouseLeave}
    >
      <div
        ref={dockInnerRef}
        className="relative flex items-center w-full h-full px-1 py-1"
        style={{ position: "relative" }}
      >
        <div
          ref={highlightRef}
          className={cn(
            "absolute bg-[#043D77] rounded z-0 transition-all duration-300 ease-out pointer-events-none",
            isLoaded ? "opacity-100" : "opacity-0",
          )}
        />

        <div className="relative z-10 flex items-center w-full h-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[tab] = el
              }}
              className={cn(
                "rounded-md font-medium transition-colors duration-200 flex-1 h-full",
                "px-2 xl:px-[0.55rem] 2xl:px-[0.73rem]", // Padding for larger screens
                "text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem]", // Font size
                "whitespace-nowrap",
                "font-[PP Neue Montreal Medium]",
                currentTab === tab ? "text-white" : "text-white/90",
              )}
              style={{ fontFamily: "'PP Neue Montreal Medium', sans-serif" }}
              onClick={() => handleTabClick(tab)}
              onMouseEnter={() => setHoveredTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

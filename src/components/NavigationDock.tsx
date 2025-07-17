"use client"

import { useState, useEffect, useRef, useLayoutEffect } from "react"
// Remove unused import
import { gsap } from "@/lib/animations";

// Utility function for className merging
const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(" ")
}

const tabs = ["STORY", "CHAT"]
// Add more tabs as needed
// Ensure the number of tabs matches the number of links

// Add a links array for external URLs (must match tabs order)
const links = [
  "", // STORY link
  "https://chat.viet.dk",  // CHAT link
  "",  // TOOLS link
  "",  // SHOP link
  // Add more links as needed
  // Ensure the number of links matches the number of tabs
];

// Custom hook for slot machine animation for dock tabs (now animates both layers)
function useDockSlotMachine(
  frontRefs: React.RefObject<HTMLSpanElement[]>,
  backRefs: React.RefObject<HTMLSpanElement[]>,
  trigger: boolean,
  text: string,
  duration = 300, // Match SlotMachineText
  staggerDelay = 50 // Match SlotMachineText
) {
  useLayoutEffect(() => {
    if (!frontRefs.current || !backRefs.current) return;
    const fronts = frontRefs.current;
    const backs = backRefs.current;
    fronts.forEach((front, i) => {
      if (!front) return;
      gsap.to(front, {
        y: trigger ? "-100%" : "0%",
        duration: duration / 1000,
        delay: (trigger ? i : (text.length - i - 1)) * staggerDelay / 1000,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)", // Match SlotMachineText
      });
    });
    backs.forEach((back, i) => {
      if (!back) return;
      gsap.to(back, {
        y: trigger ? "0%" : "100%",
        duration: duration / 1000,
        delay: (trigger ? i : (text.length - i - 1)) * staggerDelay / 1000,
        ease: "cubic-bezier(0.4, 0, 0.2, 1)", // Match SlotMachineText
      });
    });
  }, [trigger, text, duration, staggerDelay, frontRefs, backRefs]);
}

export default function NavigationDock() {
  const [activeTab] = useState("STORY") // Remove setActiveTab since it's unused
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const highlightRef = useRef<HTMLDivElement>(null)
  const dockInnerRef = useRef<HTMLDivElement>(null)
  const dockRef = useRef<HTMLDivElement>(null)

  // Create refs for each tab's character layers
  const frontRefsArr = useRef<(HTMLSpanElement | null)[][]>([]);
  const backRefsArr = useRef<(HTMLSpanElement | null)[][]>([]);
  const measureRefsArr = useRef<(HTMLSpanElement | null)[][]>([]);
  const [charWidthsArr, setCharWidthsArr] = useState<number[][]>(
    tabs.map(tab => Array(tab.length).fill(0))
  );

  // Fix dependency warning
  const tabsKey = tabs.join("");

  // Measure character widths after mount or tab text change
  useEffect(() => {
    const newWidths = tabs.map((tab, i) =>
      tab.split("").map((_, j) => {
        const el = measureRefsArr.current[i]?.[j];
        return el ? el.offsetWidth : 0;
      })
    );
    setCharWidthsArr(newWidths);
  }, [tabsKey]);

  // Call the animation hook for each tab (always in the same order)
  // DO NOT use a loop, call the hook directly for each tab
  useDockSlotMachine(
    { current: frontRefsArr.current[0]?.filter((el): el is HTMLSpanElement => el !== null) },
    { current: backRefsArr.current[0]?.filter((el): el is HTMLSpanElement => el !== null) },
    hoveredTab === tabs[0],
    tabs[0]
  );
  useDockSlotMachine(
    { current: frontRefsArr.current[1]?.filter((el): el is HTMLSpanElement => el !== null) },
    { current: backRefsArr.current[1]?.filter((el): el is HTMLSpanElement => el !== null) },
    hoveredTab === tabs[1],
    tabs[1]
  );
  useDockSlotMachine(
    { current: frontRefsArr.current[2]?.filter((el): el is HTMLSpanElement => el !== null) },
    { current: backRefsArr.current[2]?.filter((el): el is HTMLSpanElement => el !== null) },
    hoveredTab === tabs[2],
    tabs[2]
  );
  useDockSlotMachine(
    { current: frontRefsArr.current[3]?.filter((el): el is HTMLSpanElement => el !== null) },
    { current: backRefsArr.current[3]?.filter((el): el is HTMLSpanElement => el !== null) },
    hoveredTab === tabs[3],
    tabs[3]
  );

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
          {tabs.map((tab, i) => {
            const isActive = currentTab === tab;
            // Prepare refs for this tab's characters
            if (!frontRefsArr.current[i]) frontRefsArr.current[i] = [];
            if (!backRefsArr.current[i]) backRefsArr.current[i] = [];
            if (!measureRefsArr.current[i]) measureRefsArr.current[i] = [];
            const chars = tab.split("");

            return (
              <a
                key={tab}
                href={links[i] || undefined} // If empty string, no href attribute
                // Removed target and rel so links open in the same tab
                ref={el => { tabRefs.current[tab] = el }}
                className={cn(
                  "rounded-md font-medium transition-colors duration-200 flex-1",
                  "w-full h-full",
                  "px-2 xl:px-[0.55rem] 2xl:px-[0.73rem]",
                  "text-[0.688rem] xl:text-[0.75rem] 2xl:text-[1rem]",
                  "whitespace-nowrap",
                  "font-[PP Neue Montreal Medium]",
                  "flex items-center justify-center",
                  isActive ? "text-white" : "text-white/90",
                )}
                style={{ fontFamily: "'PP Neue Montreal Medium', sans-serif" }}
                onMouseEnter={() => setHoveredTab(tab)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <span
                  className="inline-flex relative h-[1em] overflow-hidden"
                  style={{ pointerEvents: "none" }}
                >
                  {/* Hidden spans for measuring character widths */}
                  <span style={{ position: 'absolute', visibility: 'hidden', pointerEvents: 'none', height: 0, overflow: 'hidden', whiteSpace: 'pre', fontFamily: 'inherit', fontWeight: 'inherit', fontSize: 'inherit' }}>
                    {chars.map((char, j) => (
                      <span
                        key={j}
                        ref={el => { measureRefsArr.current[i][j] = el; }}
                        style={{ display: 'inline-block', fontFamily: 'inherit', fontWeight: 'inherit', fontSize: 'inherit' }}
                      >
                        {char === " " ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                  {chars.map((char, j) => (
                    <span
                      key={j}
                      className="relative inline-block"
                      style={{
                        height: "1em",
                        width: charWidthsArr[i]?.[j] ? `${charWidthsArr[i][j]}px` : undefined,
                        minWidth: char === " " ? "0.3em" : undefined,
                        padding: "0 0.03em",
                        transition: 'width 0.2s',
                        display: "inline-block",
                        verticalAlign: "top",
                      }}
                    >
                      {/* Front layer */}
                      <span
                        ref={el => { frontRefsArr.current[i][j] = el; }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          willChange: "transform",
                          transform: "translateY(0%)",
                        }}
                      >
                        {char}
                      </span>
                      {/* Back layer */}
                      <span
                        ref={el => { backRefsArr.current[i][j] = el; }}
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          willChange: "transform",
                          transform: "translateY(100%)",
                        }}
                      >
                        {char}
                      </span>
                    </span>
                  ))}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  )
}

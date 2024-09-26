"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Adjust the visibility threshold and scroll duration based on the screen size
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Set a smaller threshold for mobile devices
  const visibilityThreshold = isMobile ? 200 : 300;

  // Use a more efficient scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > visibilityThreshold);
    };

    // Debounce the scroll event to avoid excessive function calls
    let debounceTimer;
    const debounceScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleScroll, 100); // Adjust debounce delay as needed
    };

    window.addEventListener("scroll", debounceScroll, { passive: true });

    return () => window.removeEventListener("scroll", debounceScroll);
  }, [visibilityThreshold]);

  // Use an easing function for a smooth scroll effect
  const scrollToTop = (duration = isMobile ? 800 : 500) => {
    const start = performance.now();
    const startY = window.pageYOffset;

    const easing = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const scrollStep = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);
      const scrollTo = startY * (1 - easedProgress);

      window.scrollTo(0, scrollTo);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'} z-[99]`}>
      {isVisible && (
        <button
          onClick={() => scrollToTop()} // Adjust duration automatically
          aria-label="Scroll to top"
          className={`flex h-${isMobile ? '8' : '10'} w-${isMobile ? '8' : '10'} cursor-pointer items-center justify-center rounded-md bg-blueMain dark:bg-orangeMain text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg`}
        >
          <span className={`mt-${isMobile ? '[4px]' : '[6px]'} h-3 w-3 rotate-45 border-l border-t border-white`}></span>
        </button>
      )}
    </div>
  );
}

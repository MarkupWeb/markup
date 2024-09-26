"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Optimize scroll event listener with a debounce function
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    // Debounce the scroll event to avoid excessive function calls
    let debounceTimer;
    const debounceScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleScroll, 100); // Adjust debounce delay as needed
    };

    window.addEventListener("scroll", debounceScroll, { passive: true });

    return () => window.removeEventListener("scroll", debounceScroll);
  }, []);

  // Use an easing function for a smooth scroll effect
  const scrollToTop = (duration = 500) => {
    const start = performance.now();
    const startY = window.pageYOffset;

    const easing = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

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
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <button
          onClick={() => scrollToTop(1000)} // Increase duration for slower scroll
          aria-label="Scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-blueMain dark:bg-orangeMain text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </button>
      )}
    </div>
  );
}

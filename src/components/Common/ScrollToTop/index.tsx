"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Custom smooth scroll to top using requestAnimationFrame for better performance
  const scrollToTop = () => {
    const scrollStep = () => {
      const distance = window.scrollY;
      if (distance > 0) {
        window.scrollBy(0, -distance / 10); // Adjust 10 to control speed
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          onKeyPress={(e) => e.key === 'Enter' && scrollToTop()} // Keyboard accessibility
          tabIndex={0}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-blueMain dark:bg-orangeMain text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </div>
      )}
    </div>
  );
}

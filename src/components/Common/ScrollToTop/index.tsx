"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Smooth scroll using requestAnimationFrame for better performance
  const scrollToTop = () => {
    const scrollStep = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -window.scrollY / 10); // Adjust this factor to control speed
        requestAnimationFrame(scrollStep);
      }
    };
    requestAnimationFrame(scrollStep);
  };

  useEffect(() => {
    // Debouncing scroll event for better performance
    let timeoutId: NodeJS.Timeout;

    const toggleVisibility = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsVisible(window.pageYOffset > 300);
      }, 100); // Adjust the debounce delay if needed
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="Scroll to top"
          tabIndex={0} // Make the button accessible via keyboard
          role="button" // Define the role for accessibility
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-blueMain dark:bg-orangeMain text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg focus:outline-none"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </div>
      )}
    </div>
  );
}

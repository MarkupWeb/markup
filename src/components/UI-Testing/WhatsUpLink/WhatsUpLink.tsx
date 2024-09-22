"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function WhatsUpLink() {
  const [isVisible, setIsVisible] = useState(false);
  const locale = useLocale();


  useEffect(() => {
    Aos.init({ duration: 2000 });
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
    <div className="fixed bottom-8 left-8 z-[99]" data-aos="fade-up">
      {isVisible && (
        <Link href={"https://wa.me/+201015882008"}  target="_blank">
        <div
          aria-label="WhatsApp Link"
          className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-slate-800 dark:bg-white text-green-500  shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp group"
        >
          <span className="text-[2rem]">
            <FaWhatsapp />
          </span>

          {/* Improved Hover Message */}
          <span className="absolute left-full ml-4 top-1/2 transform -translate-y-1/2 opacity-0 bg-orangeMain text-white text-sm px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:ml-6 whitespace-nowrap">
          {locale === "en" ? "Call Us Now" : "تواصل معنا الان"}
          
            
            <span className="absolute top-1/2 left-[-8px] transform -translate-y-1/2 border-r-[10px] border-orangeMain border-y-[8px] border-y-transparent"></span>
          </span>
        </div>
        </Link>
      )}
      
    </div>
  );
}

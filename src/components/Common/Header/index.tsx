"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggler from "./ThemeToggler";
import lightLogo from "../../../../public/images/logo/light-logo.png";
import darkLogo from "../../../../public/images/logo/dark-logo.png";
import LocaleSwitcher from "@/components/LocalSwitcher/local-switcher";
import Nav from "./Nav";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  // Navbar toggle state
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Toggle navbar visibility
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Dark mode handling
  const { theme } = useTheme();

  return (
    <header dir="ltr"
      className={`header left-0 top-0 z-40 flex w-full items-center  ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] py-3 lg:py-0 bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent shadow-sm dark:shadow-md py-2"
      }`}
    >
      <div className="container">
        <div className="relative -mx-2 flex items-center justify-between">
          {/* Logo */}
          <div className="w-[100px] md:w-[120px] lg:w-[150px] ">
            <Link href="/">
              <Image
                src={theme === "dark" ? darkLogo : lightLogo}
                alt="logo"
                width={0}
                height={0}
                className="w-full"
              />
            </Link>
          </div>

          {/* Nav component - controlled by navbarOpen */}
          <Nav
            navbarOpen={navbarOpen}
            navbarToggleHandler={navbarToggleHandler}
          />

          {/* Menu toggler & Locale Switch */}
          <div className="flex items-center gap-1">
            <LocaleSwitcher />
            <ThemeToggler />
            <HiBars3
              onClick={navbarToggleHandler}
              className="text-[33px] cursor-pointer lg:hidden"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

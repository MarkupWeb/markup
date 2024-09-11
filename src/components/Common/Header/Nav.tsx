"use client"
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import menuData from "./menuData";
import { usePathname } from "next/navigation";
import { Link } from "@/navigation";

function Nav({ navbarOpen, navbarToggleHandler }) {
  const [openIndex, setOpenIndex] = useState(-1);

  // Translation and Locale Handling
  const t = useTranslations("Menu");
  const menuLinks = menuData(t);
  const locale = useLocale();
  const pathname = usePathname();

  // Submenu Toggle
  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // Helper to render submenu
  const renderSubmenu = (submenu, index) => (
    <div
      className={`submenu relative left-0 top-full rounded-sm bg-white dark:bg-dark transition-all duration-300 lg:absolute lg:top-[110%] lg:invisible lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 lg:shadow-lg ${
        openIndex === index ? "block" : "hidden"
      }`}
    >
      {submenu.map((submenuItem, idx) => (
        <Link
          href={submenuItem.path}
          key={idx}
          className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
        >
          {submenuItem.title}
        </Link>
      ))}
    </div>
  );

  return (
    <nav
      id="navbarCollapse"
      className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white dark:bg-transparent px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 ${
        navbarOpen
          ? "visibility top-full opacity-100"
          : "invisible top-[120%] opacity-0"
      }`}
    >
      <ul
        className={`block lg:flex lg:text-center lg:items-center lg:justify-center font-[400] lg:gap-8 ${
          locale === "ar" ? "__rtl_lang font-[500]" : ""
        }`}
      >
        {menuLinks.map((menuItem, index) => (
          <li key={index} className="group relative">
            {menuItem.path ? (
              <Link
                href={menuItem.path}
                className={`flex py-2 text-base lg:text-[14.5px] lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                  pathname === menuItem.path
                    ? "text-primary dark:text-white"
                    : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                }`}
                onClick={navbarToggleHandler} // Close the menu when a link is clicked
              >
                {menuItem.title}
              </Link>
            ) : (
              <>
                <p
                  onClick={() => handleSubmenu(index)}
                  className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                >
                  {menuItem.title}
                </p>
                {renderSubmenu(menuItem.submenu, index)}
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;

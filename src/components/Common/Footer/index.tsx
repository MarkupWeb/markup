"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import lightLogo from '../../../../public/images/logo/light-logo.png';
import darkLogo from '../../../../public/images/logo/dark-logo.png';
import SocialLinks from "../SocialLinks/SocialLinks";

const socialLinks = [
  {
    link: 'https://www.facebook.com',
    iconLink: <FaFacebookF />,
  },
  {
    link: 'https://www.instagram.com',
    iconLink: <FaInstagram />,
  },
  {
    link: 'https://www.linkedin.com',
    iconLink: <FaLinkedinIn />,
  },
];

const translations = {
  en: {
    logoAlt: "logo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.",
    usefulLinks: "Useful Links",
    terms: "Terms",
    supportHelp: "Support & Help",
    blog: "Blog",
    pricing: "Pricing",
    about: "About",
    tos: "TOS",
    privacyPolicy: "Privacy Policy",
    refundPolicy: "Refund Policy",
    openSupportTicket: "Open Support Ticket"
  },
  ar: {
    logoAlt: "شعار",
    description: "نص عشوائي يستخدم في الطباعة.",
    usefulLinks: "روابط مفيدة",
    terms: "الشروط",
    supportHelp: "الدعم والمساعدة",
    blog: "مدونة",
    pricing: "التسعير",
    about: "حول",
    tos: "شروط الخدمة",
    privacyPolicy: "سياسة الخصوصية",
    refundPolicy: "سياسة الاسترداد",
    openSupportTicket: "فتح تذكرة دعم"
  }
};

const Footer = () => {
  const { theme } = useTheme();
  const locale = useLocale();
  const translation = translations[locale] || translations.en; // Fallback to English

  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block w-[180px]">
                <Image
                  src={theme === "dark" ? darkLogo : lightLogo}
                  alt={translation.logoAlt}
                  className="w-full"
                  width={0}
                  height={0}
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {translation.description}
              </p>
              <div className=''>
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                {translation.usefulLinks}
              </h2>
              <ul>
                <li>
                  <Link href="/blog" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.blog}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.pricing}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.about}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                {translation.terms}
              </h2>
              <ul>
                <li>
                  <Link href="/" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.tos}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.refundPolicy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                {translation.supportHelp}
              </h2>
              <ul>
                <li>
                  <Link href="/contact" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.openSupportTicket}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.terms}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    {translation.about}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

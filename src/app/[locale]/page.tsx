import { Metadata } from "next";
import { useLocale, useTranslations } from 'next-intl';
import Hero from "@/components/Markup-Sections/Hero";
import OurPartners from "@/components/Markup-Sections/OurPartners";
import Baner from "@/components/Markup-Sections/Baner/Baner";
import OurServices from "@/components/Markup-Sections/OurServices";
import Features from "@/components/Markup-Sections/Features";
import OurTarget from "@/components/Markup-Sections/Our-Target/OurTarget";
import NewsUs from "@/components/Markup-Sections/NewsUs/NewsUs";
import Temework from "@/components/Markup-Sections/Temework/Temework";
import Testimonials from "@/components/Markup-Sections/Testimonials";
import Contact from "@/components/Markup-Sections/Contact";
import SeoMeta from "@/components/SEO-Meta/SEOMeta";

// Define metadata function

  

export default function HomePage() {

  const t = useTranslations('Home'); // Assuming translations are loaded under 'About'

  // Define metadata for the page, using translation keys for title/description
  const pageTitle = t('pageTitle'); // Example: "About Us" or "معلومات عنا"
  const pageDescription = t('pageDescription'); 


  
  return (
    <>
    <SeoMeta
        title={pageTitle}
        description={pageDescription}
        meta_title={pageTitle} // Optional, if you want the same meta title
        canonical="https://example.com/about"
        noindex={false} // Change this based on your needs
      />
      <Hero  />
      <OurPartners />
      <Baner />
      <OurServices />
      <Features />
      <OurTarget />
      <NewsUs />
      <Temework />
      <Testimonials />
      <Contact />
    </>
  );
}

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

// Define metadata function
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;

  return {
    title: locale === 'ar' ? "Markup - حلول التسويق والأعمال" : "Markup - Marketing and Business Solutions",
    description: locale === 'ar' ? "Markup تقدم حلول تسويق وأعمال مبتكرة للشركات." : "Markup provides innovative marketing and business solutions for companies.",
    icons: {
      icon: "/icons/icon-markup.png",
    },
    openGraph: {
      title: locale === 'ar' ? "Markup" : "Markup",
      description: locale === 'ar' ? "حلول التسويق والأعمال" : "Marketing and business solutions",
      url: locale === 'ar' ? "https://www.markup.vip/ar" : "https://www.markup.vip/en",
      siteName: "Markup",
    },
    alternates: {
      canonical: locale === 'ar' ? "https://www.markup.vip/ar" : "https://www.markup.vip/en",
      languages: {
        'en': 'https://www.markup.vip/en',
        'ar': 'https://www.markup.vip/ar',
      },
    },
  };
}

export default function HomePage() {
  
  return (
    <>
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

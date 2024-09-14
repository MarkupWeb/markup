import { Metadata } from "next";
import { useLocale, useTranslations } from 'next-intl';
import Hero from "@/components/Markup-Sections/Hero";
import OurPartners from "@/components/Markup-Sections/OurPartners";
import Baner from "@/components/Markup-Sections/Baner/Baner";
import OurServices from "@/components/Markup-Sections/OurServices";
import Features from "@/components/Markup-Sections/Qestions";
import OurTarget from "@/components/Markup-Sections/Our-Target/OurTarget";
import NewsUs from "@/components/Markup-Sections/NewsUs/NewsUs";
import Temework from "@/components/Markup-Sections/Temework/Temework";
import Testimonials from "@/components/Markup-Sections/Testimonials";
import Contact from "@/components/Markup-Sections/Contact";





export default function HomePage() {
  return (
    <>
      <Hero />
      <OurPartners />
      <Baner />
      <OurServices />
      <Features />
      <OurTarget />
      <NewsUs />
      <Temework />
      <Testimonials />
      
    </>
  );
}

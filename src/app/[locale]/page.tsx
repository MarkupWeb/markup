import { useTranslations } from 'next-intl';


import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Atchievements from "@/components/Achievements";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import OurPartners from "@/components/Partenrs/OurPartners";

import Temework from "@/components/Temework/Temework";
import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";
import NewsUs from '@/components/NewsUs/NewsUs';
import AchievementsTwo from '@/components/Achievements2/ActievementsTwo';



export const metadata: Metadata = {
  title: "Markup",
  description: "marketing and business solutions",
  icons: {
    icon: "/icons/icon-markup.png",
  },
  // other metadata
};




export default function Home() {

  return (
    <>
      
      <Hero />
      <OurPartners />
      <Features />
      <NewsUs />
      <AchievementsTwo />
      <OurServices />
      
      <Temework />
      <Contact />
      

    </>
  );
}

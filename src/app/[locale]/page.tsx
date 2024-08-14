import { useTranslations } from "next-intl";

import Temework from "@/components/Markup-Sections/Temework/Temework";
import Testimonials from "@/components/Markup-Sections/Testimonials";

import { Metadata } from "next";
import Hero from "@/components/Markup-Sections/Hero";
import Features from "@/components/Markup-Sections/Features";
import NewsUs from "@/components/Markup-Sections/NewsUs/NewsUs";
import AchievementsTwo from "@/components/Markup-Sections/Achievements2/ActievementsTwo";
import OurServices from "@/components/Markup-Sections/OurServices";
import Contact from "@/components/Markup-Sections/Contact";
import OurPartners from "@/components/Markup-Sections/OurPartners";
import OurTarget from "@/components/Markup-Sections/Our-Target/OurTarget";

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
      <OurTarget />
      <OurPartners />
      
      <Features />
      <NewsUs />
      <AchievementsTwo />
      <OurServices />
      <Temework />
      <Testimonials />
      <Contact />
    </>
  );
}

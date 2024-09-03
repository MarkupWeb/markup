
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
import Baner from "@/components/Markup-Sections/Baner/Baner";
import { useLocale } from "next-intl";



// eslint-disable-next-line react-hooks/rules-of-hooks
const local = useLocale();





export const metadata: Metadata = {
  title: `${local === "en" ? "Markup" : "Markup"}`,
  description: `${local === "en" ? "marketing and business solutions" : "نحن متخصصون في دفع النمو وتعظيم عائد الاستثمار للشركات من خلال استراتيجيات التسويق الرقمي المتطورة. يتفوق فريق الخبراء لدينا في تحسين محركات البحث (SEO) والدفع لكل نقرة (PPC) وتسويق المحتوى وإدارة وسائل التواصل الاجتماعي لضمان تحقيق أهداف عملك."}`,
  icons: {
    icon: "/icons/icon-markup.png",
  },
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <OurPartners />
      <Baner />
      <OurServices />
      <Features />
      <OurTarget />
      <NewsUs />
      <Temework />
      <Testimonials />
      <Contact />
    </main>
  );
}

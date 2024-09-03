import { Metadata } from "next";
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

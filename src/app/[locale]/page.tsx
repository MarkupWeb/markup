import { useTranslations } from 'next-intl';


import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Atchievements from "@/components/Achievements";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import OurPartners from "@/components/Partenrs/OurPartners";
import Partners from "@/components/Partenrs/OurPartners";
import Pricing from "@/components/Pricing";
import Temework from "@/components/Temework/Temework";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";



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
      <Atchievements />
      <OurServices />
      
      <Temework />
      
    
{/*     
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
 */}


    </>
  );
}

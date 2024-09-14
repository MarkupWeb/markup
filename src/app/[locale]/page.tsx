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



interface BlogsProps {
  params: { locale: string };
}

export const generateMetadata = ({ params: { locale } }: BlogsProps): Metadata => {
  // Define English and Arabic metadata
  const metadata = {
    en: {

      title: 'Home - English',
      description: 'Learn with us a lot about marketing, sales, paid advertising, and marketing campaigns.',
      twitter: {
        card: 'summary_large_image',
        site: 'markup.vip/en',
        title: 'Blogs - English',
        description: 'Learn with us a lot about marketing, sales, paid advertising, and marketing campaigns.',
      },
    },
    ar: {
      title: 'الرئسيه - العربية',
      description: "التسويق للمطاعم ,حملات الاعلانات المدفوعه,زياده المبيعات للمنتجات",
      twitter: {
        card: 'summary_large_image',
        site: 'markup.vip/ar',
        title: 'الرئسيه - العربية',
        description: "التسويق للمطاعم ,حملات الاعلانات المدفوعه,زياده المبيعات للمنتجات",
      },
    },
  };

  // Return metadata based on the locale
  return locale === 'ar' ? metadata.ar : metadata.en;
};


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

import Head from 'next/head';
import { Metadata } from "next";
import { useLocale } from 'next-intl';
import Hero from "@/components/Markup-Sections/Hero";
import OurPartners from "@/components/Markup-Sections/OurPartners";
import Baner from "@/components/Markup-Sections/Baner/Baner";
import OurServices from "@/components/Markup-Sections/OurServices";
import Features from "@/components/Markup-Sections/Qestions";
import OurTarget from "@/components/Markup-Sections/Our-Target/OurTarget";
import NewsUs from "@/components/Markup-Sections/NewsUs/NewsUs";
import Temework from "@/components/Markup-Sections/Temework/Temework";
import Testimonials from "@/components/Markup-Sections/Testimonials";
import Contact from '@/components/Markup-Sections/Contact/Contact';

interface BlogsProps {
  params: { locale: string };
}

// Define Metadata Type
type MetadataType = {
  title: string;
  description: string;
  twitter: {
    card: string;
    site: string;
    title: string;
    description: string;
  };
};

// Metadata Generator for SEO
export const generateMetadata = ({ params: { locale } }: BlogsProps): MetadataType => {
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

  return locale === 'ar' ? metadata.ar : metadata.en;
};

export default function HomePage() {
  const locale = useLocale();
  const metadata = generateMetadata({ params: { locale } });

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
      </Head>


      <Hero />
      <OurTarget />

      <OurPartners />
      <Baner />

      
      <OurServices />
      <Features />
      
      <NewsUs />
      <Temework />
      <Testimonials />
      <Contact />
      
    </>
  );
}

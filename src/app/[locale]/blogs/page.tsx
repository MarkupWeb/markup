import Baner from '@/components/Markup-Sections/Baner/Baner'
import BlogsHero from '@/components/Markup-Sections/BlogsHero'
import NewsUs from '@/components/Markup-Sections/NewsUs/NewsUs';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;

  return {
    title: locale === 'ar' ? "Markup-التسويق والأعمال" : "Markup-Blogs",
    description: locale === 'ar' ? "Markup تقدم حلول تسويق وأعمال مبتكرة للشركات." : "Markup provides innovative marketing and business solutions for companies.",
    icons: {
      icon: "../icons/icon-markup.png",
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
  

function Blogs() {
  return (
    <div>
        <BlogsHero />
        
        <Baner />
    </div>
  )
}

export default Blogs
import Baner from '@/components/Markup-Sections/Baner/Baner';
import BlogsHero from '@/components/Markup-Sections/BlogsHero';
import NewsUs from '@/components/Markup-Sections/NewsUs/NewsUs';
import { Metadata } from 'next';
import React from 'react';

interface BlogsProps {
  params: { locale: string };
}

export const generateMetadata = ({ params: { locale } }: BlogsProps): Metadata => {
  // Define English and Arabic metadata
  const metadata = {
    en: {

      title: 'Blogs - English',
      description: 'Learn with us a lot about marketing, sales, paid advertising, and marketing campaigns.',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'Blogs - English',
        description: 'Learn with us a lot about marketing, sales, paid advertising, and marketing campaigns.',
      },
    },
    ar: {
      title: 'المدونات',
      description: 'تعلم معنا الكثير عن التسويق ,المبيعات ,الاعلانات المدفوعه, حمالات التسويق',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'المدونات - العربية',
        description: 'تعلم معنا الكثير عن التسويق ,المبيعات ,الاعلانات المدفوعه, حمالات التسويق',
      },
    },
  };

  // Return metadata based on the locale
  return locale === 'ar' ? metadata.ar : metadata.en;
};

function Blogs() {
  return (
    <div>
      <BlogsHero />
      <Baner />
      <NewsUs />
    </div>
  );
}

export default Blogs;

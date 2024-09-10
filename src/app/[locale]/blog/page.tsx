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
      description: 'Explore the latest blogs in English',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'Blogs - English',
        description: 'Explore the latest blogs in English',
      },
    },
    ar: {
      title: 'المدونات - العربية',
      description: 'استكشف أحدث المدونات باللغة العربية',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'المدونات - العربية',
        description: 'استكشف أحدث المدونات باللغة العربية',
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

import BlogsHero from '@/components/Markup-Sections/BlogsHero'
import { Metadata } from 'next';
import React from 'react'



interface BlogsProps {
  params: { locale: string };
}

export const generateMetadata = ({ params: { locale } }: BlogsProps): Metadata => {
  // Define English and Arabic metadata
  const metadata = {
    en: {

      title: 'Partners - English',
      description: 'Learn with us a lot about marketing, sales, paid advertising, and marketing campaigns.',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'Partners - English',
        description: 'Learn with us a lot about marketing, sales, paid advertising, and marketing campaigns.',
      },
    },
    ar: {
      title: 'شركائنا',
      description: 'تعلم معنا الكثير عن التسويق ,المبيعات ,الاعلانات المدفوعه, حمالات التسويق',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'شركائنا - العربية',
        description: 'تعلم معنا الكثير عن التسويق ,المبيعات ,الاعلانات المدفوعه, حمالات التسويق',
      },
    },
  };

  // Return metadata based on the locale
  return locale === 'ar' ? metadata.ar : metadata.en;
};


function page() {
  return (
    <section
        id="home"
        className={` relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] `}
      >

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              Welcome In  Page
            </div>
          </div>
        </div>
      </section>
  )
}

export default page
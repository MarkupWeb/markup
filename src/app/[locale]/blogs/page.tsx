import Baner from '@/components/Markup-Sections/Baner/Baner'
import BlogsHero from '@/components/Markup-Sections/BlogsHero'
import NewsUs from '@/components/Markup-Sections/NewsUs/NewsUs';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
    title: "Markup-Blogs",
    description: "marketing and business solutions",
    icons: {
      icon: "../icons/icon-markup.png",
    },
    // other metadata
  };
  

function Blogs() {
  return (
    <div>
        <BlogsHero />
        
        <Baner />
    </div>
  )
}

export default Blogs
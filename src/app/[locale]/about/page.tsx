import Baner from '@/components/Markup-Sections/Baner/Baner'
import BlogsHero from '@/components/Markup-Sections/BlogsHero'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: "Markup-blogs",
    description: "marketing and business solutions",
    icons: {
      icon: "../icons/icon-markup.png",
    },
    // other metadata
  };

function page() {
  return (
    <div>
        <BlogsHero />
         <Baner />
      
      
    </div>
  )
}

export default page
import BlogsHero from '@/components/Markup-Sections/BlogsHero'
import React from 'react'

function page() {
  return (
    <div>
        <section
        id=""
        className={`bg-gray-600 relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] `}
      >

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              Welcome In blogs Page
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
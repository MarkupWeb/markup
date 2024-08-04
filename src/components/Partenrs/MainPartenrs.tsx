


"use client";

import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale } from 'next-intl';
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";


// CAROUSEL DATA

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  students: number;
  classes: number;
  price: number;
  rating: number;
}

const postData: DataType[] = [
  {
    heading: "Full stack modern",
    heading2: "javascript",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/04.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Design system",
    heading2: "with React programme",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/06.png",
    students: 130,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "Design banner",
    heading2: "with Figma",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/12.png",
    students: 120,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/02.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/08.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
  {
    heading: "We Launch Delia",
    heading2: "Webflow this Week!",
    name: "Colt stelle",
    imgSrc: "/images/Partnars_Logos/10.png",
    students: 150,
    classes: 12,
    price: 20,
    rating: 4.7,
  },
];

// CAROUSEL SETTINGS

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  // centerMode: true,
  slidesToScroll: 2,
  arrows: true,
  nextArrow: <NextArrow /> ,
  prevArrow: <PrevArrow /> ,
  autoplay: false,
  speed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};



const MainPartenrs = () => {

  const local = useLocale()



  return (
    <>
      <section  className="" >
        

          <Slider {...settings} >
            {postData.map((items, i) => (
              <div key={i}>
                <div  className={` flex items-center justify-center shadow-courses mx-3 my-2  rounded-2xl  px-3 pb-12 pt-3 cursor-pointer   bg-white p-8 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ${local === "ar" ? "__rtl_lang  " : ""}   `}>
                  <div className={`relative rounded-3xl flex justify-center `}>

                    <div  className={`bg-slate-800 dark:bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center shadow-lg ${local === "ar" ? "__rtl_lang bg-gree  " : ""} `}>
                    <span className="">
                       <Image className="" src={items.imgSrc} alt="partners_logo" width={80} height={80}/>
                    </span>

                    </div>
                    
                  </div>

                  <div className="px-3 ">
                    <h4 className=" pt-6 text-md md:text[16px]  font-bold text-black dark:text-white  ">
                      {items.heading} 
                    </h4>
                    

                    <div>
                      <h3 className="pt-3 text-[12px] md:text-[14px] font-normal opacity-75 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, reprehenderit.
                      </h3>
                    </div>

{/*                     

                    <div>
                      <h3 className="pt-6   font-normal opacity-75">
                        {items.name} 
                      </h3>
                    </div>
 */}


                  </div>
                </div>
              </div>
            ))}

            
          </Slider>
        
      </section>
    </>
  );
};

export default MainPartenrs;

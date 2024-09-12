import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";

type SliderListProps<T> = {
  records?: T[];
  renderItem: (itemData: T) => React.ReactNode;
  emptyMessage: string;
};

type HasId = { id: number };

const NewList = <T extends HasId>({
  records = [],
  renderItem,
  emptyMessage,
}: SliderListProps<T>): JSX.Element => {
  const [init, setInit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAtBeginning, setIsAtBeginning] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (init) {
      setInit(false);
    }
  }, [init]);

  const handleSlideChange = (swiper: any) => {
    setIsAtBeginning(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          440: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 14,
          },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={() => setInit(true)}
        onSlideChange={handleSlideChange}
      >
        {records.length > 0 ? (
          records.map((itemData) => (
            <SwiperSlide key={itemData.id}>{renderItem(itemData)}</SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div>
              thre is now category
            </div>
          </SwiperSlide>
        )}
      </Swiper>

      <div
        className={` md:block w-full absolute top-[40%] z-10 px-4  ${
          isHovered
            ? "opacity-100 transition-opacity duration-300 ease-in-out"
            : "opacity-70 transition-opacity duration-300 ease-in-out"
        }`}
      >
        <div
          ref={prevRef}
          className={`p-2 lg:p-3 rounded-full  ${
            isAtBeginning ? "bg-black/70 text-white" : "bg-green-400 text-black"
          } cursor-pointer shadow-sm absolute -left-4`}
        >
          <HiOutlineArrowNarrowLeft />
        </div>
        <div
          ref={nextRef}
          className={`p-2 lg:p-3 rounded-full ${
            isAtEnd ? "bg-black/70 text-white" : "bg-green-400 text-black"
          } cursor-pointer shadow-sm absolute -right-4`}
        >
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
    </div>
  );
};

export default NewList;

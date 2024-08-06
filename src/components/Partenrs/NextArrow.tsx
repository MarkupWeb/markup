import React from 'react'
import { HiChevronRight } from "react-icons/hi2";


function NextArrow({onClick}: any) {
  return (
    <div className="absolute -right-5 top-[40%] " onClick={onClick}>
        <div className="bg-gray-500/70 text-white hover:bg-gray-300  shadow-2xl  h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
            <HiChevronRight />

        </div>

    </div>
  )
}

export default NextArrow
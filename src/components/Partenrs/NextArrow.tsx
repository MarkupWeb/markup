import React from 'react'
import { HiChevronRight } from "react-icons/hi2";


function NextArrow({onClick}: any) {
  return (
    <div className="absolute right-0 -top-[80px] " onClick={onClick}>
        <div className="bg-orange-500 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer">
            <HiChevronRight />

        </div>

    </div>
  )
}

export default NextArrow
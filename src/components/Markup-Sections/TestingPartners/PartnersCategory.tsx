"use client"
import React from 'react'
import CategoryCard from './CategoryCard'
import SliderList from '@/components/Logic-List/MultipleSlider/SliderList';





function PartnersCategory() {

    const renderCategories = (itemData) => (
        <div className="" key={itemData}>
           <CategoryCard {...itemData}/>
        </div>
       
        );
    


  return (
    <div className='container '>
        <SliderList renderItem={renderCategories} />
    </div>
  )
}

export default PartnersCategory
import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import Card from './shared/Card'
 

export default function FeaturedSection(Slides) {
   Slides=1;  
   
    return (
        <div className="">
            <p className=" justify-center text-2xl font-semibold text-blue-500 ">Featured Section</p>
            {/* <Swiper slidesPerView={`${Slides}`}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={
                    {clickable: true}
                }
                modules={
                    [Pagination]
                }
               >
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
                <SwiperSlide><Card/></SwiperSlide>
            </Swiper> */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
    <div ><Card className=""/></div>
    <div><Card/></div>
    <div><Card/></div>
    <div><Card/></div>
    <div><Card/></div>
    <div><Card/></div>
    <div><Card/></div>
    <div><Card/></div>

</div>
        </div>
    );
}

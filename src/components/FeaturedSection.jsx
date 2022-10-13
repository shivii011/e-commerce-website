import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import Card from './shared/Card'


export default function FeaturedSection(Slides) {
    Slides = 1;

    return (
        <div className="">
            <p className="text-center text-2xl font-semibold text-blue-500 ">Featured Section</p>
            <Swiper slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={
                    {clickable: true}
                }
                modules={
                    [Pagination]
            } className="m-10">
                <SwiperSlide className="block sm:flex-col md:flex-row lg:flex-row ">

                    <div className=''>
                        <Card />
                        <Card/>
                        </div>
                    <div className=''><Card/>
                        <Card/></div>
                    <div className=''><Card/>
                        <Card/></div>
                </SwiperSlide>
                <SwiperSlide className="flex">

                    <div className="m-2"><Card/>
                        <Card/></div>
                    <div><Card/>
                        <Card/></div>
                    <div><Card/>
                        <Card/></div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

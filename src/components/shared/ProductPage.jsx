import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import { ProductPageData } from '../../utils/ProductPageData'; 
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './ProductPage.css'

// import required modules
import {EffectFlip, Pagination, Navigation} from "swiper";
import Button from './Button';

function ProductPage() {
    return (
        <div className='lg:flex md:flex sm:block text-dark-grey pb-8 font-main'>
           
            <div className='imageDiv lg:w-1/2 relative pt-10'>
            {ProductPageData.map((data)=>(
                <Swiper effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={
                    [EffectFlip, Pagination, Navigation]
                }
                className="mySwipe">
                <SwiperSlide>
                    <img  alt='' className='h-[22rem]' src={data.image1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='' className='h-[22rem]' src={data.image2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img  alt='' className='h-[22rem]' src={data.image3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img alt='' className='h-[22rem]' src={data.image4}/>
                </SwiperSlide>
              
            </Swiper>
            ))}
                
            </div>
            <div className='lg:w-1/2 pl-4 lg:text-left md:text-left sm:text-center font-semibold mx-8'>
                <p className='pt-5'>Smartphone</p>
                <p className='text-3xl pt-5 font-normal'>Iphone12</p>
                <div className='flex py-5'>
                    <p>Availability:</p>
                    <p className=' text-green'>65 in Stock</p>
                </div>
                <hr className=' w-5/6 text-gray'/>
                    <div className='py-5'>wislist</div>
                    <ul className='ml-3 opacity-60 text-dark-grey'>
                        <li>4.5 inch HD screen</li>
                        <li>Ios 12 OS</li>
                        <li>4 GHz Quard Core Processor</li>
                        <li>20MP Front Camera</li>
                    </ul>
                    <div className='flex py-5'>
                        <p className=' text-3xl font-normal'>$1,100.00</p>
                        <p className='text-lg  text-dark-grey opacity-50'><s>$1,215.00</s></p>
                    </div>
                    <div className='flex'>
                        <input type='text'/>
                        <div className=''><Button className=' bg-orange p-2 ml-2 rounded text-white hover:bg-blue ' value="Add to Cart"/></div>
                    </div>
                </div>
            </div>
    )
}

export default ProductPage

import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

// importing bg image

// importing images from assets
import Laptop from '../assets/laptop.jpg'
import Mobile from '../assets/mobile-samsung.jpg'
import Headphone from '../assets/headphones.jpg'
import Tablet from '../assets/tablet.jpg'
import Watch from '../assets/smart-watch2.jpg'

const HeroSection = () => {
  return (
    <div className="bg-hero tracking-wider">
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
      >
        <SwiperSlide className="flex">
            <img src={Laptop} alt="" className="w-1/2" />
            <div className="m-auto">
                <div className="text-gold-web-golden font-extrabold text-xl text-center">Laptops</div>
                <div className="text-yellow-50 font-light text-xs py-4 pl-8 pr-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel et qui modi ad porro amet officia reprehenderit aut consectetur, itaque praesentium velit ut animi incidunt dolorem nisi iste veritatis. </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex">
            <img src={Mobile} alt="" className="w-1/2" />
            <div className="m-auto">
                <div className="text-gold-web-golden font-extrabold text-xl text-center">Mobiles</div>
                <div className="text-yellow-50 font-light text-xs py-4 pl-8 pr-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel et qui modi ad porro amet officia reprehenderit aut consectetur, itaque praesentium velit ut animi incidunt dolorem nisi iste veritatis. </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex">
            <img src={Tablet} alt="" className="w-1/2" />
            <div className="m-auto">
                <div className="text-gold-web-golden font-extrabold text-xl text-center">Tablets</div>
                <div className="text-yellow-50 font-light text-xs py-4 pl-8 pr-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel et qui modi ad porro amet officia reprehenderit aut consectetur, itaque praesentium velit ut animi incidunt dolorem nisi iste veritatis. </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex">
            <img src={Headphone} alt="" className="w-1/2" />
            <div className="m-auto">
                <div className="text-gold-web-golden font-extrabold text-xl text-center">Headphones</div>
                <div className="text-yellow-50 font-light text-xs py-4 pl-8 pr-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel et qui modi ad porro amet officia reprehenderit aut consectetur, itaque praesentium velit ut animi incidunt dolorem nisi iste veritatis. </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex">
            <img src={Watch} alt="" className="w-1/2" />
            <div className="m-auto">
                <div className="text-gold-web-golden font-extrabold text-xl text-center">Smartwatches</div>
                <div className="text-yellow-50 font-light text-xs py-4 pl-8 pr-10"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel et qui modi ad porro amet officia reprehenderit aut consectetur, itaque praesentium velit ut animi incidunt dolorem nisi iste veritatis. </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HeroSection

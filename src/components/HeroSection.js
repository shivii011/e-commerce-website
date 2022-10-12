
import { HeroSectionData } from '../utils/HeroSectionData';

// Importing react-icons for using in the button
import { FaArrowRight } from 'react-icons/fa'

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css"

import { Pagination, Navigation } from "swiper";


const HeroSection = () => {
    // Creating variables for styling mapped data
    const headingStyle = "text-gold-web-golden font-extrabold text-3xl ml-8"
    const descStyle = "text-yellow-50 font-light text-sm py-4 pl-8 pr-10"
    const btnStyle = "flex ml-8 bg-gold-web-golden w-32 px-2 py-1.5 justify-center text-dark-charcoal font-bold hover:text-gold-web-golden hover:bg-dark-charcoal cursor-pointer"

  return (
    <div className="bg-hero tracking-wider">
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // Loop for returning back to first slide
            loop={true} 
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {/* Mapping data fetched from the object to omit repeated code */}
            {HeroSectionData.map((data) => (
            <SwiperSlide className="flex" key={data.id}>
                <img src={data.img} alt="" className="w-1/2" />
                <div className="m-auto">
                    <div className={headingStyle}>{data.heading}</div>
                    <div className={descStyle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel et qui modi ad porro amet officia reprehenderit aut consectetur, itaque praesentium velit ut animi incidunt dolorem nisi iste veritatis. </div>
                    <div className={btnStyle}>
                      <span>
                        Buy Now
                      </span>
                      <span>
                        <FaArrowRight className="mt-1.5 px-1 w-6" />
                      </span>
                      
                    </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSection

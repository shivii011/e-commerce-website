// Importing Button Component
import Button from './shared/Button'
// Importing Data from util folder
import { HeroSectionData } from '../utils/HeroSectionData';

// Importing react icons
import { FaArrowRight } from 'react-icons/fa'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiperStyle.css"

// Import required modules
import { Pagination, Navigation } from "swiper";


const HeroSection = () => {
    // Creating variables for styling
    const headingStyle = "text-gold-web-golden font-extrabold text-xl ml-8"
    const descStyle = "text-yellow-50 font-light text-xs py-4 pl-8 pr-10"
    const btnStyle = "border-none ml-8 bg-[#FFD61E] text-dark-charcoal hover:text-gold-web-golden hover:bg-dark-charcoal hover:bg-opacity-50"

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
            {/* Mapping data fetched from the object */}
            {HeroSectionData.map((data) => (
            <SwiperSlide className="flex" key={data.id}>
                <img src={data.img} alt="" className="w-1/2" />
                <div className="m-auto">
                    <div className={headingStyle}>{data.heading}</div>
                    <div className={descStyle}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel et qui modi ad porro amet officia reprehenderit aut consectetur, itaque praesentium velit ut animi incidunt dolorem nisi iste veritatis. </div>
                    <Button value={<FaArrowRight/>} className={btnStyle} />
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSection

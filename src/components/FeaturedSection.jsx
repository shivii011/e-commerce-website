import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import Card from './shared/Card'

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

//import { getProducts } from "../api/ViewProduct";

export default function FeaturedSection({Slides}) {
    const [products, setProducts] = useState([])

    
  useEffect(() => {
    const getProducts = async () => {
        let res = await axios.get("https://dp-backend-e-comm.herokuapp.com/api/products")
        let { data } = res.data
        let _data = data.slice(0, 6)
        setProducts(_data)
    }
    getProducts()
  }, [])
    Slides = 1;
    return (
        <div className="">
            <p className="text-center text-5xl font-semibold font-main text-blue mt-12 ">Featured Section</p>
            <Swiper slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={
                    {clickable: true}
                }
                modules={
                    [Pagination]
                } 
                className="m-10"
            >
                <SwiperSlide className="">
                    <Card products={products}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

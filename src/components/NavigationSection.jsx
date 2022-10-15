import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import WishlistCard from './shared/WishlistCard';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import './NavigationSection.css'

function NavigationSection() {
  return (
  <div className='text-center font-main'>
 <Tabs  defaultActiveKey="1" >
    <Tabs.TabPane tab="Best Seller" key="1">
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
                <SwiperSlide>
                <WishlistCard /> 
                </SwiperSlide>
            </Swiper>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tranding Products" key="2">
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
                <SwiperSlide>
                <WishlistCard /> 
                </SwiperSlide>
            </Swiper>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Special Offers" key="3">
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
                <SwiperSlide>
                <WishlistCard />
                </SwiperSlide>
            </Swiper>
    </Tabs.TabPane>
  </Tabs>
  </div>
  )
}

export default NavigationSection
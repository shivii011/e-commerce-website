import React from 'react';

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import Card from './shared/Card'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';

function NavigationSection() {
  return (
  <div className=' text-center'>
 <Tabs  defaultActiveKey="1">
    <Tabs.TabPane tab="Tab 1" key="1">
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
                    <Card />
                </SwiperSlide>
            </Swiper>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 2" key="2">
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
                    <Card />
                </SwiperSlide>
            </Swiper>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Tab 3" key="3">
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
                    <Card />
                </SwiperSlide>
            </Swiper>
    </Tabs.TabPane>
  </Tabs>
  </div>
  )
}

export default NavigationSection
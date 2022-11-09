import React ,{useEffect,useState}from 'react';
import axios from 'axios';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css/pagination";
import {Pagination} from "swiper";
import Card from './shared/NavigationCard';
import 'antd/dist/antd.min.css'
import { Tabs } from 'antd';
import './NavigationSection.css'

function NavigationSection() {
    const [productdata,setProductdata]=useState([])
    const [productdata2,setProductdata2]=useState([])
    const [productdata3,setProductdata3]=useState([])
useEffect(()=>{
  axios
  .get("https://dp-backend-e-comm.herokuapp.com/api/products")
  .then((response)=>{
    let {data} = response.data
    let _data=data.slice(0,2)
    let _data2=data.slice(2,4)
    let _data3=data.slice(4,6)
    setProductdata2(_data2)
    setProductdata3(_data3)
    setProductdata(_data)})
},[])
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
                <Card className="grid-flow-col" productdata={productdata3}/> 
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
                <Card productdata={productdata2}/> 
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
                <Card productdata={productdata} />
                </SwiperSlide>
            </Swiper>
    </Tabs.TabPane>
  </Tabs>
  </div>
  )
}

export default NavigationSection
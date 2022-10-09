import React from 'react'
import './footer.css'
// import {FaHeadphones} from 'react-icons/fa'
function Footer() {
  return (
   <div>
     <div className='footer bg-gray-100 grid grid-cols-7 py-5'>
      <div className='contianer-1 col-span-3'>
        <div className='text-4xl'> LOGO</div>

        <div className='grid grid-cols-3'>
          <div><i className='fa fa-headphones text-8xl  align-text-bottom text-yellow-300' /></div>
          <div ><p>Got Questions ? call us 24/7!</p>
            <p className='text-xl'>888224546 ,46546</p>
          </div>
        </div>
        <div className=''><p className='text-xl'>Contact Info</p>
        <p>27 MG Road Indore M.P. India</p></div>
        <div className='px-20 py-10'>
          <ul className='footer-icons-ul flex'>
            <li><a href='#' className='fab fa-facebook mx-2 text-gray-600 text-2xl hover:text-blue-600' /></li>
            <li><a href='#' className='fab fa-whatsapp mx-2 text-gray-600 text-2xl hover:text-green-600' /></li>
            <li><a href='#' className='fab fa-pinterest mx-2 text-gray-600 text-2xl hover:text-red-600' /></li>
            <li><a href='#' className='fab fa-linkedin mx-2 text-gray-600 text-2xl hover:text-blue-800' /></li>
            <li><a href='#' className='fab fa-youtube mx-2 text-gray-600 text-2xl hover:text-red-600' /></li>
            <li><a href='#' className='fab fa-instagram mx-2 text-gray-600 text-2xl hover:text-pink-600' /></li>
          </ul>
        </div>
      </div>
      <div className='contianer-2 col-span-4 grid grid-cols-3'>
        <div className='cont-1 text-lg'>
          <p className='text-2xl font-semibold'>Find It Fast</p>
          <p><a href='#' className="">Laptops & computer</a></p>
          <p><a href='#'>Camares & Photography</a></p>
          <p><a href='#'>Smart Phones & Tablets</a></p>
          <p><a href='#'>Video Games & Consoles</a></p>
          <p><a href='#'>TV & Audio</a></p>
          <p><a href='#'>Gadgets</a></p>
          <p><a href='#'>WaterProof Headphones</a></p>
        </div>
        <div className='cont-2 text-lg'>
          <p className='text-2xl font-semibold'>Navigation</p>
        <p>About</p>
        <p>Contact</p>
        <p>WishLsit</p>
        <p>FAQ</p>
        <p>Store Directory</p>
        </div>
        <div className='cont-3 text-lg'>
        <p className='text-2xl font-semibold'>Customer Care</p>
        <p>Track your order</p>
        <p>customer Services</p>
        <p>Return/Exchange</p>
        <p>FAQS</p>
        <p>Product Support</p>
        </div>
      </div>
    </div>
     <div className='reserved  bg-gray-200 '>
   <div className='left'><i class="fa fa-copyright"></i><strong>Name   <faBeer/></strong>-All Rights Reserved</div>

   </div>
   </div>
  )
}

export default Footer
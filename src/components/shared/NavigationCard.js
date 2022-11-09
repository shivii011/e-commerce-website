import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import { Data } from '../../utils/data';
const Card = ({className,productdata}) => {
  return (
    <div className="my-4 rounded-xl font-main px-12 gap-8 flex flex-wrap justify-center">
    {productdata.map((product) => (
      <div
        className={` transition-shadow bg-gray hover:transform duration-75 hover:scale-105 w-80 shadow-md hover:shadow-xl  ${className}`}
      >
        <div className="flex justify-end">
          {" "}
          <FavouriteButton className="p-2 rounded-full w-10 h-10 mt-4 text-blue border mr-4" />
        </div>
        <div className="border-1 p-6">
          <img
            className="rounded-lg h-40 mx-auto"
            src={product.productImages[0].productImageUrl}
            alt=""
          />
        </div>
        <div className="pl-3 pb-2">
          {/* <p className='text-md text-zinc-500'>{product.productName}</p> */}
          <p className="text-xl font-semibold py-1">{product.productName}</p>
          <div className="flex ">
            <p className=" px-1 text-lg">{product.discountedPrice}</p>
            <p className=" px-1 text-sm text-zinc-500 ">
              <s>{product.originalPrice}</s>
            </p>
            {/* <p className=' px-1  text-xs text-green'>{data.DiscountPercentage}</p> */}
          </div>
          <div className="flex  px-1 ">
            {/* <div className='bg-green rounded-lg flex p-1 cursor-pointer'><p className='text-white'>{data.rating}</p><i className="fa fa-star text-white text-xs pt-1"/> </div> */}
            <div className="bg-orange rounded-lg flex py-2 px-3 cursor-pointer text-sm">
              <p className="text-white">Add to cart</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}
export default Card
// <BuyButton className='mx-2 text-white' />
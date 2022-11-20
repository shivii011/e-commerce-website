import React ,{useEffect, useState} from 'react'
import BuyButton from './BuyButton';
import { WishlistData } from '../../utils/data';
import axios from 'axios';
const WishlistCard =( className ,product)=> {
  
//    const navigate = Navigate()

  return (
    <div className='group   my-4'>
      {/* {products.map((product) => ( */}
          <div className={`p-2 bg-gray  rounded-xl font-main shadow-md hover:shadow-xl hover:transform duration-75 hover:scale-105  ${className} flex`}>
            <div className='mt-16'><input className='m-2' type='checkbox' /></div>
            <div className='w-1/4 h-[10rem]'><img className='p-2 h-[10rem] ' src={product.productImages[0].productImageUrl} alt='' /></div>
            <div className='w-1/2'>
              {/* <p className='text-md text-dark-gray font-semibold '>{data.ItemType}</p> */}
              <p className='text-xl text-dark-gray font-semibold'>{product.productName}</p>
              <div className=''>
                  <div>
               <div className='flex py-1'>   <p className='text-xl text-dark-gray opacity-50'><s>{product.originalPrice}</s></p ><p className="text-md text-semibold text-green">-10% </p></div>
                  <p className='text-2xl text-dark-gray'>{product.discountedPrice}</p>
                  </div>
          
                </div>
            </div>
            <div className='flex justify-between w-[4rem] mt-[6rem]'>
             <BuyButton className='text-orange '/>
             <i class="fa fa-trash text-2xl text-red-500  cursor-pointer"></i>
                  </div>
          </div>
     
      {/* ))
      } */}
    </div>
  )
}

export default WishlistCard
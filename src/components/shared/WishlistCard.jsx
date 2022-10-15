import React from 'react'
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import { WishlistData } from '../../utils/data';
function WishlistCard( className) {
  return (
    <div className='group w-[14rem] border-gray border-2 m-2'>
      {WishlistData.map((data) => (
          <div className={`hover:shadow-2xl opacity-90 hover:opacity-100 ${className}`}>
            <div className='h-3/5'><img className='p-2' src={data.image} alt='' /></div>
            <div className=' text-left p-5'>
              <p className='text-md text-dark-gray font-semibold '>{data.ItemType}</p>
              <p className='text-xl text-dark-gray font-semibold'>{data.ItemName}</p>
              <div className=''>
                  <div>
               <div className='flex py-1'>   <p className='text-xl text-dark-gray opacity-50'><s>{data.Price}</s></p ><p className="text-md text-semibold text-green">-10% </p></div>
                  <p className='text-2xl text-dark-gray'>{data.DiscountedPrice}</p>
                  </div>
                 
                  <div className='flex justify-between px-8 pt-4'>
                  <div><FavouriteButton className='text-blue' /></div>
             <div> <BuyButton className='text-orange'/></div>
             <i class="fa fa-trash text-2xl text-red-500 active:animate-bounce cursor-pointer"></i>
                  </div>
                </div>
            </div>
          </div>
      ))}
    </div>
  )
}

export default WishlistCard
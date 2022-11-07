import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import { Data } from '../../utils/data';

const Card = (className) => {
  return (
    <div className=' max-w-[14rem] my-[3rem] bg-gray rounded-xl font-main shadow-md hover:shadow-xl hover:transform duration-75 hover:scale-105 '>
      {Data.map((data) => (
          <div className={` transition-shadow ${className}`}>
                <div className='absolute z-10 '> <FavouriteButton className='p-2 rounded-full w-10 h-10 mx-[10.86rem] mt-2 text-blue  border'/></div>
            <div className=' max-w-[13] border-1 relative p-6'><img className='rounded-lg' src={data.image} alt='' /></div>
            <div className='pl-3 pb-2'>
              <p className='text-md text-zinc-500'>{data.ItemType}</p>
              <p className='text-xl font-semibold py-1'>{data.ItemName}</p>
              <div className='opacity-100 group-hover:opacity-100 flex '>
                  <p className=' px-1 text-lg'>{data.Discounted}</p>
                  <p className=' px-1 text-sm text-zinc-500 '><s>{data.Price}</s></p>
                  {/* <p className=' px-1  text-xs text-green'>{data.DiscountPercentage}</p> */}
                  
                </div>
                <div className='flex  px-1 '>
                    <div className='bg-green rounded-lg flex p-1 cursor-pointer'><p className='text-white'>{data.rating}</p><i className="fa fa-star text-white text-xs pt-1"/> </div>
                    <div className='bg-orange rounded-lg flex p-1 ml-8 cursor-pointer text-sm '><p className='text-white'>Add to cart</p></div>
                    
                  </div>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Card
// <BuyButton className='mx-2 text-white' />

import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import { Data } from '../../utils/data';

const Card = (className) => {
  return (
    <div className='group max-w-[14rem] border rounded font-main'>
      {Data.map((data) => (
          <div className={` hover:shadow-xl transition-shadow ${className}`}>
                 <FavouriteButton className='m-2 absolute z-10 mx-[11rem] text-blue'/>
            <div className=' max-w-[13] border-1 relative'><img className=' hover:object-center group-hover:border-yellow-400' src={data.image} alt='' /></div>
            <div className='p-1'>
              <p className='text-md'>{data.ItemType}</p>
              <p className='text-xl font-semibold'>{data.ItemName}</p>
              <div className='opacity-100 group-hover:opacity-100 flex '>
                  <p className=' px-1 text-lg'>{data.Discounted}</p>
                  <p className=' px-1 text-sm'><s>{data.Price}</s></p>
                  <p className=' px-1  text-xs text-green'>{data.DiscountPercentage}</p>
                  
                </div>
                <div className='flex  px-1 '>
                    <div className='bg-green rounded-lg flex p-1'><p className='text-white'>{data.rating}</p><i className="fa fa-star text-white text-xs pt-1"/> </div>
                    <BuyButton className='mx-2 text-orange m-1' />
                  </div>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Card
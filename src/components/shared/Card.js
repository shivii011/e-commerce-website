import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import { Data } from '../../utils/data';


const Card = (className) => {
  return (
    <div className='group'>
      {Data.map((data) => (
          <div className={`hover:shadow-lg flex ${className}`}>
            <div className='w-2/5'><img className=' hover:object-center hover:border-solid hover:border-2 group-hover:border-yellow-400' src={data.image} alt='' /></div>
            <div className=' text-left pl-5 w-3/5'>
              <p className='text-md text-dark-gray font-semibold '>{data.ItemType}</p>
              <p className='text-2xl text-dark-gray font-semibold'>{data.ItemName}</p>
              <div className='opacity-100 group-hover:opacity-100 '>
                  <p className='text-2xl text-dark-gray'>{data.Price}</p>
                  <div className='flex'>
                    <FavouriteButton className='mx-2' /><p  className='text-gray'>Wishlist</p>
                    <BuyButton className='mx-2' /><p className='text-gray'>Add To Cart</p>
                  </div>
                </div>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Card
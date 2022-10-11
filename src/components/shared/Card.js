import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import { Data } from '../../utils/data';


const Card = (className) => {
  return (
    <div className='h-[20rem] w-[14rem] group'>
      {Data.map((data) => (
          <div className={`group-hover:shadow-lg ${className}`}>
            <div className=''><img className=' h-[14rem]hover:object-center hover:border-solid hover:border-2 group-hover:border-yellow-400' src={data.image} alt='' /></div>
            <div>
              <p className='text-lg text-blue-500 font-semibold'>{data.ItemName}</p>
              <div className='flex justify-between m-3 p-2 opacity-0 group-hover:opacity-100 '>
                  <p className='text-lg text-blue-500'>{data.Price}</p>
                  <div className='flex '>
                    <FavouriteButton className='mr-2' />
                    <BuyButton className='' />
                  </div>
                </div>
            </div>
          </div>
      ))}
    </div>
  )
}

export default Card
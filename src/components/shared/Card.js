import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import img from './mob-image.jpg'
function Card() {
  return (
    <div className='h-[20rem] w-[14rem] border hover:shadow-lg]'>
      <p>its a mobile</p>
      <p className='text-lg text-blue-500 font-semibold'>Name Of Product</p>
      <img className='h-[13rem] m-1 justify-center hover:h-[13.05rem] hover:w-[13.05rem]'  src={img} alt='' />
      <div className='flex justify-between m-3'>
      <div><p className='text-lg text-blue-500'>$100.00</p></div>
      <div className='flex  '>
       <FavouriteButton className='mr-2 '/>
       <BuyButton className=''/>
        </div>
      </div>
    </div>
  )
}

export default Card
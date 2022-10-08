import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import img from './mob-image.jpg'
function Card() {
  return (
<a href='' className='group'>
<div  className='h-[20rem] w-[14rem] border hover:shadow-lg'>
     <div className=''> <img className=' hover:object-center hover:border-solid hover:border-2 hover:border-yellow-400'src={img} alt='' /></div>
      <p className='text-lg text-blue-500 font-semibold'>Name Of Product</p>
      <div className='flex justify-between m-3 opacity-0 hover:opacity-100 '>
      <div><p className='text-lg text-blue-500'>$100.00</p></div>
      <div className='flex '>
       <FavouriteButton className='mr-2'/>
       <BuyButton className=''/>
        </div>
      </div>
    </div>
</a>
  )
}

export default Card
import React from 'react'

import WishlistCard from './shared/WishlistCard'

function Wishlist() {
  return (
    <div className=' font-main'>
       <div className='flex justify-center p-2 opacity-80'> <p className='text-3xl text-center'>Wishlist: </p><p className='text-3xl align-bottom text-green pl-2'>2 items</p></div>
        <hr className=' opacity-40'/>
   <div className='flex justify-center'>
   <WishlistCard/>
      
   </div>
      </div>
  )
}

export default Wishlist
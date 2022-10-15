import React from 'react'
import { FaHeart } from 'react-icons/fa';
function FavouriteButton({className ,onClick=()=>{}})
 {
  return (
    <div>
    <FaHeart onClick={onClick} className= {`${className} text-amber-400 cursor-pointer text-2xl hover:text-violet-500 active:animate-bounce`}/>
    </div>
  )
}

export default FavouriteButton
import React from 'react'
import { FaHeart } from 'react-icons/fa';
function FavouriteButton({className ,onClick=()=>{}})
 {
  return (
    <div>
    <FaHeart onClick={onClick} className= {`${className} cursor-pointer text-2xl active:animate-bounce`}/>
    </div>
  )
}

export default FavouriteButton
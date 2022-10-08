import React from 'react'
import { FaHeart } from 'react-icons/fa';
function FavouriteButton({className ,onClick=()=>{}})
 {
  return (
    <div>
    <FaHeart onClick={onClick} className= {`${className}  text-yellow-400 cursor-pointer text-2xl hover:animate-bounce hover:text-violet-500`}/>
    </div>
  )
}

export default FavouriteButton
import React from 'react'
import {FaCartPlus} from 'react-icons/fa';
function BuyButton({className ,onClick=()=>{}}) {
  return (
    <div><FaCartPlus onClick={onClick} className={`${className} text-amber-400 cursor-pointer text-2xl  hover:text-violet-500 active:animate-bounce`}/></div>
  )
}

export default BuyButton
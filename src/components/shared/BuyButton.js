import React from 'react'
import {FaCartPlus} from 'react-icons/fa';
function BuyButton({className ,onClick=()=>{}}) {
  return (
    <div><FaCartPlus onClick={onClick} className={`${className} hover:animate-bounce text-yellow-400 cursor-pointer text-2xl  hover:animate-bounce hover:text-violet-500 hover:transition-all`}/></div>
  )
}

export default BuyButton
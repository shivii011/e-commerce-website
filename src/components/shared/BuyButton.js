import React from 'react'
import {FaCartPlus} from 'react-icons/fa';
function BuyButton({className ,onClick=()=>{}}) {
  return (
    <div><FaCartPlus onClick={onClick} className={`${className} cursor-pointer text-2xl active:animate-bounce`}/></div>
  )
}

export default BuyButton
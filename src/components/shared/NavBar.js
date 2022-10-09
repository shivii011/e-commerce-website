import React from 'react'
import SearchBar from './SearchBar'
import { FaUser } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'

const NavBar = () => {
  return (
    <div>
        <div className="text-lg font-mono font-bold text-dark-charcoal bg-gold-web-golden h-12 px-4 py-2 flex gap-8">
            <div>
                <span className="underline">e</span>LECTRIC  <span className="underline">m</span>ART
            </div>
            <div className="text-sm flex gap-4 py-1">
                <span className="cursor-pointer px-2 hover:rounded-lg hover:bg-dark-charcoal hover:text-gold-web-golden">Home</span>
                <span className="cursor-pointer px-2 hover:rounded-lg hover:bg-dark-charcoal hover:text-gold-web-golden">Shop</span>
                <span className="cursor-pointer px-2 hover:rounded-lg hover:bg-dark-charcoal hover:text-gold-web-golden">Blog</span>
                <span className="cursor-pointer px-2 hover:rounded-lg hover:bg-dark-charcoal hover:text-gold-web-golden">Contact Us</span>
            </div>
            <div className="py-1 pl-12">
                <SearchBar />
            </div>
            <div className="flex py-1.5 gap-8">
                <FaUser className="cursor-pointer" />
                <FaHeart className="cursor-pointer" />
                <FaShoppingCart className="cursor-pointer" />
            </div>      
        </div>
        
    </div>
  )
}

export default NavBar

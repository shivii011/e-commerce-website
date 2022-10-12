import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className="flex">
        <input type="text" placeholder="Search Products" className="w-64 rounded-l-lg outline-none text-xs h-6 font-medium bg-transparent border-2 border-dark-charcoal px-2" />
        <div className="flex">
            <button className="bg-dark-charcoal h-6 px-2 rounded-r-lg text-gold-web-golden">
                <FaSearch />
            </button>
        </div>
        
    </div>
  )
}

export default SearchBar

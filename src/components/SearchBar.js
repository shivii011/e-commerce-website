import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className="flex">
        <input type="text" placeholder="Search Products" className="w-64 rounded-l-lg outline-none text-sm h-6 font-medium font-main bg-transparent border-2 border-white px-2 py-3" />
        <div className="flex">
            <button className="bg-orange h-7 px-2 rounded-r-lg text-white hover:bg-blue">
                <FaSearch />
            </button>
        </div> 
    </div>
  )
}

export default SearchBar

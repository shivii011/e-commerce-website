import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { SideBarData } from '../../utils/NavData'
import {Link} from 'react-router-dom'

const SideBar = ( {className} ) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={className}>
        <div className="text-lg font-main font-bold text-white bg-gradient-to-r from-green to-blue h-12 px-8 py-2 flex justify-between">
            <div>
                <span className="underline">e</span>LECTRIC  <span className="underline">m</span>ART
            </div>
            <div>
                <FaBars className="cursor-pointer w-8 h-8" onClick={handleClick} />
            </div>
            
        </div>   
		<div style={{display: isActive ? 'block':'none'}} className="bg-white text-black text-center text-xl font-bold font-main">
			{SideBarData.map((link) => (
        <div className="px-8 py-4 h-16 hover:bg-gray border-b-2 border-gray">
          <Link to={link.to} key={link.id} onClick={handleClick}>
					  {link.link}
				  </Link>
        </div>
				
			))}

        </div> 
        
    </div>
  )
}

export default SideBar
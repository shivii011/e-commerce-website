import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { SideBarData } from '../../utils/NavData'

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
		<div style={{display: isActive ? 'block':'none'}} className="h-screen bg-orange text-white text-xl font-bold font-main text-right">
			{SideBarData.map((link) => (
				<div key={link.id} className="px-8 py-4 h-16 hover:bg-blue border-b-2">
					{link.link}
					
				</div>
			))}

        </div> 
        
    </div>
  )
}

export default SideBar
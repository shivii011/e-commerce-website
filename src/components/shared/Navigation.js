import SearchBar from '../SearchBar'
import { NavBarLinks, NavBarIcons } from '../../utils/NavData'
import {Link} from 'react-router-dom'

const Navigation = ({ className }) => {
  return (
    <div className={className}>
      <div className="text-lg font-main font-bold text-white bg-gradient-to-r from-green to-blue h-14 px-8 py-2 flex gap-16 lg:w-full xl:w-screen lg:h-20 xl:h-14">
            <div className='py-1.5'>
                <span className="underline">e</span>LECTRIC  <span className="underline">m</span>ART
            </div>
            <div className=" text-base flex gap-4 py-1.5">
                {NavBarLinks.map((link) => (
                    <Link to={link.to} key={link.id} className="cursor-pointer text-white px-2 hover:rounded-lg hover:bg-orange">{link.link}</Link>
                ))}
            </div>
            <div className="py-1 pl-12 lg:py-4 xl:py-1">
                <SearchBar />
            </div>
            <div className="flex py-1.5 gap-8 lg:py-4 xl:py-1.5">
                {NavBarIcons.map((icon) => (
                    <div>
                        {icon.icon}
                    </div>
                ))}
            </div>      
        </div>
    </div>
  )
}

export default Navigation

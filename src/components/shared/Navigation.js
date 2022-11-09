import SearchBar from '../SearchBar'
import { NavBarLinks, NavBarIcons } from '../../utils/NavData'
import {Link} from 'react-router-dom'

const Navigation = ({ className }) => {
  return (
    <div className={className}>
      <div className="text-lg font-main font-bold text-white bg-gradient-to-r from-green to-blue h-14 px-8 py-2 flex gap-16 lg:h-20 xl:h-14">
            <div className='py-1.5'>
                <span className="underline">e</span>LECTRIC  <span className="underline">m</span>ART
            </div>
            <div className="text-base flex gap-4 py-1.5 lg:gap-3 xl:gap-4 2xl:gap-8">
                {NavBarLinks.map((link) => (
                    <Link to={link.to} key={link.id} className="cursor-pointer text-white px-2 hover:rounded-lg hover:bg-orange">{link.link}</Link>
                ))}
            </div>
            <div className="py-1 lg:py-4 xl:py-1 2xl:ml-40">
                <SearchBar />
            </div>
            <div className="flex py-1.5 gap-8 lg:py-4 xl:py-1.5 lg:gap-3 xl:gap-16">
                {NavBarIcons.map((icon) => (
                    <div>
                        <Link to={icon.to} key={icon.id}>
                            {icon.icon}
                        </Link>
                    </div>
                ))}
            </div>      
        </div>
    </div>
  )
}

export default Navigation

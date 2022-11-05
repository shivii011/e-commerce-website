import React from 'react'
import { TopBrandsData } from '../../utils/TopBrandsData'
import image from '../../assets/applelogo.png'

function TopBrands() {
  return (
    <div>
        <div>
            <div className='flex justify-between p-10 opacity-60'>
            {TopBrandsData.map((data)=>(<div className=' align-middle'><img className="w-[4rem] lg:w-[10rem] md:w-[6rem] sm:w-[4rem] align-middle" src={data.image}/></div>))}
            </div>
        </div>
    </div>
  )
}

export default TopBrands
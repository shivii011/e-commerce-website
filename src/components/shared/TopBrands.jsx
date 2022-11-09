import React from 'react'
import { TopBrandsData } from '../../utils/TopBrandsData'

function TopBrands() {
  return (
    <div>
        <div>
        <div className=' text-center font-semibold font-main text-2xl md:text-5xl text-blue'>Our Top Brands </div>
            <div className='flex justify-between p-[1rem] sm:p-[3rem] md:p-[3rem] lg:p-[3rem] opacity-60'>
            {TopBrandsData.map((data)=>(<div className=''><img className="mr-2 h-[1.5rem] sm:h-[3rem] md:h-[5rem] lg:h-[10rem] max-w-[10rem] " src={data.image} alt=''/></div>))}
            </div>
        </div>
    </div>
  )
}

export default TopBrands
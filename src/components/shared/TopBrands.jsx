import React from 'react'
import { TopBrandsData } from '../../utils/TopBrandsData'

function TopBrands() {
  return (
    <div>
        <div>
        <div className=' text-center font-semibold font-main text-xl'>Our Top Brands </div>
            <div className='flex justify-between p-[3rem] opacity-60'>
            {TopBrandsData.map((data)=>(<div className=''><img className="mr-2 h-[3rem] sm:h-[3rem] md:h-[5rem] lg:h-[10rem] max-w-[10rem] " src={data.image} alt=''/></div>))}
            </div>
        </div>
    </div>
  )
}

export default TopBrands
import React from 'react'
import Button from './shared/Button'
function Newslatter() {
    return (
        <div className=' bg-yellow-300 px-5 py-2 grid grid-cols-8 space-x-20' >
            <div className='col-span-4 grid grid-cols-4'>
                <div className='col-span-2 flex'><i className="text-4xl fa  fa-paper-plane px-5" /><p className=' text-xl'>Sign up to Newslatter</p></div>
                <div className='col-span-2'>...and receive <strong className=' text-lg'>$10 coupon for first shopping</strong></div></div>

            <div className='flex col-span-4'>  <input type="email" id="email" class=" w-3/5 h-10 rounded-r-xl rounded-full text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block " placeholder="john.doe@company.com" required />
                <Button className={'bg-slate-900 px-1 py-0 h-10 rounded-r-2xl rounded-full border-none  text-yellow-400 hover:text-slate-900'} value='Sign Up' />
            </div>
        </div>
    )
}

export default Newslatter



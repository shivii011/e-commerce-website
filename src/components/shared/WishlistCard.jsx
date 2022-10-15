import React from 'react'
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import {WishlistData} from '../../utils/data';
function WishlistCard(className) {
    return (
        <div className=' justify-center block sm:block lg:flex '>
            {
            WishlistData.map((data) => (
                <div className={
                    `hover:shadow-2xl opacity-90 hover:opacity-100 sm:flex md:flex lg:block lg:w-[14rem]  ${className}`
                }>
                    <div className=''><img className='p-2'
                            src={
                                data.image
                            }
                            alt=''/></div>
                    <div className=' text-left p-2 mx-2'>
                        <p className='text-md text-dark-gray font-semibold '>
                            {
                            data.ItemType
                        }</p>
                        <p className='text:lg sm:text-xl md:text-xl  lg:text-xl  text-dark-gray font-semibold'>
                            {
                            data.ItemName
                        }</p>
                        <div className=''>
                            <div>
                                <div className='flex '>
                                    <p className='text-xl text-dark-gray opacity-50'>
                                        <s>{
                                            data.Price
                                        }</s>
                                    </p>
                                    <p className="text-md text-semibold text-green">-10%
                                    </p>
                                </div>
                                <p className='text-2xl text-dark-gray'>
                                    {
                                    data.DiscountedPrice
                                }</p>
                            </div>

                            <div className='flex text-center text-md sm:text-md lg:text-lg'>
                                <div className='flex group'><FavouriteButton className='group-hover text-blue'/><p className=' px-1'>Wishlist</p></div>
                                <div className='flex '>
                                    <BuyButton className=' text-orange'/><p  className=' px-1 '>Cart</p></div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            ))
        } </div>
    )
}

export default WishlistCard

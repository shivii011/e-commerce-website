import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import {Data} from '../../utils/data';
import './Card.css'

const Card = (className) => {
    return (
        <div className="sm:flex sm:flex-wrap">
            {Data.map((data) => (
                <div className={`basis-1/3 hover:shadow-lg flex ${className}`}>
                    <div className='w-2/5'>
                        <img 
                            className='hover:object-center hover:border-solid hover:border-2 group-hover:border-yellow-400'
                            src={data.image}
                            alt=''
                        />
                    </div>
                    <div className=' text-left m-2 pl-2 w-3/5'>
                        <p className='text-md md:text-sm text-dark-gray font-semibold '>
                            {data.ItemType}
                        </p>
                        <p className='lg:text-2xl md:text-xl text-dark-gray font-semibold'>
                            {data.ItemName}
                        </p>
                        <div className=''>
                            <p className='lg:text-2xl md:text-xl text-dark-gray'>
                                {data.Price}
                            </p>
                            <div className='lg:flex md:block'>
                                <div className='flex'>
                                    <FavouriteButton className='mx-2 md:text-xl'/>
                                    <p className='text-gray hover:text-dark-gray md:text-sm sm:text-sm'>
                                        Wishlist
                                    </p>
                                </div>
                                <div className='flex'>
                                    <BuyButton className='mx-2 md:text-xl'/>
                                    <p className=' text-gray hover:text-dark-gray md:text-sm'>
                                        Add To Cart
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))
            }   
        </div>
    )
}

export default Card

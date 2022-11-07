import React from 'react';
import BuyButton from './BuyButton';
import FavouriteButton from './FavouriteButton';
import {Data} from '../../utils/data';
import './Card.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Card = (className) => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        axios.get(`https://dp-backend-e-comm.herokuapp.com/api/products`)
        .then((res) => {
            let { data } = res.data
            let _data = data.slice(0,6)
            setProducts(_data)
        }) 
        //fetchProducts()  
    }, [])
    // const fetchProducts = async () => {
    //     let res = await axios.get(`https://dp-backend-e-comm.herokuapp.com/api/products?limit=6`)
    //     let { data } = res.data
    //     let _data = data.slice(0,6)
    //     setProducts(_data)
    // } 
    console.log(products)
  
    return (
        <div className="sm:flex sm:flex-wrap">
            {products.map((p) => (
                <div className={`basis-1/3 hover:shadow-lg flex ${className}`}>
                    <div className='w-2/5'>
                        <img 
                            className='hover:object-center hover:border-solid hover:border-2 group-hover:border-yellow-400 h-32'
                            src={p.productImages[0].productImageUrl
                            }
                            alt=''
                        />
                    </div>
                    <div className=' text-left m-2 pl-2 w-3/5'>
                        {/* <p className='text-md md:text-sm text-dark-gray font-semibold '>
                            {data.ItemType}
                        </p> */}
                        <p className='lg:text-2xl md:text-xl text-dark-gray font-semibold'>
                            {p.productName}
                        </p>
                        <div className=''>
                            <p className='lg:text-2xl md:text-xl text-dark-gray'>
                                {p.discountedPrice}
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

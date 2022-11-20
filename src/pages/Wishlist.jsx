import React from 'react'
import {useState, useEffect} from 'react'
import WishlistCard from '../components/shared/WishlistCard'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Wishlist = () => {
    const [products, setProducts] = useState([])
    const getProductId = async () => {
        const token = localStorage.getItem("accessToken")
        console.log(token, "token")
        const res = await axios.get("https://dp-backend-e-comm.herokuapp.com/api/user/wishlist?", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            }
          })
          console.log({wishlistResponse:res}) 
        }
        useEffect(() => {
          console.log("Wishlist")
          getProductId()
        
    }, [])

    return (
        <div className=' font-main '>
            <div className='flex justify-center p-2 opacity-80'>
                <p className='text-3xl text-center'>Wishlist:
                </p>
                <p className='text-3xl align-bottom text-green pl-2'>2 items</p>
            </div>
            <hr className=' opacity-40'/>
            <div className='flex justify-center p-3'>
                {/* <WishlistCard product={products}/> */} </div>
        </div>
    )
}

export default Wishlist

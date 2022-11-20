import React from "react";
import BuyButton from "./BuyButton";
import FavouriteButton from "./FavouriteButton";
import {Link} from 'react-router-dom'
import {useState} from "react";
import {useEffect} from "react";
import axios from "axios";


const Card = ({className, products}) => {
    console.log(products)
    // const [productId, setProductId] = useState()
    const handleOnSubmit = async (pid) => {
        const token = localStorage.getItem("accessToken")
        console.log(token, "token")
        const res = await
        fetch("https://dp-backend-e-comm.herokuapp.com/api/user/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(
                {productId: pid}
            )
        })
        const response = await res.json()
        console.log(response)
        // let id = localStorage.getItem(productId)
        // console.log(productId)
        // setProductId({"productId": id})

    }
    return (
        <div className="my-4 rounded-xl font-main px-12 gap-8 flex flex-wrap justify-center cursor-pointer">
            {
            products.map((product) => (
                <div className={
                    ` transition-shadow bg-gray hover:transform duration-75 hover:scale-105 w-80 shadow-md hover:shadow-xl xl:basis-1/4 relative h-[55vh] ${className}`
                }>

                    <div className="flex justify-end">
                        {" "}
                        <FavouriteButton className="p-2 rounded-full w-10 h-10 mt-4 text-blue border mr-4"
                            onClick={
                                (e) => {
                                    handleOnSubmit(product.productId)
                                    localStorage.setItem("productId", product.productId)
                                    console.log(product.productId)
                                }
                            }/>
                    </div>
                <Link to={
                    `/ProductPage/${
                        product.productId
                    }`
                }>
                    <div className="border-1 p-6">
                        <img className="rounded-lg h-40 mx-auto"
                            src={
                                product.productImages[0].productImageUrl
                            }
                            alt=""/>
                    </div>
                    <div className="pl-3 pb-2">
                        {/* <p className='text-md text-zinc-500'>{product.productName}</p> */}
                        <p className="text-xl font-semibold py-1">
                            {
                            product.productName
                        }</p>
                        <div className="flex ">
                            <p className=" px-1 text-lg">
                                {
                                product.discountedPrice
                            }</p>
                            <p className=" px-1 text-sm text-zinc-500 ">
                                <s>{
                                    product.originalPrice
                                }</s>
                            </p>
                            {/* <p className=' px-1  text-xs text-green'>{data.DiscountPercentage}</p> */} </div>
                        <div className="flex absolute  px-1 bottom-4">
                            {/* <div className='bg-green rounded-lg flex p-1 cursor-pointer'><p className='text-white'>{data.rating}</p><i className="fa fa-star text-white text-xs pt-1"/> </div> */}
                            <div className="bg-orange rounded-lg flex pt-1.5 pb-2 px-3 cursor-pointer text-base">
                                <p className="text-white">Add to cart</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            ))
        } </div>
    );
};

export default Card;
// <BuyButton className='mx-2 text-white' />

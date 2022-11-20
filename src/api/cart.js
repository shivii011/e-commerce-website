import axios from "axios"

// onclick of cart icon 
export const Addtocart = async(e)=>{
    const res =await fetch("https://dp-backend-e-comm.herokuapp.com/api/products")
    const response = await res.json();
    const productID = response.data.splice(0,1)
    console.log(productID)
}
export const getId = (e)=>{
    console.log(e.targete.value)
    }
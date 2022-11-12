import axios from 'axios';
import {useState,useEffect} from 'react';


export const saveToLocalStorage = ()=>{
const use= ()=>{
 axios
 .get("https://dp-backend-e-comm.herokuapp.com/api/auth/login")
 .then((response)=>{
    console.log(response.data)
   let {token} = response.data.message
 console.log(token)
 localStorage.setItem('itemName', token);

},)};
 
}
export const saveLocalToken=((token)=>{
    let todos ;
    if (localStorage.getItem("token")===null){
        token=[];

    }else {
        todos =JSON.parse(localStorage.getItem("token"));
    }
    todos.push(token);
    localStorage.setItem(JSON.stringify(token));
})
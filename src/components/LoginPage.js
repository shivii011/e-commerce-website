import React, { useEffect, useState} from 'react'
import Button from './shared/Button'

import {FaCheck} from 'react-icons/fa';
import { render } from '@testing-library/react';
import { data } from 'autoprefixer';
import { ArrayLogin, ArrayRagister, benefits } from '../utils/LoginData';
import RegesterPage from './RegesterPage';
import { saveToLocalStorage } from './Savetolocal';

const LoginPage = () => {

    const [data, setData] = useState({
        email:"",
        password:""
    });
 
    const handleOnChange = (e) =>{
       setData({...data, [e.target.name]:e.target.value});
    }

    const submitData = async() =>{
        const {email, password} = data;
        const userdata = await fetch("https://dp-backend-e-comm.herokuapp.com/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                userEmail:email, password:password
            })
        });

        const res = await userdata.json();
        console.log(res);
    }

    return (
        <div className='m-8 lg:flex sm:block my-10 font-main'>
            <div className='font-semibold text-left lg:w-1/2 md:w-6/7 sm:w-w'>
                <h2 className='text-4xl font-normal text-blue w-5/6 p-2'>Login</h2>
                <hr className='my-4 w-5/6'/>
                <p className='my-4 font-normal text-green'>Welcome back! Sign in to your account
                </p>
               
                    <form className='my-[1rem]'>
                       <div> <label className="">Username</label><br/>
                        <input className='max-w-[40rem] border-2 rounded-xl w-5/6 h-10 text-lg px-2 my-2' name='email' type="text" value={data.email} onChange={handleOnChange}/></div>
                        <div> <label className="">Password</label><br/>
                        <input className='max-w-[40rem] border-2 rounded-xl w-5/6 h-10 text-lg px-2 my-2' name='password' type="text" value={data.password} onChange={handleOnChange}/></div>
                    </form>
                
         
                <form className='my-[1rem]'><input type='checkbox' />
                    <label>Remember me</label>
                </form>
                <Button value="Log in" onClick={((e)=>{e.preventDefault();submitData();saveToLocalStorage()})} className='rounded bg-orange text-white hover:bg-blue py-2 px-4 text-lg mb-2'/>
                <p className='font-normal text-red-500'>Lost your Password?</p>

            </div>
         <RegesterPage/>
        </div>
    )

    // return(
    //     <>
    //     <form>
    //      <input type="text" name="email" className=' width-[5rem] border border-black m-2' value={data.email} onChange={handleOnChange}/>
    //      <input type="text" name="password" className='width-[5rem] border border-black m-2' value={data.password} onChange={handleOnChange}/>
    //      <button onClick={(e)=>{ e.preventDefault(); submitData()}}>login</button>
    //      </form>
    //     </>
    // )

}

export default LoginPage
// sm:w-1 md:w-1 lg:w-1/2
// sm:w-1 md:w-1 lg:w-1/2
// AiOutlineCheck
// BsCheckLg

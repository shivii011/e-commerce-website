import React,{useState} from 'react'
import Button from './shared/Button'
import {FaCheck} from 'react-icons/fa';
import { render } from '@testing-library/react';
import { data } from 'autoprefixer';
import { ArrayLogin, ArrayRagister, benefits } from '../utils/LoginData';

const RegesterPage=()=> {
    const [data, setData] = useState({
        email:"",
        password:"",
        role:""
    });

    const handleOnChange = (e) =>{
       setData({...data, [e.target.name]:e.target.value , "role":"user"});
    }

    const submitData = async() =>{
        const {userEmail, password} = data;
        const userdata = await fetch("https://dp-backend-e-comm.herokuapp.com/api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                userEmail:userEmail, password:password,"role":"user"
            })
        });
        const res = await userdata.json();
        console.log(res);
    }
  return (
 <div className='text-left float-right font-semibold lg:w-1/2  lg:max-w-[48rem] md:w-6/7 sm:w-w '>
                <h2 className='text-4xl font-normal p-2'>Register</h2>
                <hr className='my-4 max-w-[48rem]'/>
                <p className='my-[1rem] font-normal text-green'>
                    Create new account today to reap the benefits of personalized shopping experience.</p>
            
              
                    <form className='my-[1rem]'>
                       <div> <label className="my-10">E mail</label><br/>
                        <input name='userEmail' type="text" value={data.userEmail} onChange={handleOnChange} className='max-w-[40rem] border-2 rounded-xl w-5/6 h-10 text-lg px-2 my-2'/></div>
                        <div>
                        <label className="my-10">Password</label><br/>
                        <input name='password' type="text" value={data.password} onChange={handleOnChange} className='max-w-[40rem] border-2 rounded-xl w-5/6 h-10 text-lg px-2 my-2'/>
                        </div>
                    </form>
                <p className='my-[1rem] font-normal w-6/7'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                <Button value="Register" onClick={((e)=>{e.preventDefault();submitData()})}  className="rounded text-white bg-orange hover:bg-blue py-2 px-4 text-lg"/>

                <div className='p-2 my-4'>
                    {benefits.map((data) => (
                        <div key={data.id} className='flex'>
                            <FaCheck className='text-green '/><p className='pl-3'>{data.text}</p>
                        </div>
                    ))}
                    
                </div>
            </div> 
  )
}

export default RegesterPage
import React, {useState} from 'react'
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import RegesterPage from '../components/RegesterPage';
import Button from '../components/shared/Button';
import { Addtocart } from '../api/cart';
const LoginPage = () => {
    const [userEmail, setUserEmail] = useState()
    const [password, setPassword] = useState()
   const navigate = useNavigate()
    const handleOnSubmit = async (e) => {
        // e.preventDefault()
        const res = await fetch("https://dp-backend-e-comm.herokuapp.com/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                userEmail,password
            })
        })
       
        const response =await res.json();
        const token =  response.data.accessToken
        const message =  response.message
        console.log( token,message)
        console.log(message)
        console.log("")
        localStorage.setItem("accessToken", token)
        navigate("/")
    }

    return (
        <div className='m-8 lg:flex sm:block my-10 font-main' >
            <div className='font-semibold text-left lg:w-1/2 md:w-6/7 sm:w-w'>
                <h2 className='text-4xl font-normal text-blue w-5/6 p-2'>Login</h2>
                <hr className='my-4 w-5/6'/>
                <p className='my-4 font-normal text-green'>Welcome back! Sign in to your account
                </p>

                <form className='my-[1rem]'onSubmit={handleOnSubmit} >
                    <div>
                        <label className="">Username</label><br/>
                        <input className='max-w-[40rem] border-2 rounded-xl w-5/6 h-10 text-lg px-2 my-2' name='email' type="text"
                            value={userEmail}
                            onChange={e=>setUserEmail(e.target.value)}/></div>
                    <div>
                        <label className="">Password</label><br/>
                        <input className='max-w-[40rem] border-2 rounded-xl w-5/6 h-10 text-lg px-2 my-2' name='password' type="text"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}/></div>
                </form>
                <form className='my-[1rem]'><input type='checkbox'/>
                    <label>Remember me</label>
                </form>
                <Button value="Log in"
                   onClick={((e)=>{ handleOnSubmit();Addtocart();})}
    
                    className='rounded bg-orange text-white hover:bg-blue py-2 px-4 text-lg mb-2'/>  
                <p className='font-normal text-red-500'>Lost your Password?</p>

            </div>
            <RegesterPage/>
        </div>
    )
}

export default LoginPage

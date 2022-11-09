import React from 'react'
import Button from './shared/Button'

import {FaCheck} from 'react-icons/fa';
import { ArrayLogin, ArrayRagister, benefits } from '../utils/LoginData';
const LoginPage = () => {
    return (
        <div className='m-8 lg:flex sm:block my-10 font-main'>
            <div className='font-semibold text-left lg:w-1/2 md:w-6/7 sm:w-w'>
                <h2 className='text-4xl font-normal text-blue w-5/6 p-2'>Login</h2>
                <hr className='my-4 w-5/6'/>
                <p className='my-4 font-normal text-green'>Welcome back! Sign in to your account
                </p>
                {
                ArrayLogin.map((data) => (
                    <form className='my-[1rem]'>
                        <label className="">{data.label}</label><br/>
                        <input className='max-w-[40rem] border-2 rounded-xl w-5/6 h-10 text-lg px-2 my-2' type={data.type}/>
                    </form>
                ))
            }
                <form className='my-[1rem]'><input type='checkbox' />
                    <label>Remember me</label>
                </form>
                <Button value="Log in" className='rounded bg-orange text-white hover:bg-blue py-2 px-4 text-lg mb-2'/>
                <p className='font-normal text-red-500'>Lost your Password?</p>

            </div>
            <div className='text-left float-right font-semibold lg:w-1/2  lg:max-w-[48rem] md:w-6/7 sm:w-w '>
                <h2 className='text-4xl font-normal p-2'>Register</h2>
                <hr className='my-4 max-w-[48rem]'/>
                <p className='my-[1rem] font-normal text-green'>
                    Create new account today to reap the benefits of personalized shopping experience.</p>
                {
                ArrayRagister.map((data) => (
                    <form className='my-[1rem]'>
                        <label className="my-10">
                            {
                            data.label
                        }</label><br/>
                        <input className='max-w-[40rem] border-2 rounded-xl w-5/6 h-10 text-lg px-2 my-2'
                            type={
                                data.type
                            }/>
                    </form>
                ))
            }
                <p className='my-[1rem] font-normal w-6/7'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                <Button value="Register" className="rounded text-white bg-orange hover:bg-blue py-2 px-4 text-lg"/>

                <div className='p-2 my-4'>
                    {benefits.map((data) => (
                        <div key={data.id} className='flex'>
                            <FaCheck className='text-green '/><p className='pl-3'>{data.text}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}

export default LoginPage
// sm:w-1 md:w-1 lg:w-1/2
// sm:w-1 md:w-1 lg:w-1/2
// AiOutlineCheck
// BsCheckLg

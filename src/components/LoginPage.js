import React from 'react'
import Button from './shared/Button'
import "@fontsource/roboto";
const ArrayLogin = [
    {
        "label": "Username or email address*",
        "type": "text"
    }, {
        "label": "Password*",
        "type": "text"
    }

]
const ArreyRagister = [
    {
        "label": "Username *",
        "type": "text"
    }, {
        "label": "Email address *",
        "type": "text"
    }, {
        "label": "Password *",
        "type": "text"
    },
]
const LoginPage = () => {
    return (
        <div className='m-5 lg:flex sm:block my-10 text-dark-grey '>
            <div className='font-semibold text-left lg:w-1/2 md:w-6/7 sm:w-w'>
                <h2 className='text-4xl font-normal'>Login</h2>
                <hr className='text-gray my-4 w-5/6'/>
                <p className='my-4 font-normal'>Welcome back! Sign in to your account
                </p>
                {
                ArrayLogin.map((data) => (
                    <form className='my-[1rem]'>
                        <label className="">
                            {
                            data.label
                        }</label><br/>
                        <input className=' border-2 border-gray rounded-xl w-5/6 h-10  text-lg px-2'
                            type={
                                data.type
                            }/>
                    </form>
                ))
            }
                <form className='my-[1rem]'><input type='checkbox'/>
                    <label>Remember me</label>
                </form>
                <Button value="Log in" className=' border-2 rounded  hover:border-2 hover:text-white hover:bg-black py-2 px-4 text-lg'/>
                <p className=' font-normal'>Lost your Password?</p>

            </div>
            <div className='text-left float-right font-semibold lg:w-1/2  lg:max-w-[40rem] md:w-6/7 sm:w-w '>
                <h2 className='text-4xl font-normal'>Register</h2>
                <hr className='text-gray my-4 max-w-[40rem]'/>
                <p className='my-[1rem] font-normal'>
                    Create new account today to reap the benefits of personalized shopping experience.</p>
                {
                ArreyRagister.map((data) => (
                    <form className='my-[1rem]'>
                        <label className="my-10">
                            {
                            data.label
                        }</label><br/>
                        <input className=' border-2 border-gray rounded-xl w-5/6 h-10 text-lg px-2' 
                            type={
                                data.type
                            }/>
                    </form>
                ))
            }
                <p className='my-[1rem] font-normal w-6/7'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                <Button value="Register" className=' border-2 rounded  hover:border-2 hover:text-white hover:bg-black py-2 px-4 text-lg'/>

            </div>
        </div>
    )
}

export default LoginPage
//  sm:w-1 md:w-1 lg:w-1/2
// sm:w-1 md:w-1 lg:w-1/2
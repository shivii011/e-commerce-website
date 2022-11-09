import { useState } from 'react'
// Importing Data from utils folder
import { ContactIcons, FormFields } from "../utils/ContactData"
import Button from "../components/shared/Button"
import img from '../assets/contact.png'


const Contact = () => {
    const fieldStyle = "my-8 px-2 py-1 bg-transparent border-blue border-b-2 sm:w-5/12 text-blue focus:border-orange focus:border-2 font:main font-medium lg:w-64"
    const btnStyle = "bg-orange border-none text-white font-bold rounded-2xl my-6 px-8 py-2 hover:bg-blue"

    // Initialing state variable with key names and empty value in order to update them on change
    const [details, setDetails] = useState({})

    // valueHandler function to update the value of text field when user enters the data
    const valueHandler = (e) => {
        setDetails(
            {
                ...details, [e.target.name]: e.target.value
            }
        )
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(details)
    }
    
    return (
        <div>
            <div className="text-center bg-gradient-to-r from-green to-blue h-48 pt-12 sm:pt-8">
                <div className="absolute inset-x-0 text-white font-bold tracking-wider opacity-60 text-6xl md:text-9xl sm:text-7xl">CONTACT</div>
                <div className="relative inset-y-4 text-2xl text-blue font-extrabold md:text-5xl md:inset-y-10 sm:text-3xl sm:inset-y-6 ">GET IN TOUCH</div>
            </div>

            <div className="my-16 mx-8 text-center">
                <div>
                    <div className="lg:flex flex-row-reverse lg:justify-between">
                        <img src={img} alt="" className="lg:w-1/2 md:w-2/3" />
                        <div className="lg:text-left lg:bg-gradient-to-r from-cyan-500 to-white lg:px-8 lg:w-96" >
                            <form className="mt-20" onSubmit={onSubmit}>
                                {/* Mapping Form Fields */}
                                {/* Bug */}
                                {FormFields.map((fields) => (
                                    <div key={fields.id} className="" >
                                        {/* <label className="hidden lg:block font-main text-blue text-lg w-1 ml-96">{fields.label}</label> */}
                                        <input type={fields.type} name={fields.name} value={details.values} placeholder={fields.placeholder} className={fieldStyle} onChange={valueHandler}/>  
                                    </div>
                                ))}
                                <Button value="Submit" className={btnStyle} />
                            </form>
                        </div>
                    </div>  
                    <div className="mt-8">
                        <div className="my-12">
                            <div className="text-2xl text-blue font-mainBold font-bold lg:my-12 md:text-2xl lg:text-4xl">
                                        FOR QUERIES
                            </div>
                            <p className="text-lg text-blue font-main my-4 mx-auto lg:text-2xl md:w-[400px]">
                                Want to get in touch? We would love to hear from you. Drop an email or directly talk to a member of our sales team.
                            </p>
                        </div>
                                
                        <div>
                            { ContactIcons.map((data) => (
                                <div className="text-blue font-main my-12" key={data.id}>
                                    <div className="my-4">{data.icon}</div>
                                    <div className="my-2">{data.title}</div>
                                    <div>{data.content}</div>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Contact

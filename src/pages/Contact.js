import { useState } from 'react'
// Importing Data from utils folder
import { ContactIcons, FormFields } from "../utils/ContactData"
import Button from "../components/shared/Button"


const Contact = () => {
    const fieldStyle = "my-4 px-2 py-1 bg-transparent border-2 text-white block mx-auto w-9/12"
    const btnStyle = "border-none bg-gold-web-golden text-dark-charcoal font-bold rounded-2xl my-4 px-[16px] py-[2px] hover:text-gold-web-golden hover:bg-dark-charcoal"

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
        <div className="bg-black h-screen">
            <div className="text-center">
                <div className="absolute inset-x-0 text-white font-bold tracking-wider opacity-30 gf:text-5xl xs:text-6xl md:text-9xl md:tracking-normal">CONTACT</div>
                <div className="relative inset-y-4 text-2xl text-gold-web-golden font-bold gf:inset-y-3 gf:text-xl xs:inset-y-4 xs:text-2xl md:inset-y-12 md:text-5xl">GET IN TOUCH</div>
            </div>

            <div className="lg:flex lg:gap-12 md:my-24 px-2 md:px-12">
                <div className="my-12 text-center lg:flex-col lg:w-2/5">
                    <div className="lg:text-left">
                        <div className="text-lg text-white font-bold md:text-2xl">
                            FOR QUERIES
                        </div>
                        <p className="text-white my-4">
                            Want to get in touch? We would love to hear from you. Drop an email or directly talk to a member of our sales team.
                        </p>
                    </div>
                    <div className="lg:gap-4 lg:justify-evenly lg:flex-col lg:float-left md:flex md:justify-evenly">
                        { ContactIcons.map((data) => (
                            <div className="text-white font-extralight mb-4" key={data.id}>
                                <div>{data.icon}</div>
                                <div>{data.title}</div>
                                <div>{data.content}</div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <form className="mt-8 text-center w-full" onSubmit={onSubmit}>
                    {/* Mapping Form Fields */}
                    {/* Bug */}
                    {FormFields.map((fields) => (
                        <input key={fields.id} type={fields.type} name={fields.name} value={details.values} placeholder={fields.placeholder} className={fieldStyle} onChange={valueHandler}/>  
                    ))}
                    <Button value="Submit" className={btnStyle} />
                </form>
            </div>
 
        </div>
    )
}

export default Contact

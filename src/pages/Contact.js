import { useState } from 'react'
// Importing Data from utils folder
import { ContactIcons, FormFields } from "../utils/ContactData"
import Button from "../components/shared/Button"


const Contact = () => {

    const fieldStyle = "w-96 my-4 px-2 py-1 bg-transparent border-2 text-white"
    const btnStyle = "border-none bg-gold-web-golden text-dark-charcoal font-bold rounded-2xl my-4 px-[16px] py-[2px] hover:text-gold-web-golden hover:bg-dark-charcoal"

    // Initialing state variable with key names and empty value in order to update them on change
    const [details, setDetails] = useState({
        'name': '',
        'email': '',
        'message': '',
    })

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
            <div className="text-center pb-8">
                <div className="text-white opacity-30 text-9xl font-bold absolute -z-1 inset-x-52">CONTACT</div>
                <div className="text-gold-web-golden text-5xl font-bold relative z-1 inset-y-12">GET IN TOUCH</div>
            </div>

            <div className="flex m-12 mb-0 gap-16 justify-around">
                <div className="w-full">
                    <div className="text-white text-2xl font-semibold my-4">FOR QUERIES</div>
                    <div className="text-white font-extralight my-4">Want to get in touch? We would love to hear from you. Drop an email or directly talk to a member of our sales team.</div>

                    {/* Mapping Contact Details */}
                    { ContactIcons.map((data) => (
                        <div className="text-white font-extralight mb-4" key={data.id}>
                            <div>{data.icon}</div>
                            <div>{data.title}</div>
                            <div>{data.content}</div>
                        </div>
                        ))
                    }
                </div>
                <form className="my-8 w-full" onSubmit={onSubmit}>
                    {/* Mapping Form Fields */}
                    {/* Bug */}
                    {FormFields.map((fields) => (
                        <input key={fields.id} type={fields.type} name={fields.name} value={fields.value} placeholder={fields.placeholder} className={fieldStyle} onChange={valueHandler}/>
                    ))}
                    <Button value="Submit" className={btnStyle} />
                </form>
                
            </div>
            
        </div>
    )
}

export default Contact

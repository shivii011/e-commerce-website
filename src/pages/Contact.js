// Importing Data from utils folder
import { ContactData } from "../utils/ContactData"
import { FormFields } from "../utils/FormFields"
import { useState } from 'react'
import Button from "../components/shared/Button"

const Contact = () => {

    const fieldStyle = "w-96 my-4 px-2 py-1 bg-transparent border-2"
    const [text, setText] = useState('')
    
  return (
    <div className="bg-black">
        <div className="text-center">
            <div className="text-white opacity-30 text-9xl font-bold relative -z-1">CONTACT</div>
            <div className="text-gold-web-golden text-5xl font-bold absolute z-1 inset-12">GET IN TOUCH</div>
        </div>

        <div className="flex m-12 mb-0 gap-16 justify-around">
            <div className="w-full">
                <div className="text-white text-2xl font-semibold my-4">FOR QUERIES</div>
                <div className="text-white font-extralight my-4">Want to get in touch? We would love to hear from you. Drop an email or directly talk to a member of our sales team.</div>

                {/* Mapping Contact Details */}
                { ContactData.map((data) => (
                    <div className="text-white font-extralight mb-4" key={data.id}>
                        <div>{data.icon}</div>
                        <div>{data.title}</div>
                        <div>{data.content}</div>
                    </div>
                    ))
                }
            </div>
            <form className="my-8 w-full">
                {/* Mapping Form Fields */}
                {/* Bug */}
                
                <Button value="Submit" className="border-none bg-gold-web-golden text-dark-charcoal font-bold rounded-2xl my-4 px-[16px] py-[2px] hover:text-gold-web-golden hover:bg-[#2f2f2f]"/>
            </form>
            
        </div>
        {FormFields.map((fields) => (
                    <input type={fields.type} placeholder={fields.placeholder} className={fieldStyle} value={text} onChange={(e) => setText(e.target.value)}/>
                ))}
    </div>
  )
}

export default Contact

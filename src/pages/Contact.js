// Importing Data from utils folder
import { ContactData } from "../utils/ContactData"
import { FormFields } from "../utils/FormFields"
import { useState } from 'react'

const Contact = () => {

    const fieldStyle = "w-96 my-4 px-2 py-1 bg-transparent border-2"
    const [text, setText] = useState('')
    
  return (
    <div className="bg-black">
        <div className="text-center">
            <div className="text-white opacity-30 text-9xl font-bold relative -z-1">CONTACT</div>
            <div className="text-gold-web-golden text-5xl font-bold absolute z-1 inset-12">GET IN TOUCH</div>
        </div>
        <div className="flex m-8 mb-0 gap-16">
            <div>
                <div className="text-white text-2xl font-semibold my-4">FOR QUERIES</div>
                <div className="text-white font-extralight my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit sit fuga necessitatibus numquam magni nostrum quae culpa veniam quo. Eos similique consequatur id iusto eligendi tenetur consectetur reprehenderit voluptates!</div>
                { ContactData.map((data) => (
                    <div className="text-white font-extralight mb-4" key={data.id}>
                        <div>{data.icon}</div>
                        <div>{data.title}</div>
                        <div>{data.content}</div>
                    </div>
                    ))
                }
            </div>
            <div className="m-8">
                {FormFields.map((fields) => (
                    <input type={fields.type} placeholder={fields.placeholder} className={fieldStyle} value={text} onChange={(e) => {setText(e.target.value)}}/>
                ))}
            </div>
            
        </div>
    </div>
  )
}

export default Contact

import { FaEnvelope } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"

// Assigning icon style
const faIconsStyle = "text-gold-web-golden w-12 h-12"

export const ContactIcons = [
    {
        'id': 201,
        'icon': <FaEnvelope className={faIconsStyle} />,
        'title': 'Mail at',
        'content': 'info@mail.com',
    },
    {
        'id': 202,
        'icon': <FaPhoneAlt className={faIconsStyle} />,
        'title': 'Call at',
        'content': '+91 1234567890',
    },
]

    

export const FormFields = [
    {
        'id': 301,
        'type': 'input',
        'name': 'name',
        //'value': details.name,
        'placeholder': 'Enter your name',
    },
    {
        'id': 302,
        'type': 'input',
        'name': 'email',
        //'value': details.email,
        'placeholder': 'Enter your email',
    },
    {
        'id': 303,
        'type': 'textarea',
        'name': 'message',
        //'value': details.message,
        'placeholder': 'Enter your message',
    },
]


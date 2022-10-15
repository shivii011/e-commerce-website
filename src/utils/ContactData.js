import { FaEnvelope } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"

// Assigning icon style
const faIconsStyle = "mx-auto w-12 h-12 lg:mx-0"

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
        'label': 'Name',
        //'value': details.name,
        'placeholder': 'Enter your name',
    },
    {
        'id': 302,
        'type': 'input',
        'name': 'email',
        'label': 'Email',
        //'value': details.email,
        'placeholder': 'Enter your email',
    },
    {
        'id': 303,
        'type': 'textarea',
        'name': 'message',
        'label': 'Message',
        //'value': details.message,
        'placeholder': 'Enter your message',
    },
]


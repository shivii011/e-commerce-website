import { FaEnvelope } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"

// Assigning icon style
const faIconsStyle = "text-gold-web-golden w-12 h-12"

export const ContactData = [
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
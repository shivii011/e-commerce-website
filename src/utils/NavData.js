import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa'

const iconStyle = "cursor-pointer hover:text-orange h-6 w-6"

export const SideBarData = [
    {
        'id': 1,
        'link': 'Home',
    },
    {
        'id': 2,
        'link': 'Shop',
    },
    {
        'id': 3,
        'link': 'About Us',
    },
    {
        'id': 4,
        'link': 'Contact Us',
    },
    {
        'id': 5,
        'link': 'Profile',
    },
    {
        'id': 6,
        'link': 'Wishlist',
    },
    {
        'id': 7,
        'link': 'Cart',
    },
    {
        'id': 8,
        'link': 'Login / SignUp',
    },
]

export const NavBarLinks = [
    {
        'id': 1,
        'link': 'Home',
    },
    {
        'id': 2,
        'link': 'Shop',
    },
    {
        'id': 3,
        'link': 'About Us',
    },
    {
        'id': 4,
        'link': 'Contact Us',
    },
]

export const NavBarIcons = [
    {
        'id': 1,
        'icon': <FaUser className={iconStyle} />,
    },
    {
        'id': 2,
        'icon': <FaShoppingCart className={iconStyle} />,
    },
    {
        'id': 3,
        'icon': <FaHeart className={iconStyle} />,
    },
]
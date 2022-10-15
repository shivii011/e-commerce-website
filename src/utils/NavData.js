import { FaUser, FaShoppingCart, FaHeart } from 'react-icons/fa'

const iconStyle = "cursor-pointer hover:text-orange h-6 w-6"

export const SideBarData = [
    {
        'id': 1,
        'link': 'Home',
        'to': '/',
    },
    {
        'id': 2,
        'link': 'Shop',
    },
    {
        'id': 3,
        'link': 'About Us',
        'to': '/AboutUs',
    },
    {
        'id': 4,
        'link': 'Contact Us',
        'to': '/Contact'
    },
    {
        'id': 5,
        'link': 'Profile',
    },
    {
        'id': 6,
        'link': 'Wishlist',
        'to': '/Wishlist',
    },
    {
        'id': 7,
        'link': 'Cart',
        'to': '/PaymentPage',
    },
    {
        'id': 8,
        'link': 'Login / SignUp',
        'to': '/LoginPage',
    },
]

export const NavBarLinks = [
    {
        'id': 1,
        'link': 'Home',
        'to': '/',
    },
    {
        'id': 2,
        'link': 'Shop',
    },
    {
        'id': 3,
        'link': 'About Us',
        'to': '/AboutUs',
    },
    {
        'id': 4,
        'link': 'Contact Us',
        'to': '/Contact',
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
        'to': '/PaymentPage',
    },
    {
        'id': 3,
        'icon': <FaHeart className={iconStyle} />,
        'to': '/WishList',
    },
]
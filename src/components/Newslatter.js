import Button from './shared/Button'
import { FaPaperPlane } from 'react-icons/fa'
function Newslatter() {
    return (
        <div className=' bg-gradient-to-r from-green to-blue sm:flex sm:flex-row flex-col px-8 py-4 mx-auto justify-center text-white font-main' >
            <div className='flex-col px-8 text-center'>
                <div className='flex lg:gap-8 pb-2 text-center'>
                    <p className=' text-xl'>Sign up to Newsletter</p>
                    < FaPaperPlane className="w-8 h-8"/>
                </div>
                <div className=''>...and receive 
                    <strong className=' text-lg'>
                        $10 coupon for first shopping
                    </strong>
                </div>
            </div>

            <div className='flex py-4 justify-center'>  
                <input type="email" id="email" class="h-10 rounded-r-xl rounded-full text-blue outline-none text-sm px-2 focus:ring-blue-500 focus:border-blue-500 block lg:w-80" placeholder="example@mail.com" required />
                <Button className={'bg-orange text-main px-2 py-0 h-10 rounded-l-2xl md:w-32 rounded-full border-none  text-white hover:bg-blue'} value='Sign Up' />
            </div>
        </div>
    )
}

export default Newslatter



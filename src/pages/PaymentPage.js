import React from 'react'
import Button from '../components/shared/Button'
import img from '../assets/pavalion.png'
function PaymentPage() {
    return (
        <div className='payment p-5 font-main'>
            <div className='grid sm-grid md:flex lg-flex m-2 lg:px-[10rem]'>
                <div className='flex'>
                    <p className='lg:text-2xl md:text-xl sm:text-lg font-semibold'>Address :
                    </p>
                    <input className='border-2 border-black h-8 rounded w-[17rem] my-1' type='text' placeholder='Enter your address here'/>
                </div>
                <Button value="Pincode" className="bg-orange text-white border-2 rounded hover:border-2  hover:bg-blue py-1 px-4 ml-5 lg:text-lg sm:text:sm"/>
            </div>
            <div className=' lg:grid lg:grid-cols-5  '>
                <div className='left col-span-3 lg:grid lg:grid-cols-6 text-left '>
                    <div className='flex col-span-5'>
                        <img className='w-1/3 m-1'
                            src={img}/>
                        <div className='w-2/3'>
                            <p className='lg:text-2xl md:text-xl sm:text-lg font-semibold'>HP Pavilion Ryzen 5 Hexa Core  AMD ..</p>
                            <p className='lg:text-lg md:text-md sm:text-sm'>15.6 inch, Shadow Black, 1.98 kg</p>
                            <p className='lg:text-lg md:text-md sm:text-sm'>Seller: IndiFlashMart</p>
                            <div className='flex lg:text-2xl md:text-xl sm:text-lg'>
                             
                              <p className=' text-3xl'>  ₹56,990</p>
                              <s className='px-2'>
                                    ₹63,539</s>
                                <p className=' text-green lg:text-lg sm:text-xs '>10% Off</p>
                            </div>
                            <div className='flex'>
                                <input type='number' min='0' placeholder='1' className='w-[3rem] text-black border-2 p-1 border-black rounded font-lg'/>
                                <div className='flex text-gray-600 ml-[8rem]'>
                                    <i class="fa fa-heart text-blue mx-2 text-4xl"/>
                                    <i className="fa-sharp fa fa-trash text-orange text-4xl"/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='right col-span-2 px-4 border-2 border-black sm:text-sm md:text-lg lg:text-xl '>
                    <p className='font-semibold sm:text-lg md:text-xl lg:text-2xl'>PRICE DETAILS</p>
                    <hr/>
                    <div className='flex justify-between pt-2'>
                        <p>Price (1 item)</p>
                        <p>
                            ₹63,539</p>
                    </div>
                    <div className='flex justify-between pt-2'>
                        <p>Discounted Price</p>
                        <p className='text-green'>-₹6,549</p>
                    </div>
                    <div className='flex justify-between py-2'>
                        <p>Delivery Charges</p>
                        <p className='text-green'>FREE</p>
                    </div>
                    <hr/>
                    <div className='flex justify-between pt-2 font-semibold sm:text-lg md:text-xl lg:text-2xl'>
                        <p>Total Amount</p>
                        <p>₹56,990</p>
                    </div>
                    <div className='text-center'>
                        <Button value="Place Order" className="bg-orange text-white border-2 rounded hover:border-2  hover:bg-blue py-2 px-4 text-lg "/></div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage

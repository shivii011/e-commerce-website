import React from 'react'
import {FooterSectionDataIcons2} from '../../utils/FooterSectionData'
function Footer2( {className }) {
  return (
    <div className={`text-center font-main justify-center lg:invisible ${className}`}>
         <div className='flex px-10  justify-center'>
                        {
                        FooterSectionDataIcons2.map((data) => (
                            <div className='px-2 py-5 text-3xl'>
                                <a href='#'
                                    className={
                                        `${
                                            data.icon
                                        } text-gray-600`
                                    }/>
                            </div>
                        ))
                    } </div>
           <div className='text-center text-white bg-blue flex p-2 py-6 justify-center'>
                   <div className='text-4xl text-center'>
                        LOGO</div>

                    <div>
                        <div><i className='fa fa-headphones text-4xl align-text-bottom text-white'/></div>
                        <div className='-ml-20 my-4'>
                            <p>Got Questions ? call us 24/7!</p>
                            <p className='text-xl'>888224546 ,(588446546)</p>
                        </div>
                        <div className='-ml-20'>
                        <p className='text-2xl'>Contact Info</p>
                        <p>27 MG Road Indore M.P. India</p>
                    </div>
                    </div>
                  
            </div>   
            <div className='reserved text-white bg-gradient-to-r from-green to-blue p-2 '>
                <div className='text-center'>
                    <i className="fa fa-copyright"></i>
                    <strong>Name</strong>-All Rights Reserved</div>
            </div>      
    </div>
  )
}

export default Footer2
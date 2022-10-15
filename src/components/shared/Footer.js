import React from 'react'
import {FooterSectionDataIcons} from '../../utils/FooterSectionData'
import {FooterSectionDataFind} from '../../utils/FooterSectionData'
import {FooterSectionDataNavigation} from '../../utils/FooterSectionData'
import {FooterSectionDataCustomer} from '../../utils/FooterSectionData'
const Footer = ({ className }) => {
    return (
        <div className={`${className}`}>
            
            <div className='footer bg-blue text-white grid grid-cols-7 p-5 font-main'>
                <div className='contianer-1 col-span-3 ml-5'>
                    <div className='text-4xl'>
                        LOGO</div>

                    <div className='grid grid-cols-3'>
                        <div><i className='fa fa-headphones text-8xl  align-text-bottom text-white'/></div>
                        <div>
                            <p>Got Questions ? call us 24/7!</p>
                            <p className='text-xl'>888224546 ,(588446546)</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-2xl'>Contact Info</p>
                        <p>27 MG Road Indore M.P. India</p>
                    </div>
                    <div className='flex px-10'>
                        {
                        FooterSectionDataIcons.map((data) => (
                            <div className='px-2 py-5'>
                                <a href='#'
                                    className={
                                        `${
                                            data.icon
                                        } text-gray-600 text-2xl`
                                    }/>
                            </div>
                        ))
                    } </div>
                </div>

                <div className='contianer-2 col-span-4 grid grid-cols-7'>
                    <div className='cont-1 text-lg col-span-3'>
                        <p className='text-2xl font-semibold'>Find It Fast</p>

                        {
                        FooterSectionDataFind.map((data) => (
                            <p className='pt-1'>
                                <a href='#' className="">
                                    {
                                    data.Item
                                }</a>
                            </p>
                        ))
                    } </div>
                    <div className='cont-2 text-lg col-span-2'>
                        <p className='text-2xl font-semibold'>Navigation</p>

                        {
                        FooterSectionDataNavigation.map((data) => (
                            <p className='pt-1'>
                                <a href='#' className="">
                                    {
                                    data.Item
                                }</a>
                            </p>
                        ))
                    } </div>
                    <div className='cont-3 text-lg col-span-2'>
                        <p className='text-2xl font-semibold'>Customer Care</p>
                        {
                        FooterSectionDataCustomer.map((data) => (
                            <p className='pt-1'>
                                <a href='#' className="">
                                    {
                                    data.Item
                                }</a>
                            </p>
                        ))
                    } </div>
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

export default Footer

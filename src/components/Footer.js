import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='flex justify-around flex-wrap px-8 lg:px-20 md:px-12 py-20 gap-12'>
        <div className='lg:w-[30%] w-full'>
            <h1 className='text-blue-900 text-4xl font-black'>Easy</h1>
            <h1 className='text-blue-500 text-4xl font-black py-2'>ahead</h1>
            <p className='text-gray-700 text-lg font-normal'>We take the work out of connecting with others so you can accomplish more.</p>
            <div className='flex justify-between p-4 my-8 rounded-md border border-gray-400'>
               <h4 className='font-bold'>English</h4>
               <FaAngleDown />
            </div>
            <div className='block lg:flex md:flex py-8 '>
                <img src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" alt="" className='w-40' />
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" className='w-40' />
            </div>
            <div className='flex gap-8 text-2xl py-8'>
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <CiYoutube />
            </div>
        </div>
        <div className='flex flex-col gap-6 items-center lg:items-start'>
            <h5 className='text-blue-900 font-black text-2xl'>About</h5>
            <h5 className='text-gray-600 font-normal text-lg'>About Calendly</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Contact Sales</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Newsroom</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Careers</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Security</h5>
        </div>
        <div className='flex flex-col gap-6 items-center lg:items-start'>
            <h5 className='text-blue-900 font-black text-2xl'>Solutions</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Customers Success</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Sales</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Recuriting</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Information Technology</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Marketing</h5>
        </div>
        <div className='flex flex-col gap-6 items-center lg:items-start'>
            <h5 className='text-blue-900 font-black text-2xl'>Popular features</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Embed Calendly</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Availability</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Sending Notifications</h5>
            <h5 className='text-gray-600 font-normal text-lg'>Using Calendly mobile</h5>
        </div> 
    </div>
  )
}

export default Footer

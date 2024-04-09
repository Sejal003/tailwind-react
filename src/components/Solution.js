import React from 'react'
import { GiArcheryTarget } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { PiChartBarFill } from "react-icons/pi";
import { IoFlashOutline } from "react-icons/io5";
import { GiStarsStack } from "react-icons/gi";

const Solution = () => {
    return (
        <div className='lg:mx-40 md:mx-12 sm:mx-12 mx-8'>
            <div className='my-7 flex items-center justify-center'>
                <h3 className=' text-lg font-semibold text-blue-500 pt-12'>SOLUTIONS</h3>
            </div>
            <div className='my-7 flex items-center justify-center'>
                <h3 className=' text-4xl font-bold text-blue-900 mb-8'>Calendly can solve your specific pain points.</h3>
            </div>
            <div className='lg:flex md:flex sm:flex item-center justify-center gap-5 mb-10'>
                <div className="card">
                    <div className='p-6'>
                    <GiArcheryTarget className='text-blue-500 text-3xl' />
                    </div>
                    <div className='flex-col pl-6 pr-8 gap-3'>
                        <div className='flex'>
                            <h2 className='font-bold text-blue-900 text-xl'>Sales</h2>
                        </div>
                        <p className='text-gray-400 mt-2'>Spend more time selling, and less time on admin. Shorten your sales cycle by letting prospects schedule while they're in peak buying mode.</p>
                        <div className='flex pb-4 mt-8'>
                        <button className=" font-bold text-blue-500">Learn more</button>
                        <FaAngleRight className='text-blue-500 mt-1 ml-1' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='p-6'>
                    <BsPeople className='text-blue-500 text-3xl' />
                    </div>
                    <div className='flex-col pl-6 pr-8 gap-3'>
                        <div className='flex'>
                            <h2 className='font-bold text-blue-900 text-xl'>Recruiting</h2>
                        </div>
                        <p className='text-gray-400 mt-2'>Simplify recruitment by smooting every aspect of the interview scheduling process, including automated follow-ups.</p>
                        <div className='flex pb-4 mt-[3.5rem]'>
                        <button className=" font-bold text-blue-500">Learn more</button>
                        <FaAngleRight className='text-blue-500 mt-1 ml-1' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='p-6'>
                    <GiTeacher className='text-blue-500 text-3xl' />
                    </div>
                    <div className='flex-col pl-6 pr-8 gap-3'>
                        <div className='flex'>
                            <h2 className='font-bold text-blue-900 text-xl'>Education</h2>
                        </div>
                        <p className='text-gray-400 mt-2'>Control your office hours, and empower and parents to schedule appointments easily.</p>
                        <div className='flex pb-4 mt-20'>
                        <button className=" font-bold text-blue-500">Learn more</button>
                        <FaAngleRight className='text-blue-500 mt-1 ml-1' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:flex md:flex sm:flex item-center justify-center gap-5 mb-10'>
            <div className="card ">
                    <div className='p-6'>
                    <PiChartBarFill  className='text-blue-500 text-3xl' />
                    </div>
                    <div className='flex-col pl-6 pr-8 gap-3'>
                        <div className='flex'>
                            <h2 className='font-bold text-blue-900 text-xl'>Revenue Operations</h2>
                        </div>
                        <p className='text-gray-400 mt-2'>Streamline meeting and activity data. Calendly's native integrations with salesforce and HubSpot ensure up-to-date reporting.</p>
                        <div className='flex mt-8'>
                        <button className=" font-bold text-blue-500">Learn more</button>
                        <FaAngleRight className='text-blue-500 mt-1 ml-1' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='p-6'>
                    <IoFlashOutline className='text-blue-500 text-3xl' />
                    </div>
                    <div className='flex-col pl-6 pr-8 gap-3'>
                        <div className='flex'>
                            <h2 className='font-bold text-blue-900 text-xl'>Marketing</h2>
                        </div>
                        <p className='text-gray-400 mt-2'>Convert interseted prospects into scheduled meeting and demos faster. Skip steps that cause customer friction.</p>
                        <div className='flex pb-4 mt-8'>
                        <button className=" font-bold text-blue-500">Learn more</button>
                        <FaAngleRight className='text-blue-500 mt-1 ml-1' />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className='p-6'>
                    <GiStarsStack className='text-blue-500 text-3xl' />
                    </div>
                    <div className='flex-col pl-6 pr-8 gap-3'>
                        <div className='flex'>
                            <h2 className='font-bold text-blue-900 text-xl'>Customer Success</h2>
                        </div>
                        <p className='text-gray-400 mt-2'>Offer exceptional support. Your clients will be delightned with one-click scheduling and increased responsiveness.</p>
                        <div className='flex pb-4 mt-8'>
                        <button className=" font-bold text-blue-500">Learn more</button>
                        <FaAngleRight className='text-blue-500 mt-1 ml-1' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution

import React from 'react'

const Home = () => {
  return (
    <div className='px-8 lg:px-20 md:px-20 sm:px-12'>
      <div className='pb-20 bg-[#fbfbff] rounded-t-full'>
      <div className='py-10 flex items-center justify-center'>
        <h3 className=' text-lg font-semibold text-blue-500 pt-12'>SOLUTIONS</h3>
      </div>
      <div className='flex items-center justify-center'>
        <h3 className='text-3xl lg:text-7xl md:text-5xl sm:text-3xl font-black text-blue-900 text-center'><span className='text-blue-500'>Calendly</span> for the work you do</h3>
      </div>
      <div className='py-12 flex items-center justify-center lg:px-60 md:px-40 sm:px-20'>
        <p className='text-xl lg:text-2xl md:text-2xl text-gray-500 text-center'>Across a range of users, Calendly helps people and teama build efficiency, professionalism and results into the work they do.</p>
      </div>
      <div className='flex items-center justify-center'>
        <button className="bg-blue-500 hover:bg-blue-600 duration-300 px-12 py-6 rounded-full text-white  mt-2">Contact Sales</button>
      </div>
      </div>
    </div>
  )
}

export default Home

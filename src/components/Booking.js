import React from 'react'

const Booking = () => {
  return (
    <div className='px-20 bg-blue-900'>
    <div className='pb-20'>
    <div className='pt-20 flex items-center justify-center'>
      <h3 className='text-4xl font-black text-white text-center'>Easy access for easy bookings</h3>
    </div>
    <div className='py-12 flex items-center justify-center lg:px-60 md:px-40 sm:px-20'>
      <p className='text-xl lg:text-2xl md:text-2xl text-white font-light text-center'>Share your Calendly link right from your browser, so you can schedule meetings without the back-and-forth</p>
    </div>
    <div className='flex items-center justify-center gap-8'>
      <button className="bg-blue-500 px-4 lg:px-12 md:px-8 py-5  rounded-full text-white font-semibold  mt-2">Start for free</button>
      <button className="px-4 lg:px-12 md:px-8 py-5 rounded-full text-white font-semibold border-2 border-white  mt-2">Talk with Sales</button>
    </div>
    </div>
  </div>
  )
}

export default Booking

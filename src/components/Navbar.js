import React, {useState} from 'react'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  let Links =[
    {name:"Individuals",link:"/"},
    {name:"Teams",link:"/"},
    {name:"Enterprise",link:"/"},
    {name:"Product",link:"/"},
    {name:"Pricing",link:"/"},
    {name:"Resources",link:"/"},

  ];
  let [open,setOpen]=useState(false);
  return (
    <div className='w-full'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='flex flex-shrink-0 items-center text-gray-800'>
      <span className='mr-1'>
        <img src="https://mms.businesswire.com/media/20220302005343/en/1376587/22/Calendly_Primary_Logo_2_%282%29.jpg" alt="" className='w-40'/>
      </span>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
      <FaBars name={open ? 'close':'menu'}></FaBars>
    </div>

    <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='lg:ml-8 text-md font-semibold lg:my-0 my-7'>
            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
          </li>
        ))
      }
      <div className='flex flex-row mx-auto ml-20'>
      <button className="px-8 py-4 rounded-full text-black font-semibold mt-2">Log In</button>
      <button className="bg-blue-500 hover:bg-blue-600 font-semibold duration-300 px-8 py-4 rounded-full text-white  mt-2">Get Started</button>
      </div>
    </ul>
    </div>
  </div>
  )
}

export default Navbar

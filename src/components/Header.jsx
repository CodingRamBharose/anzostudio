import React from 'react'
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  return (
    <div className='fixed w-fit right-0 z-10 py-16 px-5  flex items-center justify-end'>
      <button className='bg-black px-10 py-2 rounded-full text-white border-white border-4 hover:bg-gray-400 animate-zoom-in-out'>Hire Me</button>
      <CgMenuGridO className='text-4xl text-gray-400 ml-4 '/>
    </div>
  )
}

export default Header

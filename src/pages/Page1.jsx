import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Page1 = () => {

  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0)

  const handleMouseMove = (e) => {
    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 20);
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 5);
  }


  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 4,
      ease: 'slow(0.1,0.1,false)'
    })
  }, [xVal, yVal])

  return (
    <div onMouseMove={(e) => { handleMouseMove(e) }} className='h-screen bg-white p-3'>
      <div id='page1-in' className='py-10 px-16 rounded-[2rem] shadow-custom-all bg-cover bg-center bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1857,h_840,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
        <img className='h-16' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
        <div ref={tiltRef} className='mt-32 w-fit text-white'>
          <h1 className='text-[4.1vw] font-[font1] leading-[6vw]'>I AM <span className='text-black'>DARK MODE<span className='text-white'>™</span></span></h1>
          <h1 className='text-[8.2vw] font-[font1] leading-[5vw]'>DESIGNER</h1>
          <h1 className='text-[4.1vw] font-[font1] leading-[6vw]'>TO HIRE</h1>
        </div>
        <div className='text-white'>
          <h2 className='mt-6'>BRAND DESIGN | WEBSITE DESIGN <br />
            <span className='text-gray-600'>BESPOKE FREELANCE</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Page1

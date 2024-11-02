import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'
import Page2Svgs from '../components/Page2Svgs'

const Page2 = () => {


  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from('.textgsap', {
      transform: 'rotateX(-60deg)',
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: '.textgsap',
        // markers : true,
        start: 'top 60%',
        end: 'top -300%',
        scrub: 2,
      }
    })
  })

  return (
    <>
      <div className='w-full bg-white'>
        <h3 className='py-8 text-center text-md text-gray-700 font-thin font-[font3]'>©  anzo.studio 2024 | designed and developed</h3>
        <div className='text-center mt-20 textgsap'>
          <h1 className='text-[40vw] leading-[30vw] font-[font5]'>IMPACTFUL</h1>
        </div>
        <div className='text-center textgsap'>
          <h1 className='text-[40vw] leading-[30vw] font-[font5]'>DESIGN</h1>
        </div>
        <div className='text-center textgsap'>
          <h1 className='text-[40vw] leading-[30vw] font-[font5]'>IS THE</h1>
        </div>
        <div className='text-center textgsap'>
          <h1 className='text-[40vw] leading-[30vw] font-[font5]'>DESIGN</h1>
        </div>
        <div className='text-center textgsap'>
          <h1 className='text-[40vw] leading-[30vw] font-[font5]'>THAT</h1>
        </div>
        <div className='text-center textgsap'>
          <h1 className='text-[40vw] leading-[30vw] font-[font5]'>WORKS!</h1>
        </div>
      </div>
      <div className='flex items-center justify-center scale-50'>
        <Page2Svgs/>
      </div>
      <div className='h-[2.2px] w-96 bg-black relative left-1/2 -translate-x-1/2'></div>
    </>
  )
}

export default Page2

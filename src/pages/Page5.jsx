import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

const Page5 = () => {


    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
        gsap.from('.textgsap1', {
            transform: 'rotateX(-60deg)',
            duration: 1,
            opacity: 0,
            stagger: 1,
            scrollTrigger: {
                trigger: '.textgsap1',
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
                <div className='text-center mt-20 textgsap1'>
                    <h1 className='text-[40vw] leading-[30vw] font-[font5]'>HELPING</h1>
                </div>
                <div className='text-center textgsap1'>
                    <h1 className='text-[40vw] leading-[30vw] font-[font5]'>MY</h1>
                </div>
                <div className='text-center textgsap1'>
                    <h1 className='text-[40vw] leading-[30vw] font-[font5]'>CLIENTS</h1>
                </div>
                <div className='text-center textgsap1'>
                    <h1 className='text-[40vw] leading-[30vw] font-[font5]'>TO ACHIEVE</h1>
                </div>
                <div className='text-center textgsap1'>
                    <h1 className='text-[40vw] leading-[30vw] font-[font5]'>THEIR</h1>
                </div>
                <div className='text-center textgsap1'>
                    <h1 className='text-[40vw] leading-[30vw] font-[font5]'>DREAMS!</h1>
                </div>
            </div>
        </>
    )
}

export default Page5

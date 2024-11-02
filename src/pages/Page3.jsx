import React from 'react'

const Page3 = () => {
    return (
        <div className='h-screen bg-white pt-32 flex gap-28 flex-col relative'>
            <div className='h-[2.2px] w-[37rem] bg-black relative left-1/2 -translate-x-1/2'></div>
            <div className='h-[2.2px] w-[50rem] bg-black relative left-1/2 -translate-x-1/2'></div>
            <div className='h-[2.2px] w-[64rem] bg-black relative left-1/2 -translate-x-1/2'></div>
            <div className='h-[2.2px] w-[78rem] bg-black relative left-1/2 -translate-x-1/2'></div>
            <img className='absolute w-[65vw]  z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1249,h_719,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
            <video className='absolute overflow-hidden mt-[-13px] w-[50vw] h-[66vh] object-cover z-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' autoPlay muted loop src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
        </div>
    )
}

export default Page3

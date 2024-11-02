import React from 'react'

const Page6 = () => {
    return (
        <div className='h-screen bg-white p-3 overflow-hidden'>
            <div className='h-full w-full  rounded-[2rem] relative shadow-custom-all overflow-hidden'>
                <video className='w-full h-full object-cover' muted autoPlay loop src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
                <h1 className='text-[40vw] font-[font5] leading-[30vw] absolute text-white bottom-0 pl-16 pb-4'>ABOUT</h1>
            </div>
        </div>
    )
}

export default Page6

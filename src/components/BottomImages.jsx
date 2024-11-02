import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const BottomImages = () => {

  useGSAP(()=>{
   gsap.to('#images img',{
    rotate: 360,
    duration : 7,
    repeat : -1,
    ease : 'linear'
   }) 
  })

  return (
    <div className=''>
      <div className='fixed z-10 bottom-12 right-16 flex gap-6 flex-col' id='images'>
        <img className='w-16' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
        <img className='w-16' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_100,h_100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
  )
}

export default BottomImages

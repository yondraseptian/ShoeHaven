import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <Image src={"/images/herosection.svg"} width={2000} height={400} alt={"hero image"}/>
    </div>
  )
}

export default HeroSection
import React from 'react'
import Marquee from 'react-fast-marquee'

const Slide = () => {
  return (
    <div className='bg-white w-full mx-auto overflow-hidden'>

    <Marquee className='md:max-w-[1400px] mx-auto flex item-center p-5 relative ' speed={100} delay={10}>
         
          <img className='' src='/assets/svgs/fedX.svg' alt='' />
          <img className='' src='/assets/svgs/amazon.svg' alt='' />
          <img className='' src='/assets/svgs/google.svg' alt='' />
          <img className='' src='/assets/svgs/ola.svg' alt='' />
          <img className='' src='/assets/svgs/oyo.svg' alt='' />
          <img className='' src='/assets/svgs/microsoft.svg' alt='' />
          <img className='' src='/assets/svgs/google.svg' alt='' />
          <img className='' src='/assets/svgs/fedX.svg' alt='' />
          <img className='' src='/assets/svgs/amazon.svg' alt='' />
          <img className='' src='/assets/svgs/microsoft.svg' alt='' />


      </Marquee>
  
    </div>
  )
}

export default Slide
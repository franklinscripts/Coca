import React from 'react'
import Fil from './Fil'
import Learn from './Learn'

const Case = () => {
  return (
   <div className='md:max-w-[1440px] w-full mx-auto    py-7 md:px-5 px-7 flex lg:flex-row flex-col justify-center items-center  md:justify-between '>

      <div className='pb-7 md:pb-0 relative'>
        <div className=' card-0 '>
          <img src='/assets/svgs/elipsis125.svg' className='w-full md:w-[1020px]  md:h-[597px]  ' alt='image'/>
        </div>
        
        <Fil text="amazing analysis"/>
        <h1 className='py-4 font-normal leading-[120%] text-[#101010] text-[40px]'>Case studies</h1>
        <p className='text-[#757b8a] pb-5 order-2 leading-[160%] sm:w-[556px] w-[90%]'>So, how do you know which is the right tax software agency for your company? Well, you can't go wrong with choosing Coca Soft</p>
 

        <img className='md:w-auto w-full' alt='this is an image' src='/assets/svgs/frame-16.svg' />
        <h3 className='md:w-[445px] text-[32px] leading-[120%] py-5'>The heart of what makes we valuable</h3>
        <Learn info="Learn more" />
      </div>
      <div className=' relative'>
        <div className='card-9 '>
            <img src='/assets/svgs/elipsis124.svg' className='w-full md:w-[1020px]  ' alt='image'/>
        </div>
        <img className='w-[100%]' alt='this is an image' src='/assets/svgs/frame-17.svg' />
        
        <h3 className='md:w-[445px] text-[32px] leading-[120%] py-5'>Modern, compliant technology for collections & recovery</h3>
        <Learn info='Learn more'/>
       </div>
    </div>
  )
}

export default Case
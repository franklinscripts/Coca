import React from 'react'
import Fil from './Fil'

const Consider = () => {
  return (    
  <div className='max-w-[1440px] w-full mx-auto sm:px-10   py-7 md:px-0 px-7 '>


    <div className='relative  md:flex md:px-5  justify-between items-center block gap-10 '>
        <div className=' flex flex-col  items-center justify-center  '>
        <img className='z-[-999] mb-[5em]  w-[90%] md:w-[560px]' alt='images' src='/assets/svgs/image-1.svg'/>
        <img className='card-3 lg:top-[70%] md:top-[50%] left-[50%] top-[27%] md:left-[40%] lg:left-[40%] lg:w-[450px] md:w-[300px]  w-[70%]' alt='images' src='/assets/svgs/content.svg'/>
 
        </div>
        <div className=''>
        <Fil className='py-7' text="WE ARE EXPERT TEAM"/>
        <h3 className='text-[#101010] pt-7 pb-2 leading-[120%] text-[40px] md:w-[540px] w-[100%] '>
        Consider hiring a software development agency to help you with your project
        </h3>
        <p className='leading-[140%] py-1 text-[18px] font-medium  md:w-[500px] w-[100%] '>
          After more than 30 years, Coca Soft take pride in their reputation as a trusted name in tax preparation software.
        </p>
        <p className='text-[#757B8A] py-2 text-[16px] leading-[160%] md:w-[491px] w-[100%]'>  
        After all, they've been in the business since before you were born (not even kidding!) many of our customers are on their second or third generation of using their tax software.

        </p>

        </div>
    </div>
    </div>
  )
}

export default Consider
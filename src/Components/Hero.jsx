import React from 'react'
import Search from './Search'

const Hero = () => {
  
  return (
    <div className='md:max-w-[1440px] w-full mx-auto mt-10 text-center flex items-center flex-col justify-center'>
    <div className=' '>
    <div className=' card-0 '>
        <img src='/assets/svgs/elipsis125.svg' className='w-full md:w-[1020px]  md:h-[597px]  ' alt='image'/>
    </div>
    <span className='flex  md:px-0 px-4'>

    <h1 className=' leading-[115%] text-[#101010] md:text-[64px] text-[36px] md:w-[722px] w-full'>Advaced software that belongs to all business</h1>
        {/* <img src='/assets/svgs/pattern.svg' className='md:mt-[-7em] mt-[-5em]' alt='image'/> */}
    </span>

    <p className=' leading-[160%] md:w-[450px] w-[90%] py-5 text-[#757B8A] mx-auto'>We've put together a list of content ideas that we think would be relevant to your audience.</p>
    </div>
    <div className=''>
        <Search />
    </div>
    <div className='sm:card  mt-[7.5rem]'>
    <img className='w-full  md:w-[1020px]  md:h-[597px]  ' src='/assets/svgs/wire-frame.svg' alt='image' />

    </div>
    <div className=' '>
        <img src='/assets/svgs/elipsis124.svg' className='card-2 z-[-99]' alt='image'/>
    </div>

    </div>
  )
}

export default Hero
import React from 'react'

const Goal = () => {
  return (
    <div className='max-w-[1440px] w-full mx-auto   py-7 md:px-5 px-7 '>
    <div className='md:flex items-center md:py-[5em] justify-between'>
        <h1 className='md:py-0 py-3 leading-[120%] md:text-[40px] text-[30px] md:w-[358px]'>Reach your goals by using Coca soft</h1>
        <p className='md:py-0 py-3 leading-[160%] sm:w-[577px]  text-[#757b8a]'>
        Do you enjoy managing your own finances? Well, we're sure you'll love TC Tax Software! Our software makes filing taxes easy. Just enter your numbers and we'll do the rest. TurboTax also has an app for phones and tablets. Save money on your taxes with our discount!
        </p>
    </div>
    <img src='/assets/svgs/img-2.svg' className='w-full'/>
    </div>
  )
}

export default Goal
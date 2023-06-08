import React from 'react'
import Button from './Button'
const Search = () => {
  return (
    <div className='md:flex items-center block  gap-6'>
      <input type='email' placeholder='Enter email address' className=' focus:border outline-none mb-5 md:mb-0 rounded-[60px] bg-[#F3F4F8] md:w-[371px] w-[90%] h-[60px] p-5' />
      <Button text='Start 14 days Free Trial'/>
    </div>
  )
}

export default Search
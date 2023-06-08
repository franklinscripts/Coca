import React from 'react'

const Learn = ({info}) => {
  return (
    <button className='py-[10px] px-[20px] rounded-full bg-white border border-black text-[#31543B] outline-none flex items-center gap-4 hover:opacity-[.6]'>
    {info}
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66666 13.3333L13.3333 2.66666" stroke="#31543B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.66666 2.66666H13.3333V13.3333" stroke="#31543B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

         
    </button>
  )
}

export default Learn
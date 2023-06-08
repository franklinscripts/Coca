import React from 'react'

const Button = ({text}) => {
  return (
    <button className='rounded-[60px]  text-white font-bold text-[13px] hover:opacity-[.9]  bg-[#31543B] border-none px-[32px] py-[10px] cursor-pointer '>
    {text}
  </button>
  )
}

export default Button
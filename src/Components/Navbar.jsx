import React, { useState } from 'react'
import Button from './Button';

const Navbar = () => {
    let links =[
      {
        name:"About",link:"/"
      },
      {
        name:"Blog",link:"/"
      },
      {
        name:"Contact",link:"/"
      },
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='md:max-w-[1440px] w-full   mx-auto'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className=' mr-5 '>
        <img className='w-[100px] h-[66px]' src='/assets/svgs/logo.svg' alt='logo' />
         
        </span>
      <ul className={`md:flex items-center md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[99] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-[15px] md:my-0 my-7'>
              <a href={link.link} className='hover:text-gray-800 font-bold text-gray-500 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
      <div className='md:block hidden'>

        <Button text="Sign In" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      </div>
    </div>
  )
}

export default Navbar
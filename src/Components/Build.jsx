import React from 'react'
import Fil from './Fil'
import Slide from './Slide'

const Build = () => {
    let data = [
        {
            id: 1,
            title: '300+',
            subtitle: 'products'
        },
        {
            id: 2,
            title: '85',
            subtitle: 'web template'
        },
        {
            id: 3,
            title: '215',
            subtitle: 'mobile template'
        }
    ]
  return (
    <div className=' w-full sm:mt-96 sm:pt-52  bg-green-950  py-4   mt-16 '>
        <div className='md:max-w-[1440px] w-full   mx-auto'>
        <div className=' md:flex block justify-between items-center  py-7 md:px-0 px-7'>
            <div className=''>
            <Fil text="product overview"/>
            <h1 className='md:w-[336px] w-[90%] text-[#FFF] text-[60px]'>Build Exclusively</h1>
            </div>
            <div className=''>
                <p className='lg:w-[569px] md:w-[100%] w-[90%] leading-[160%] text-[#eeeeeec0]'>Donec bibendum, dui id ultrices molestie, neque neque porta felis, id viverra ligula justo interdum mi. Nunc malesuada, risus consec maximus consequat, purus enim ultricies nisi, quis ornare.</p>
            </div>

        </div>
        <div className='flex justify-between items-center py-4 mt-[5em] md:px-0 px-7'>
        {
            data.map((item, index) => {
                            return (
                                <div className='md:py-0' key={index}>
                                <h1 className='md:text-[70px] text-[24px] text-white leading-[86px] '>{item.title}</h1>
                                <p className=' uppercase  leading-[28px] md:text-[16px] text-[12px] font-["DM Sans"] text-[#eeeeeec0]'>{item.subtitle}</p>
                                </div>
                            )
                        })
        }

        </div>


        </div>
        
    </div>
  )
}

export default Build
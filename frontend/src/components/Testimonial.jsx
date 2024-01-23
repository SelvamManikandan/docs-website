import React from 'react'


import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../images/patient-avatar.jpeg'
import {HiStar} from 'react-icons/hi'


const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <swiper className='flex justify-center'>
           
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex  items-center gap-[13px]'>
                        <img src={patientAvatar} className='rounded-full w-20'  alt=''/>
                        <div><h4 className='text-[18px] leading-[30px] font-semibold text-black'>Gomathi
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />

                        </div>
                        </div>
                        

                    </div>
                    <p className='text-[16px] whitespace-pre-wrap leading-7 mt-4 text-black font-[400]'>
                        "I have taken medical services from them. They treat so well and 
                        they are providing the best medical services."
                    </p>
                </div>
          
            
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} className='rounded-full w-20'  alt=''/>
                        <div><h4 className='text-[18px] leading-[30px] font-semibold text-black'>Gowtham
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />

                        </div>
                        </div>
                        

                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-black font-[400]'>
                        "I have taken medical services from them. They treat so well and 
                        they are providing the best medical services."
                    </p>
                </div>
         
         
                <div className='py-[30px] px-5 '>
                    <div className='flex items-center gap-[13px]'>
                    <img src={patientAvatar} className='rounded-full w-20'  alt=''/>
                        <div><h4 className='text-[18px] leading-[30px] font-semibold text-black'>Sham
                        </h4>
                        <div className='flex items-center gap-[2px]'>
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />
                            <HiStar className='text-yellow-400 w-[18px] h-5' />

                        </div>
                        </div>
                        

                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-black font-[400]'>
                        "I have taken medical services from them. They treat so well and 
                        they are providing the best medical services."
                    </p>
                </div>
           
        </swiper>
    </div>
  )
}

export default Testimonial;
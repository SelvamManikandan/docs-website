import React, { useState } from 'react'
import doctorImg02 from "../../images/doctor-img02.jpeg";
import starIcon from "../../images/star.png";
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import Sidepanel from '../Doctors/Sidepanel';
const DoctorsDetails = () => {

  const [tab,setTab]=useState('about')

  return (
   <section>
    <div className='max-w-[1170px] px-5 mx-auto'>
      <div className='grid md:gris-cols-3 gap-[50px]'>
        <div className='md:col-span-2'>
          <div className='flex items-center gap-5'>
            <figure className='max-w-[600px] max-h-[500px]'>
              <img src={doctorImg02} alt="w-full"/>
            </figure>
               <div>
                 <span className='bg-[#CCF0F3] text-blue-300 py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  Surgeon

                 </span>
                 <h3 className='text-black text-[22px] leading-9 mt-3 font-bold'>
                  Bharathi
                 </h3>
                 <div className='flex ityems-center gap-[6px]'>
                  <span className='flex items-centergap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-black'>
                    <img src={starIcon} alt=""/> 4.8

                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-black'>
                    (272)
                  </span>

                 </div>
                 <p className='text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                  lorem ipsum dolor sit amet consectur adipisicing elit Dicta, Alias!
                  
                 </p>
               </div>
                 <Sidepanel/>
          </div>
             <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button
              onClick={()=> setTab('about')}
              className={`${
                tab==="about" && 'border-b border-solid border-blue-700 ' } py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}>
                  About
                  </button>
              <button
                onClick={()=> setTab('feedback')}
               className={`${
                tab==="feedback" && 'border-b border-solid border-blue-700 '}py-2 px-5 mr-5 text-[16px] leading-7 text-black font-semibold`}>
                  Feedback
                </button>
             </div>  

             <div className='mt-[50px] '>
                  {
                    tab==='about' && <DoctorAbout/>
                  }
                   {
                    tab==='feedback' && <Feedback/>
                  }
             </div>
        </div>

      </div>
      

    </div>
   </section>
  )
}

export default DoctorsDetails
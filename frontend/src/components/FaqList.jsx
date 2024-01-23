import { faqs } from '../data/faqs.js'
import { useState } from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
const FaqList = () => {
  const [isOpen,setIsOpen] =useState(false)
  const toggleAccordion = () =>{
    setIsOpen(!isOpen)
  }





  return (
    <ul className='mt-10'>
        {faqs.map((item, index)=>(
          <div className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5 cursor-pointer" onClick={toggleAccordion}>
            <div className="flex items-center justify-between gap-5">
              <h4 className="text-[14px] leading-7 lg:text-[14px] lg:leading-8 text-black">
                {item.question}<br/>
               <h4 className="text-[14px] leading-7 lg:text-[14px] lg:leading-8 text-black font-semibold"> {item.content}
               </h4>
              </h4>
              
            </div>
          </div>
        ))}
    </ul>
  )
}

export default FaqList;
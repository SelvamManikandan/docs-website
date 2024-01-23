import React from 'react'

const ServiceCard = ({item,index}) => {
  

  const {name, desc,  bgColor, textColor}=item
  return <div className='py-[30px] px-3 lg:px-5'>
    <h2 className='text-[26px] leading-9 text-black font-[700]'>{name}
     <p className='text-[16px] leading-7 font-[400] text-black mt-4 '>
      {desc}
    

     </p>
    </h2>

  </div>
}

export default ServiceCard;
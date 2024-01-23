import React from 'react'
import avatar from '../../images/avatar-icon.png';
import { AiFillStar } from 'react-icons/ai';
import { formateDate } from '../../utils/formateDate';
import FeedbackForm from './FeedbackForm';
import { useState } from 'react';

export default function Feedback() {

  const [showFeedbackForm, setShowFeedbackForm] = useState(true)
  const handleChange = () => {
    setShowFeedbackForm(false);
  }
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-black mb-[30px]'>All reviews (272)
        </h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img className="w-full" src={avatar} alt='' />
            </figure>
            <div>
              <h5 className='text-[16px] leading-6 text-blue-600 font-bold'>Alli ahmed

              </h5>
              <p className='text-[14px] leading-6 text-black'>{formateDate('12-18-2023')}

              </p>
              <p className='text__para mt-3 font-medium text-[15px]'>Good Services, highly recommended

              </p>
            </div>
          </div>


          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_, index) => <AiFillStar key={index} color='#0067FF' />
            )}

          </div>


        </div>
      </div>
      <button className='btn' onClick={handleChange}>Show Feedback
      </button>
      {!showFeedbackForm ? <FeedbackForm /> : ''}

      {/* {!showFeedbackForm &&( <div className='text-center'>
          <button className='btn' onClick={()=>setShowFeedbackForm(true)}>Give Feedback
          </button>

          {!showFeedbackForm && <FeedbackForm/>}
        </div>
        )} */}


    </div>
  )
}

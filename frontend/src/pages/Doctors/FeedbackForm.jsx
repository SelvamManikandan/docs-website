
import { AiFillStar } from 'react-icons/ai'
import React from 'react'
import { useState } from 'react';
const FeedbackForm = () => {

  // const[rating,setRating]=useState(0);
  // const[hover,setHover] = useState(0);
  const [reviewsText, setReviewText] = useState('');

  const handleSubmitReview = async e => {
    e.preventDefault()
  }

  return <form action=''>
    <div>
      <h2 className='font-bold'>Expertise and Skill:</h2>
      <h3 className='text-black text-[16px] leading-6  mb-4'>

        "Dr. Bharathi's surgical expertise truly stands out. Her
        precise and skillful approach during the recent cardiac surgery
        showcased a level of proficiency that instilled confidence
        in both the patient and the entire surgical team."

      </h3>
      <h2 className='font-bold'>Compassionate Care:</h2>
      <h3 className='text-black text-[16px] leading-6  mb-4'>
        "Dr. Bharathi's surgical expertise truly stands out. Her
        precise and skillful approach during the recent cardiac surgery
        showcased a level of proficiency that instilled confidence
        in both the patient and the entire surgical team."

      </h3>
      <h2 className='font-bold'>Communication:</h2>
      <h3 className='text-black text-[16px] leading-6  mb-4'>
        "Dr. Bharathi's surgical expertise truly stands out. Her
        precise and skillful approach during the recent cardiac surgery
        showcased a level of proficiency that instilled confidence
        in both the patient and the entire surgical team."

      </h3>

      {/* <div>
          {[...Array(5).keys()].map((_, index)=>{
            index+=1;
            return (
            <button 
            key={index}
             type="button"
             className={`${index <= (rating && hover) || hover
            ? "text-yellow-500"
            : "text-gray-600"}
            bg-transparent border-none outline-none text-[22px] cursor-pointer`}
             onClick={()=> setRating(index)} 
             onMouseEnter={()=>setHover(index)}
              onMouseLeave={()=>setHover(rating)}
              onDoubleClick={()=>
                {setHover(0); 
                 setRating(0);
              }}
             >
              <span>
                <AiFillStar/>
              </span>
            </button>
            );
          })}
         </div>  */}
      <div className='mt-[30px]'>
        <h3 className='text-black text-[16px] leading-6 font-semibold mb-4 mt-0'>
          Share your Feedback or Suggestion

        </h3>
        <textarea className='border border-solid border-[#0066ff34] focus:outline
           outline-primaryColor w-full px-4 py-3 rounded-md'rows='5'
          placeholder='Write your message'
          onChange={e => setReviewText(e.target.value)}>


        </textarea>

      </div>
      <button type='submit' onClick={handleSubmitReview} className='btn'>
        Submit Feedback

      </button>
    </div>

  </form>
}

export default FeedbackForm;
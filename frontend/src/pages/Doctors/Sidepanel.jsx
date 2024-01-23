import React from 'react'

export default function Sidepanel() {
    return (
        <div className='shadow-2xl p-3 lg:p-5 rounded-md'>
            <div className='flex flex-row items-center justify-evenly gap-2'>
                <p className='text__para leading-7 -mt-1  lg:leading-8'>Appointment Price
                </p>
                <p className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-black font-bold'>
                    1000 Rupees
                </p>
            </div>
            <div className='mt-2 justify-between'>
                <p className='text__para font-bold text-black'>
                    Available Time Slots:
                </p>

                <ul className='mt-3'>
                    <li className='flex itmes-center justify-between gap-2 mb-2'>
                        <p className='text-[15px] leading-6 text-black font-semibold'>
                            Sunday

                        </p>
                        <p className='text-[15px] leading-6 text-black font-semibold'>
                            4:00 PM - 9:30 PM

                        </p>


                    </li>
                    <li className='flex itmes-center justify-between gap-2 mb-2'>
                        <p className='text-[15px] leading-6 text-black font-semibold'>
                            Monday

                        </p>
                        <p className='text-[15px] leading-6 text-black font-semibold'>
                            4:00 PM - 9:30 PM

                        </p>


                    </li>
                    <li className='flex itmes-center justify-between gap-2 mb-2'>
                        <p className='text-[15px] leading-6 text-black font-semibold'>
                            Tuesday

                        </p>
                        <p className='text-[15px] leading-6 text-black font-semibold'>
                            4:00 PM - 9:30 PM

                        </p>
                    </li>
                </ul>

            </div>
            <button className='btn px-2 w-full rounded-md'>Book Appointment

            </button>
        </div>
    )
}

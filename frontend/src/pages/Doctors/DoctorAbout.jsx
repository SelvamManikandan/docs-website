
import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
    return <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-black font-semibold flex items-center gap-2'>
                About of
                <span className='text-blue-400 font-bold text-[24px] leading-9'>
                    Bharathi
                </span>

            </h3>
            <p className='text__para'>
                Dr. Sujeet Kumar Bharati is an expert and experienced
                General Surgeon, Laser Proctologist, and Laparoscopic
                Surgeon with an experience of 10 years, specializing in
                Proctology, Vascular, Urology, and Laparoscopy. He graduated
                and obtained hi s MBBS degree from SKMCH, Muzaffarpur
                (B.R.A. University) in 2009, and then his postgraduate
                MS degree from DMCH, Darbhanga (A.K.U. University) in 2016.
                Currently, he is practicing at Pristyn Care Clinic in
                Patna. He is fluent in English and Hindi and provides
                compassionate care for all his patients to ensure complete
                recovery. He has been commended by his patients for his
                caring nature, hard working attitude, and willingness to
                be there for them - any time of day and night.
            </p>
        </div>

        <div className='mt-12'>
            <h3 className=' text-[20px] leading-[30px] text-black font-semibold'>
                Education
            </h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:item-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-blue-500 text-[15px] leading-6 font-semibold
                    '>{formateDate("03-04-2015")} - {formateDate("11-04-2017")}

                        </span>
                        <p className='text-[16px] leading-6 font-medium text-black'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-black'>
                        New Manipal Multispeciality Hospital, Salem
                    </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between am:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-blue-500 text-[15px] leading-6 font-semibold
                    '>{formateDate("11-04-2012")} -{formateDate("11-04-2015")}

                        </span>
                        <p className='text-[15px] leading-6 font-medium text-black'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-black'>
                        New Manipal Multispeciality Hospital, Salem
                    </p>
                </li>

            </ul>

        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingCOlor font-semibold'>
                Experience

            </h3>
            <ul className='gris sm:grid-cols-2 gap-[30px] pt-4 md:p-5 flex flex-row'>
                <li className='p-4 rounded  bg-[#8da4d3] w-1/5 '>
                    <span className='text-blue-900 text-[15px] leading-6 font-semibold  '>
                        {formateDate("11-04-2012")} -{formateDate("11-04-2015")}

                    </span>
                    <p className='text-[16px] leading-6 font-medium text-black'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-black'>
                        New Manipal Multispeciality Hospital, Salem
                    </p>

                </li>
                <li className='p-4 rounded bg-[#8da4d3] w-1/5 '>
                    <span className='text-blue-900 text-[15px] leading-6 font-semibold  '>
                        {formateDate("11-04-2012")} -{formateDate("11-04-2015")}

                    </span>
                    <p className='text-[16px] leading-6 font-medium text-black'>
                        Sr. Surgeon
                    </p>
                    <p className='text-[14px] leading-5 font-medium text-black'>
                        New Manipal Multispeciality Hospital, Salem
                    </p>

                </li>

            </ul>

        </div>
    </div>
}

export default DoctorAbout
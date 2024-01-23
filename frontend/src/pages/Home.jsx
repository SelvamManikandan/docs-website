import React from "react";
import heroImg01 from "../images/hero-Img01.jpg";
import heroImg02 from "../images/hero-Img02.jpeg";
import heroImg03 from "../images/hero-Img03.jpeg";
import icon01 from "../images/icon01.jpeg";
import avatarIcon from '../images/avatar-icon.png';
import icon02 from "../images/icon02.jpeg";
import faqImg from '../images/faq-img.jpg';
import videoIcon from '../images/video-icon.png';
import icon03 from "../images/icon03.jpeg";
import featureImg from "../images/feature-img.jpeg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About";
import DoctorList from "../components/DoctorList";
// import FaqItems from "../components/FaqItems";
import FaqList from "../components/FaqList";
import Testimonial from "../components/Testimonial";
// import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="conatiner">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px] ml-5">
                <h1 className="text-[36px] leading-[46px] text-black font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  President Lyndon B. Johnson signed the Medicare and Medicaid
                  Act, also known as the Social Security Amendments of 1965,
                  into law. It established Medicare, a health insurance program
                  for the elderly, and Medicaid, a health insurance program for
                  people with limited income.
                </p>

                <button className="btn">Request an Appointment</button>
              </div>
              {/*======== hero counter =====*/}
              <div className="mt-[30px] lg:mt-[70px] ml-5 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-400 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]  text-black">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-800 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]  text-black">
                    100%
                  </h2>
                  <span className="w-[100px] h-2  bg-green-800 rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/*=====hero content ====*/}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full h-[500px] rounded-lg " src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px] rounded-lg h-[220px]" />
                <img src={heroImg03} alt="" className="w-full rounded-lg h-[220px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======== hero section end =======*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
            Delivering top-notch healthcare services
            </h2>
            <p className="text__para text-center">
              World-class care for everyon. our health system offers
              unmatched,experts health care.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon01} alt="" />
                </div>
                <div className="mt-[6px] ">
                  <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                    Find a Doctor
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">
                <div className="flex  items-center justify-center">
                  <img src={icon02} className="rounded-full" alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px]  leading-9 text-black font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img src={icon03} alt="" />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                    Book Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======= about section start==========*/}
      <About />
      {/*=======services section=========*/}
      <section>
        <div className="conatiner">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers
              unmatched,expert health care.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                    Mental Health
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                    Neurology
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                    Burn Treatment
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                    Blood Cancer Treatment
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                    Heart Valve Replacement Surgery
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <div className="py-[30px] px-5"></div>
              <div className="py-[30px] px-5">

                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-black font-[700] text-center">
                    IVF Treatment
                  </h2>
                  <p className="text-[16px] leading-7 text-black font-[400] mt-4 text-center">
                    World-class care for everyone.our health system offers
                    unmatched, expert health care. From the lab to the clinic
                  </p>
                  <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-500 hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          

          {/*=======feature content=======*/}
          <div className="flex flex-row ml-7 mt-10">
            <div className="xl:w-[670px] mt-9">
              <h2 className="heading">
                Get virtual treatment
                <br />
                Any time
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly
                </li>
                <li className="text__para">
                  2. Search for you Physician here, and contact their office.
                </li>
                <li className="text__para">
                  3.View our Physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end">
              <img src={featureImg} className="w-[600px] rounded-lg h-[500px]" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute  z-20
              bottom-[50px] md:bottom-[100px] md:left-4   pb-3 left-64
              lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] lg:mr-28">
                <div className="flex items-center justify-between">
                  <div className="flex items-center   gap-[6px] lg:gap-8">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-[600]">Tuesday, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-black font-[400]">10:00 A.M.
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-300 rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>


                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] 
                     text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-blue-500 font-[500] mt-2 lg:mt-4 riunded-full
                     ">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt='' />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-black">SakthiyaMurthi</h4>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*======our great doctor=====*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers
              unmatched,expert health care.
            </p>
          </div>
          <DoctorList />

        </div>
      </section>
      {/*======faq sectionm==========*/}
      <section>
        <div className="conatainer">
          <div className="flex justify-between  gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block  ml-5 mr-3">
              <img src={faqImg} className="h-full w-auto rounded-lg" alt='' />

            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most Questions by our beloved patients
              </h2>
              {/* <FaqItems /> */}
              <FaqList />

            </div>
          </div>

        </div>
      </section>
      {/*=== faq section end======*/}
      {/*===== testimonial=======*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our Patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers
              unmatched,expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/*======= testimonial end====== */}
    </>
  );
};
export default Home;









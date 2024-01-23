import React from 'react'
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function Services() {
  return (
    <>
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

</>
  
  )
}

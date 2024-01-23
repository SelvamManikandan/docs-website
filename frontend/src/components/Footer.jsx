
import React from 'react';
import { FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-blue-800 flex justify-evenly">
        <div className="">
          <p>Dalmia Board,</p>
          <p>Salem-Bangalore NH,</p>
          <p>Salem, TamilNadu,</p>
          <p>India</p>
          <div className="flex justify-center">
            <div className="mr-2">
              <FaYoutube size={20} />
            </div>
            <div className="mr-2">
              <FaTwitter size={20} />
            </div>
            <div>
              <FaWhatsapp size={20} />
            </div>
          </div>
        </div>
        <div className=" text-white">
          <p className="font-bold">Quick Links</p>
          <ul className="flex flex-col">
            <li className=" text-white hover:text-black cursor-pointer"><a href="/">Home</a></li>
            <li className=" text-white hover:text-black cursor-pointer"><a href="/services">Services</a></li>
            <li className=" text-white hover:text-black cursor-pointer"><a href="/doctors">Find a Doctor</a></li>
            <li className=' text-white hover:text-black cursor-pointer'><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      {/* Address and Social Media Section */}
      <div className=" bg-black">
        <p className="text-white font-bold text-center">
          Copyright &copy; 2023 developed by Manikandan. All rights reserved
        </p>
      </div>
    </footer>
  );
}


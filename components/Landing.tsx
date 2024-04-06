"use client";
import React, { useEffect, useRef, useState } from "react";
import { Roboto, Open_Sans } from "next/font/google";
import { Navbar } from "./Navbar";
import Image from "next/image";
import  "./Landing.css";
import { gsap } from "gsap";
import Footer from "./Footer";


export const App = () => {


  useEffect(() => {
    gsap.to('.contactStrip',{
      x:400,
      duration: 15,
      repeat: -1,
      yoyo: true
    })
  }, []);



  return (
    <div >
      <Navbar />
      <div className="  bg-[#FF204E] ">
        <div className=" hidden lg:flex md:flex md:pl-10 pl-20  lg:gap-[50px] gap-[25px] py-1  text-[#F7EEDD]">
          <div className=" contactStrip flex gap-[10px]  hover:scale-105 duration-300">
            <h2> 24 hrs </h2>
            <h1>+91-22-6969-6969</h1>
          </div>
          <div className=" contactStrip flex gap-[10px]  hover:scale-105 duration-300">
            <h2> Emergency </h2>
            <h1>+91-22-9999-9999</h1>
          </div>
          <div className=" contactStrip flex gap-[10px]  hover:scale-105 duration-300">
            <h2> Others </h2>
            <h1>+91-22-1212-1212</h1>
          </div>
        </div>
      </div>
      <Hosimage />
    
    </div>
  );
};

export const Hosimage = () => {
  return (
    <div className="bg-white ">
      <div className=" flex justify-center  ">
        <Image
          src="/assests.png"
          width={1500}
          height={500}
          alt="hospital image"
          className="rounded-sm right-0"
        />
        
      </div>
      <SearchInput/>
     <ServiceHighlight/>
     <Footer/>
    </div>
  );
};


export const  ServiceHighlight = () =>{
  return (
    <div >
    <div className=" lg:flex md:flex hidden justify-center ">
        <ul className="w-[90%]    flex  justify-center  p-2 my-2 lg:mt-0 ">
          <li className="w-[14%] h-[80px] cursor-pointer hover:scale-105 duration-300 bg-[#1B9CE4] text-[#fbf3e7] p-4 font-semibold text-sm rounded-l-lg flex items-center justify-center">
            <h1>Book Appointment </h1>
          </li>
          <li className="w-[14%] h-[80px] cursor-pointer hover:scale-105 duration-300 bg-[#1B9CE4] text-[#fbf3e7] p-4 font-semibold text-sm  flex lg:hidden items-center justify-center">
            <h1>Search Doctor</h1>
          </li>
          <li className="w-[14%] h-[80px] cursor-pointer hover:scale-105 duration-300 bg-[#fbf3e7] text-[#1B9CE4] p-4 font-semibold text-sm flex items-center justify-center">
            <h1>Health Checkup</h1>
          </li>
          <li className="w-[14%] h-[80px] cursor-pointer hover:scale-105 duration-300 bg-[#f9f3e7] text-[#1B9CE4] p-4 font-semibold text-sm flex items-center justify-center">
            <h1>HomeCare </h1>
          </li>
          <li className="w-[14%] h-[80px] cursor-pointer hover:scale-105 duration-300 bg-[#fbf3e7] text-[#1B9CE4] p-4 font-semibold text-sm flex items-center justify-center">
            <h1>Doctors and Clinic</h1>
          </li>
          <li className="w-[14%] h-[80px] cursor-pointer hover:scale-105 duration-300 bg-[#fbf3e7] text-[#1B9CE4] p-4 font-semibold text-sm flex items-center justify-center">
            <h1>Book a Consulting</h1>
          </li>
          <li className="w-[14%] h-[80px] cursor-pointer hover:scale-105 duration-300 bg-[#fbf3e7] text-[#1B9CE4] p-4 font-semibold text-sm rounded-r-lg flex items-center justify-center">
            <h1>Book a Test</h1>
          </li>
        </ul>
      </div>
      <div className="flex lg:hidden md:hidden">
        <ul className="optionul flex overflow-scroll p-2 my-2 gap-[10px]">
          <li className="min-w-[130px] h-[80px] bg-[#1B9CE4] text-[#fbf3e7] p-2  text-sm">
            <h1>Book Appointment </h1>
          </li>
          <li className="min-w-[130px] h-[80px] bg-[#1B9CE4] text-[#fbf3e7] p-2  text-sm">
            <h1>Search Doctor</h1>
          </li>
          <li className=" min-w-[130px] h-[80px] bg-[#fbf3e7] text-[#1B9CE4] p-2  text-sm">
            <h1>Get Health Checkup</h1>
          </li>
          <li className="min-w-[130px] h-[80px] bg-[#fbf3e7] text-[#1B9CE4] p-2  text-sm">
            <h1>HomeCare </h1>
          </li>
          <li className="min-w-[130px] h-[80px] bg-[#fbf3e7] text-[#1B9CE4] p-2  text-sm">
            <h1>Doctors and Clinic</h1>
          </li>
          <li className="min-w-[130px] h-[80px] bg-[#fbf3e7] text-[#1B9CE4] p-2  text-sm">
            <h1>Book a Consulting</h1>
          </li>
          <li className="min-w-[130px] h-[80px] bg-[#fbf3e7] text-[#1B9CE4] p-2  text-sm">
            <h1>Book a Test</h1>
          </li>
        </ul>
      </div>

       <div className="my-3">
        <h1 className={`flex justify-center text-lg font-semibold p-2 `}>
        Doctors, Pioneers, Life Savers
        </h1>
        <div className="flex justify-center">
        <p className={`text-sm  text-center max-w-[70%] font-roboto  `} >Our superspecialist doctors provide the highest quality of care through a team-based, doctor-led model.
           Trained at some of the world's most renowned institutions, our highly experienced doctors are distinguished 
           experts in their respective specialities. Our doctors work full-time and exclusively across Medanta hospitals. 
           In addition to offering superspecialised care in their own field, the Medanta organisational structure enables 
           every doctor to help create a culture of collaboration and multispecialty care integration.</p>
         
           </div>
       </div>
      </div>
  )
}
export const SearchInput = ()=>{
  return (
    <div className=" lg:flex hidden   justify-center  bottom-16  relative">
    <div className="relative w-[600px] max-w-full ">
      <input
        placeholder=" Search Doctors or Specialities"
        type="text"
        className="w-[100%] p-3 px-4 rounded-full border-2 text-md  border-[#1B9CE4] bg-[#1B9CE4]  placeholder-white focus:outline-none text-white "
      />
      <button>
        <Image
          src="/left_arrow.png"
          width={45}
          height={45}
          alt="left arrow"
          className="absolute  aspect-1 bottom-1 right-1 "
        />
      </button>
    </div>
  </div>
  )
}

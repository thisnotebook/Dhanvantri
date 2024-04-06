'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "../../../components/Navbar";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const data = {
  _id: "65d64523a503c18947b9e75c",
  employee_id: "IN_DOC003",
  name: "Dr. Alok Verma",
  gender: "Male",
  images: [
    "https://t4.ftcdn.net/jpg/02/60/04/09/240_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
  ],
  experience: "18 years",
  fees: "₹1500",
  phone: "+91 9876543212",
  address: "456 Liver Care Center, Hyderabad, Telangana, 500001",
  location:"Hyderabad",
  expertise: ["Liver Transplantation", "Hepatobiliary Surgery"],
  tags: ["hepatologist", "liver specialist", "doctor"],
  availability: {
    monday: "9:00 AM - 5:00 PM",
    tuesday: "9:00 AM - 5:00 PM",
    wednesday: "9:00 AM - 1:00 PM",
    thursday: "Not Available",
    friday: "9:00 AM - 5:00 PM",
    saturday: "10:00 AM - 3:00 PM",
    sunday: "Not Available",
  },
  education: [
    {
      degree: "Doctor of Medicine (MD)",
      institution: "Osmania Medical College, Hyderabad",
    },
    {
      degree: "Fellowship in Liver Transplantation",
      institution: "Asian Institute of Gastroenterology, Hyderabad",
    },
    {
      degree: "Residency in General Surgery",
      institution: "Nizam's Institute of Medical Sciences, Hyderabad",
    },
  ],
  about:
    "Dr. Alok Verma is a renowned hepatobiliary surgeon with 18 years of experience. He specializes in liver transplantation and hepatobiliary surgery. Dr. Verma completed his Doctor of Medicine (MD) from Osmania Medical College, Hyderabad, followed by a fellowship in liver transplantation at Asian Institute of Gastroenterology, Hyderabad. He is committed to providing comprehensive care to patients with liver diseases and ensures the best possible outcomes.",
  __v: {
    $numberInt: "0",
  },
};

const Location = [
  'Delhi',
  'Mumbai',
  'Chennai',
  'Benglore',
  'Kolkata'

]


export default function CardDoc() {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <div>
 
       <div className="h-screen grid place-items-center bg-gradient-to-r from-sky-400 to-indigo-600">
       <div className="relative flex flex-col items-center w-[300px] rounded-lg">
           <button onClick={()=>setIsOpen((prev)=>!prev)}
            className="bg-blue-400 p-2 w-full flex items-center justify-between font-bold text-lg rounded-lg text-white  tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >Dropdown
            {!isOpen ?(
              <AiOutlineCaretDown className="h-8"/>
            ) :(
              <AiOutlineCaretUp className="h-8"/>
            )
            }

            {isOpen && (
              <div className="bg-white absolute top-16 right-[-1px] flex flex-col font-light text-sm items-start rounded-xl p-2 w-full text-gray-600 ">
                {Location.map((item, i)=>(
                  <div key={i} className=" flex w-full justify-between hover:bg-blue-300  cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white p-2 border-l-4 border-solid border-b-[1px] border-gray-500">
                    <h3>{item}</h3>
                  </div>

                ))}
              </div>
            )}
            </button>
       </div>
       </div>




















    <div className="max-w-[380px] max-h-[500px] bg-gray-100 rounded-md p-2 overflow-scroll  ">
      <div className="m-2 border-b-2 border-solid border-black ">
      <div className="flex">
        <div>
          <img
            src={data.images[0]}
            alt="Doctor Image"
            className="w-[125px] h-[125px] overflow-hidden rounded-full object-cover hover:scale-105 duration-300
                        border-4 border-solid border-[#64EBB6] m-2   "
          />
        </div>
      <div className="pt-2">
      <div className="w-[200px] h-[50px] px-2 ">
        <p className="text-sm font-thin px-2 text-gray-700 "> {data.employee_id}</p>
          <h1 className="text-lg font-bold px-2 border-b-2 border-solid border-gray-200 ">{data.name}</h1>
        </div>
        <div className="w-[200px] h-[70px]  px-2 pt-1">
        <div className="  h-[30px] flex overflow-hidden  ">
        <p className="text-sm font-thin p-1 px-2 text-gray-700"> {data.tags[0]}</p>
          <h1 className="h-[30px] text-sm font-thin p-1 px-2 text-[#64EBB6] "><button>profile</button></h1>
         
        </div>
        <h2 className="px-2 text-gray-700"> {data.location}</h2>
        </div>
      </div>
        </div>
      </div>

      <div className="py-2 ">
          <div className="mx-2  ">
            <h1 className="p-2 mx-2 font-semibold text-[#64EBB6] text-md ">specialization and expertise</h1>
          </div>
          <div className="w-[80%] h-[150px] px-2 mx-2  text-gray-700 overflow-scroll" >
     {
         data.expertise.map((expertise) => {
            return (
              <div key={expertise}>
                 <h1 className="p-2">{expertise}</h1>
              </div>
            );
         })
      }
        
          </div>
      </div>
      <div className="my-2 pt-4 flex justify-evenly">
         <button className="p-2 px-4 bg-blue-400 text-lg text-white rounded-lg">Contact</button>
         <button className="p-2 px-4 bg-blue-400 text-lg text-white rounded-lg"> Appointment</button>
      </div>
    </div>
    </div>
  );
}

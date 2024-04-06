'use client'
import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

  interface Locationdata{
    [key: string]: any;
  }
 
export default function Dropdown({location}:{location:Locationdata}) {
    const [isOpen, setIsOpen] = useState(false);
    const [item, setItem] = useState("Dropdown");
  return (
    <div className="relative flex flex-col items-center w-[300px] rounded-lg">
    <button onClick={()=>setIsOpen((prev)=>!prev)}
     className="bg-[#1B9CE4] p-2 py-1 pl-6 w-full flex items-center justify-between font-bold text-md rounded-xl text-white  tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
     >{item}
     {!isOpen ?(
       <AiOutlineCaretDown className="h-8"/>
     ) :(
       <AiOutlineCaretUp className="h-8"/>
     )
     }

     {isOpen && (
       <div className="bg-[#1B9CE4] absolute top-14 right-[-1px] flex flex-col  items-start rounded-xl p-2 w-full text-white">
         {location.map((item, i)=>(
           <div onClick={()=>setItem(item)} key={i} className="pl-4 flex w-full justify-between hover:bg-blue-300 text-md  cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white p-2 border-l-4">
             <h3>{item}</h3>
           </div>

         ))}
       </div>
     )}
     </button>
</div>
  )
}

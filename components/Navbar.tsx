
'use client'
import React, { useEffect, useState } from "react";
import "./Navbar.css"
import Image from "next/image";
import { colors } from "@/app/theme";
import { Ambulance } from "./utils/ambulanc";



const Speciality = [
  'Cardiac Sciences',
  'Dental Science',
'Dermatology',
'Diabetology/Endocrinology',
'Emergency and Trauma',
'Endocrine Surgery',  
'Medical Genetics',
'Pain and Palliative Medicine',
'Palliative Medicine',

]
const Service = [
  'Lab test & Diagnostic',
  'Home Health Service',
  'Hospice care',
  'Inpatient rehabilitation facilities',
  'TeleMedicine',
  'Dialysis facilities',
  'Medical equipment & suppliers',
  'Health checkup',
  'Ambulance'
]
const Location = [
  'Delhi',
  'Mumbai',
  'Ahmedabad',
  'Benglore',

]

export const Navbar = () => {
  const [baricon, setBaricon] = useState(false)
  const [showSpeciality, setShowSpeciality] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [International, setInternational] = useState(false);
  const [dropdownclass, setDropdownClass] = useState('drop-down-menu');
  const [active,setActive] = useState(false);
//   useEffect(() => {
// console.log(baricon)
//   },[baricon])
//   const handleClickBar = () => {
//     setBaricon(!baricon);
//     console.log("this ", baricon)
//     setDropdownClass(baricon === false ? "drop-down-menu" : "drop-down-menu open");
    
//   }


const handleSpeciality = () => {
  setShowSpeciality(!showSpeciality);
setShowService(false);
setShowLocation(false);
}
const handleService =() =>{
  setShowService(!showService);
  setShowSpeciality(false);
  setShowLocation(false);
}
  const handleLocation = () => {
    setShowLocation(!showLocation);
    setShowService(false);
    setShowSpeciality(false);
  }

  return (
    <nav className="flex items-center justify-between  bg-[#f0f0f0]  p-3">
      <div className="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer">
        <span className="font-semibold text-xl tracking-tight hidden lg:block">
          <Image src="/Hdan.png" alt="Danvantri" width={150} height={150}  />
        </span>
        <span className="font-semibold text-xl tracking-tight lg:hidden block">
          <Image src="/Hdan.png" alt="Danvantri" width={100} height={100}  />
        </span>
      </div>
      
      <div className=" bock flex justify-evenly">
        <div className="hidden lg:block text-md cursor-pointer">
  
     
        <div
            onClick={handleSpeciality}
           
            className="dropDown group block font-medium mt-4  lg:inline-block lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] mr-4 relative"
          >
           <button className=" dropBtn mb-2 hover:scale-105 duration-300  ">Speciality</button>  
          { showSpeciality &&  <div className="dropdownContent block absolute bg-blue-500 min-w-40 z-10 rounded-lg overflow-hidden ">
           { Speciality.map((doc)=>(
    <a className="text-white py-3 px-4 no-underline block hover:bg-blue-500 hover:scale-105 duration-300 font-roboto " key={doc} href="#">{doc}</a>
  
  ))}
           </div>}
           <div className="dropdownContent hidden absolute bg-blue-500 min-w-40 z-10 rounded-lg overflow-hidden ">
           { Speciality.map((doc)=>(
    <a className="text-white py-3 px-4 no-underline block hover:bg-blue-500 hover:scale-105" key={doc} href="#">{doc}</a>
  
  ))}
           </div>
            <span className="absolute left-0 bottom-[-10px] w-0 h-[3px] bg-[#1B9CE4] transition-width  duration-300 group-hover:w-full"></span>
          </div>

          <div
            onClick={handleService}
           
            className="dropDown group block font-medium mt-4  lg:inline-block lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] mr-4 relative"
          >
           <button className=" dropBtn mb-2 hover:scale-105 duration-300">Services</button>  
          { showService &&  <div className="dropdownContent block absolute bg-blue-500 min-w-60 z-10 rounded-lg overflow-hidden ">
           { Service.map((doc)=>(
    <a className="text-white py-3 px-4 no-underline block hover:bg-blue-500 hover:scale-105 duration-300" key={doc} href="#">{doc}</a>
  
  ))}
           </div>}
           <div className="dropdownContent hidden absolute bg-blue-500 min-w-60 z-10 rounded-lg overflow-hidden ">
           { Service.map((doc)=>(
    <a className="text-white py-3 px-4 no-underline block hover:bg-blue-500 hover:scale-105" key={doc} href="#">{doc}</a>
  
  ))}
           </div>
            <span className="absolute left-0 bottom-[-10px] w-0 h-[3px] bg-[#1B9CE4] transition-width  duration-300 group-hover:w-full"></span>
          </div>

         
          <div
            onClick={handleLocation}
           
            className="dropDown group block font-medium mt-4  lg:inline-block lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] mr-4 relative"
          >
           <button className=" dropBtn mb-2 hover:scale-105 duration-300">Location</button>  
          { showLocation &&  <div className="dropdownContent block absolute bg-blue-500 min-w-60 z-10 rounded-lg overflow-hidden ">
           { Location.map((doc)=>(
    <a className="text-white py-3 px-4 no-underline block hover:bg-blue-500 hover:scale-105 duration-300" key={doc} href="#">{doc}</a>
  
  ))}
           </div>}
           <div className="dropdownContent hidden absolute bg-blue-500 min-w-60 z-10 rounded-lg overflow-hidden ">
           { Location.map((doc)=>(
    <a className="text-white py-3 px-4 no-underline block hover:bg-blue-500 hover:scale-105" key={doc} href="#">{doc}</a>
  
  ))}
           </div>
            <span className="absolute left-0 bottom-[-10px] w-0 h-[3px] bg-[#1B9CE4] transition-width  duration-300 group-hover:w-full"></span>
          </div>



          <div
            
            className="group block font-medium mt-4 lg:inline-block lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] mr-4 relative"
          >
            International 
            <span className="absolute left-0 bottom-[-10px] w-0 h-[3px] bg-[#1B9CE4] transition-width  duration-300 group-hover:w-full"></span>
          </div>
        </div>
   
        <div className="hidden lg:block">
        <Ambulance/>
        </div>
        <div>
          <a
            href="#"
            className="  hidden lg:block  inline font-medium text-sm px-4 py-2  mr-4 leading-none border rounded text-[#183E9F] border-[#183E9F] hover:border-transparent hover:text-white hover:bg-[#183E9F] duration-300 mt-4 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>

     
   {/* { 
      showService && <div  className="absolute top-[90px] right-[250px] bg-[#1B9CE4] rounded-md ">
       { Service.map((doc) =>(
             <div key={doc} className="p-[5px] pl-[10px] font-medium text-white hover:scale-105">
            { doc  }
             </div>
        ))}
      <div className="p-[5px] pl-[10px] text-white"> more...</div>
       </div> 

      }

      {showLocation && <div  className="absolute top-[90px] right-[300px] bg-[#1B9CE4] rounded-md ">
       { Location.map((doc) =>(
             <div key={doc} className="p-[5px] pl-[10px] font-medium text-white hover:scale-105">
            { doc  }
             </div>
        ))}
      <div className="p-[5px] pl-[10px] text-white"> more...</div>
       </div>  }
       */}



      <div className='block lg:hidden flex'>
 
     <Ambulance/>
     
        <button onClick={() => setBaricon(!baricon)} className='flex items-center px-3 py-2 border rounded text-[#183E9F] border-[#183E9F] '>
            <Image src='/threebar.png' alt="menu" height={12} width={12} />
          </button>
        </div>


{/* drop down menu code  */}
        {baricon && <div className={dropdownclass}>

          <ul className="">
            <li className="  font-medium   lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] ">
              <a href="#" > Speciality  </a>
              </li>  
              <li className="  font-medium   lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] ">
              <a href="#" > Services  </a>
              </li>  
              <li className="  font-medium   lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] ">
              <a href="#" > Location </a>
              </li>  
              <li className="  font-medium   lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] ">
              <a href="#" > International Section   </a>
              </li>  
              <li className="  font-medium   lg:mt-0 text-[#183E9F] hover:text-[#1B9CE4] ">
              <a href="#" > Login  </a>
            </li>
          </ul>
        </div>}

    </nav>
  );
};

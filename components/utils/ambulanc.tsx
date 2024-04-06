'use client'

import React, { use, useState } from 'react'
import Image from "next/image";
import ShowAmbuDetails from './showAmbuDetails';
export const Ambulance = () => {
    const [ambulance , setAmbulance] = useState(false);
     const [latitude , setLatitude] =useState(null);
     const [longitude, setLongitude] = useState(null);

    function getUserGeolocation() {
     
      if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(
          function(position) {
            
            const latitudes = position.coords.latitude;
            const longitudes = position.coords.longitude;
           setLatitude(latitudes);
           setLongitude(longitudes);
            // console.log("Latitude:", latitudes);
            // console.log("Longitude:", longitudes);
          },
 function(error) {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.error("User denied the request for Geolocation.");
                break;
              case error.POSITION_UNAVAILABLE:
                console.error("Location information is unavailable.");
                break;
              case error.TIMEOUT:
                console.error("The request to get user location timed out.");
                break;
              
            }
          }
        );
      } else {
        
        console.error("Geolocation is not supported by this browser.");
      }
    }
    

     


    const handleAmbulance = () => {
      setAmbulance(!ambulance);
      getUserGeolocation();
    }
  return (
    <div onClick={handleAmbulance} className="   mr-4  items-center cursor-pointer hover:scale-125 duration-300">
    <span className=" ">
      <Image
        className="w-full h-auto filter brightness-75 hover:brightness-100"
        src="/Ambulance.png"
        alt="Danvantri"
        width={40}
        height={40}
      />
    </span>
   
  </div>
  )
}

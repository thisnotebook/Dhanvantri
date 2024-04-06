import Link from 'next/link'
import React from 'react'
const Speciality = [
    'Cardiac Care',
    'Dental Care',
  'Dermatology',
  'Diabetology',
  'Renal Care',
  'Emergency & Trauma',
  'Endocrine Surgery',  
  'Medical Genetics',
  'Neurosciences',
  'Palliative Medicine',
  
  ]
  const Service = [
    'Find a Doctor',
    'Book Appointment',
    'Treatments',
    'Emergency 24x7',
    'Technology',
    'Patient Testimonials',
    'CPR',
    'Health checkup',
    'Ambulance'
  ]
  const Location = [
    'Delhi',
    'Mumbai',
    'Ahmedabad',
    'Benglore',
    'Kolkata',
    'Pune',
  
  ]
  const Corporate=[
    'Help Desk',
    'About Us',
    "Blogs",
    'Careers',
    'Feedback',
    'Contact Us',
    'News & Events',
    'Investors Relation',
    'Policies & Form',
    'SiteMap',
  ]
  const thought = [
    "स्वास्थ्य का राज़ मध्यम भोजन, उचित व्यायाम और सीमित आहार है।",
     '"हर एक जान अनमोल"',
     '"every life is Valuable"'
]
export default function Footer() {
  return (
    <div className='bg-[#f0f0f0] p-4 py-8  '>
        <div className='flex justify-evenly pb-4  '>
        <div >
        <h1 className='text-lg font-semibold text-gray-600 px-1 py-4'>For Patients</h1>
                <ul className='text-sm text-gray-600 '>
                   {Service.map((service,i) =>(
                          <li className='p-1' key={i}>{service}</li>
                   ))}
                </ul>
        </div>
            <div>
                <h1 className='text-lg font-semibold text-gray-600 px-1 py-4'>Specialities</h1>
                <ul className='text-sm text-gray-600'>
                   {Speciality.map((speciality,i) =>(
                          <li className='p-1' key={i}>{speciality}</li>
                   ))}
                </ul>
                <button className='text-sm text-gray-600 p-1'>more+</button>
            </div>
            <div>
                <h1 className='text-lg font-semibold text-gray-600 px-1 py-4'>Our Hospital</h1>
                <ul className='text-sm text-gray-600'>
                   {Location.map((location,i) =>(
                          <li className='p-1' key={i}>{location}</li>
                   ))}
                </ul>
            </div>
           
            <div>
            <h1 className='text-lg font-semibold text-gray-600 px-1 py-4'>Corporate</h1>
                <ul className='text-sm text-gray-600'>
                   {Corporate.map((corporate,i) =>(
                          <li className='p-1' key={i}>{corporate}</li>
                   ))}
                </ul>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-lg font-semibold text-gray-600 px-1 py-4'>Thanks for Visit :)</h1>
                <p className='p-1 text-[#1B9CE4] text-sm'>{thought[1]} -</p> 
                <p className='p-1 text-[#1B9CE4] text-sm' >{thought[2]}</p>
                <input type="text" placeholder='feedback...' className='rounded-lg p-2 text-sm text-gray-600 mt-2  focus:outline-gray-300' />
                <br/>
                <button className='text-white rounded-md bg-[#1B9CE4] p-1 '>send</button>
            </div>
        </div>
       
            <div className='border-b-2 mx-[100px] border-gray-300  '></div>
         
         <div className='flex flex-col justify-center items-center p-6 gap-y-[10px] '>
            <div className=' flex justify-center items-center gap-[20px]'>
            <div className='flex items-center'>
                <Link href='https://www.facebook.com' target='_blank'><img src='facebook.png' className='w-[25px]' alt='facebook'/></Link>
            </div>
            <div>
            <Link href='https://www.twitter.com' target='_blank'>  <img src='twitter.png' className='w-[25px]' alt='twitter'/></Link>
              
            </div>
            <div>
            <Link href='https://www.instagram.com' target='_blank'> <img src='instagram.png' className='w-[25px]' alt='instagram'/></Link>
           
                
            </div>
            <div  className='top-1 relative ' >
            <Link href='https://www.youtube.com' target='_blank'><img src='youtube.png' className='w-[25px]' alt='youtube'/></Link>
                
            </div>
            </div>
            <p className='text-xs text-gray-500'>Copyright © 2024 Dhanvantri The Medicity. All Rights Reserved.</p>
            </div>
    </div>
  )
}

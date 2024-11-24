import React from 'react'
import { about } from '../assets/images'
import AnimateBoxes from '../animate/AnimateBoxes'



const HelpCenter = () => {
  return (
    <>
      <div className="About-us relative">
        <img
          src={about}
          alt="About Us"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-65 flex justify-center items-center flex-col">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            HELP CENTER
          </h1>
          <p className='text-white lg:pt-9 font-bold text-2xl'>
          Your one stop location to find out more about your parcel delivery or collection
          </p>
        </div>
      </div>

     <div className='w-full h-auto lg:pl-48 pt-20 lg:mb-14'>
      <h3 className='text-xl font-bold text-neutral-600 py-8'>
        What can we help you with
      </h3>
      <p className='opacity-40 font-bold text-sm'>
      If you need a little additional help or advice about your parcel delivery or collection, 
      <br className='hidden lg:block' /> click through the below sections to find out the answer to any parcel query.
      </p>
     </div>

  {/*Animate Container*/}
  <div>
    <AnimateBoxes />
  </div>
     
    </>
  )
}

export default HelpCenter

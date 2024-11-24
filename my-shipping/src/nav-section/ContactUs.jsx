import React from 'react'
import { about } from '../assets/images'


const ContactUs = () => {
  return (
    <>
    
    <div className="About-us relative w-full h-auto">
        <img
          src={about}
          alt="About Us"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-65 flex justify-center items-center">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Contact 
          </h1>
        </div>
      </div>

      {/* Reach out  */}
      <div className='w-full h-auto lg:px-48 mt-16 lg:mt-28 px-12 '>
         {/* Text */}
         
        <h1 className='font-bold text-2xl text-neutral-600 my-8 md:my-9 sm:my-7 lg:text-4xl'>
          Reach out
        </h1>
        <p className='font-bold text-sm opacity-40 '>
        Your feedback is crucial to us as we work to be <br className='hidden lg:block'/> the reference point of excellence 
        in using <br className='hidden lg:block'/> technology-enabled logistics services supported <br className='hidden lg:block'/> by excellent customer service
         to enable <br className='hidden lg:block'/> commerce and improve lives across the world.
        </p>
        <h3 className='font-bold text-neutral-600 md:pt-9 py-7 text-2xl lg:text-3xl '>
         Email
        </h3>
        <span className='text-sm text-neutral-600 '>
         admin@sloganswift.com
        </span>

        {/* form */}
        <div className='flex flex-col mt-16 lg:mt-28'>
        <label className='font-bold pb-4'>
          Name
        </label>
        <input
            type="text"
            className="flex-grow px-4 py-2 border border-t-zinc-600 border-r-zinc-900 focus:ring-zinc-400 focus:ring-2 rounded focus:outline-none  text-sm sm:text-base"
          />
          <label className='pt-10 font-bold pb-4'>
            Email
          </label>
          <input
            type="text"
            className="flex-grow px-4 py-2 border border-t-zinc-600 border-r-zinc-900 focus:ring-zinc-400 focus:ring-2 rounded focus:outline-none  text-sm sm:text-base"
          />
        </div>
      
      </div>

    </>
  )
}

export default ContactUs

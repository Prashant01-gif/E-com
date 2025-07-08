import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='bg-gray-100 shadow-inner h-auto md:h-80'>
        <div className='text-2xl md:text-3xl italic gap-1 flex text-black pt-2 ml-4 md:ml-9'> 
          <img src='img1.jpg' alt='logo' className='h-10 w-10 rounded-3xl'/>
          <a href='#'>Manrash</a>
        </div>

        <div className='flex flex-col md:flex-row justify-around mt-4 md:mt-8 text-sm text-gray-600 px-4 md:px-0'> 
          <ul className='mb-4 md:mb-0'> 
            <p className='pb-3 text-lg font-mediu text-blue-800'>Contact</p>
            <li className='flex items-center gap-2'>
              <FaMapMarkerAlt className='text-blue-500' />
              Pokhara, 45 B Rajakochutara W-32
            </li>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-green-500' />
              +9817150202, 9800667788
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='text-red-500' />
              imprashantsenn@gmail.com
            </li>
          </ul>

          <ul className='mb-4 md:mb-0'> 
            <p className='pb-3 text-lg font-medium text-purple-800'>Hours</p>
            <li>Sat–Sun: 9 AM – 10 PM</li>
            <li>Mon: 9 AM – 10 PM</li>
            <li>Wed–Thurs: 6 AM – 10 PM</li>
            <li>Fri: Only: 2 PM</li>
            <li className='flex gap-1'>
              Tues: <span className='font-semibold text-red-600'>Closed</span>
            </li>
          </ul>

          <ul className='hover:cursor-pointer mb-4 md:mb-0'>
            <p className='pb-3 text-lg font-medium text-green-800'>Links</p>
            <li className='hover:underline hover:text-blue-700'>Privacy Policy</li>
            <li className='hover:underline hover:text-blue-700'>Order Tracking</li>
            <li className='hover:underline hover:text-blue-700'>Warranty</li>
            <li className='hover:underline hover:text-blue-700'>About Us</li>
            <li className='hover:underline hover:text-blue-700'>Contact</li>
            <li className='hover:underline hover:text-blue-700'>My Account</li>
          </ul>
        </div>

        <div className='flex justify-center mt-6 pb-4'>
          <footer className='text-gray-500 text-sm tracking-wide'>
            Thank you kindly for visiting us
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
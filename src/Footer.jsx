import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <div className='bg-white shadow-lg border-t border-gray-200 h-auto md:h-80 mt-20'>
        <div className='text-2xl md:text-3xl font-bold gap-3 flex text-gray-900 pt-4 ml-4 md:ml-9'> 
          <img src='img1.jpg' alt='logo' className='h-10 w-10 rounded-full object-cover border border-gray-300'/>
          <a href='#' className='hover:text-blue-600 transition-colors duration-200'>Manrash</a>
        </div>

        <div className='flex flex-col md:flex-row justify-around mt-4 md:mt-8 text-sm text-gray-700 px-4 md:px-0'> 
          <ul className='mb-4 md:mb-0'> 
            <p className='pb-3 text-lg font-semibold text-blue-700'>Contact</p>
            <li className='flex items-center gap-2 mb-2'>
              <FaMapMarkerAlt className='text-blue-600' />
              <span>Pokhara, 45 B Rajakochutara W-32</span>
            </li>
            <li className='flex items-center gap-2 mb-2'>
              <FaPhoneAlt className='text-green-600' />
              <span>+9817150202, 9800667788</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='text-red-600' />
              <span>imprashantsenn@gmail.com</span>
            </li>
          </ul>

          <ul className='mb-4 md:mb-0'> 
            <p className='pb-3 text-lg font-semibold text-purple-700'>Hours</p>
            <li className='mb-1'>Sat–Sun: 9 AM – 10 PM</li>
            <li className='mb-1'>Mon: 9 AM – 10 PM</li>
            <li className='mb-1'>Wed–Thurs: 6 AM – 10 PM</li>
            <li className='mb-1'>Fri: Only: 2 PM</li>
            <li className='flex gap-1'>
              Tues: <span className='font-semibold text-red-600'>Closed</span>
            </li>
          </ul>

          <ul className='hover:cursor-pointer mb-4 md:mb-0'>
            <p className='pb-3 text-lg font-semibold text-green-700'>Links</p>
            <li className='hover:underline hover:text-blue-600 transition-colors duration-200 mb-1'>Privacy Policy</li>
            <li className='hover:underline hover:text-blue-600 transition-colors duration-200 mb-1'>Order Tracking</li>
            <li className='hover:underline hover:text-blue-600 transition-colors duration-200 mb-1'>Warranty</li>
            <li className='hover:underline hover:text-blue-600 transition-colors duration-200 mb-1'>About Us</li>
            <li className='hover:underline hover:text-blue-600 transition-colors duration-200 mb-1'>Contact</li>
            <li className='hover:underline hover:text-blue-600 transition-colors duration-200'>My Account</li>
          </ul>
        </div>

        <div className='flex justify-center pb-4 border-t border-gray-200 pt-4'>
          <div className='text-gray-600 text-sm font-medium'>
            Thank you kindly for visiting us
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
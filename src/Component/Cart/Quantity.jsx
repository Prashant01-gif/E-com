import React from 'react'
import Addquantity from './Addquantity'
import Subquantity from './Subquantity'

const Quantity = ({ quantity, data, setCart }) => {
  return (
    <div className="flex justify-center items-center gap-4">
     
      <button
        className="w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl rounded-md text-white bg-green-700 flex items-center justify-center hover:bg-green-800 transition"
        onClick={() => Subquantity(data, setCart)}
      >
        -
      </button>

      
      <div className="text-red-800 font-bold text-base sm:text-lg md:text-xl min-w-[24px] text-center">
        {quantity}
      </div>

      
      <button
        className="w-8 h-8 sm:w-10 sm:h-10 text-xl sm:text-2xl rounded-md text-white bg-red-700 flex items-center justify-center hover:bg-red-800 transition"
        onClick={() => Addquantity(data, setCart)}
      >
        +
      </button>
    </div>
  )
}

export default Quantity

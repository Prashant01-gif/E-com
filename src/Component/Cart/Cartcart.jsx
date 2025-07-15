import React from "react";

import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const Cartcart = ({ item }) => { 

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 mb-10 mt-5"> 
      <div className="border border-gray-200 bg-white w-full max-w-4xl rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col sm:flex-row"> {/* Responsive flex direction */}
        
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0">
          <img
            src={item?.image} 
            alt={item?.name}
            className="w-full h-48 sm:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
          />
        </div>

    
        <div className="flex flex-col justify-between w-full p-4 sm:p-6"> 
         
          <div className="flex justify-between items-start w-full mb-2">
            <div className="text-gray-800 font-bold text-lg sm:text-xl font-serif pr-4"> 
              {item?.name}
            </div>
            <div className="text-red-800 text-2xl cursor-pointer"> 
              <MdOutlineRemoveShoppingCart />
            </div>
          </div>

         
          <div className="w-full mb-4">
            <div className="text-sm sm:text-base text-gray-500">
              {item?.mealType}
            </div>
          </div>

          
          <div className="flex justify-between items-center w-full">
            <div className="text-red-800 font-bold text-lg sm:text-xl">
              ${item?.caloriesPerServing} 
            </div>
            <button className="flex h-10 px-4 justify-center items-center border border-green-500 rounded-xl bg-green-500 text-white transition-colors duration-300 min-w-[80px] text-sm md:text-base hover:bg-green-600 hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcart;
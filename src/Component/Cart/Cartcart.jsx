import React from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

const Cartcart = ({ item }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-20 mt-10">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition flex flex-col sm:flex-row overflow-hidden">
        {/* Image */}
        <img
          src={item?.image}
          alt="img"
          className="w-full sm:w-48 md:w-56 lg:w-64 h-48 sm:h-auto object-cover"
        />

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-4 sm:p-6">
          {/* Top Row: Name & Remove */}
          <div className="flex justify-between items-center">
            <div className="text-gray-800 font-bold text-lg md:text-xl font-serif">
              {item?.name}
            </div>
            <button className="text-red-800 text-2xl hover:text-red-600 transition">
              <MdOutlineRemoveShoppingCart />
            </button>
          </div>

          {/* Meal type */}
          <div className="text-gray-500 text-sm md:text-base mt-2">
            {item?.mealType}
          </div>

          {/* Bottom Row: Calories & Buy */}
          <div className="flex justify-between items-center mt-4">
            <div className="text-red-800 font-bold text-base md:text-lg">
              ${item?.caloriesPerServing}
            </div>

            <button className="h-10 px-4 rounded-xl bg-green-500 text-white text-sm md:text-base shadow hover:bg-green-600 transition-colors">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcart;

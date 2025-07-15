import React from "react";
import Button from "../Navbar/Btn";

const Cartcart = (product) => {
  const item = product?.item;

  return (
    <div>
      <div className="border-gray-200 bg-white h-50 mt-10 mx-20 rounded-lg shadow-lg hover:shadow-2xl transition flex mb-10">
        <img
          src={item?.image}
          alt="img"
          className="h-full object-cover rounded-l-lg w-70   
       "
        />

        <div className="flex flex-col justify-between w-full h-full">
            <div className="flex justify-between w-full mt-5">
          <div className="text-gray-800 font-bold text-lg md:text-xl font-serif pl-40 ">
            {item?.name}
          </div>
          <div className="text-red-800 font-bold text-lg md:text-xl relative right-10  pl-40 ml-1 ">
            ${item?.caloriesPerServing}
          </div>
         
        </div>
        <div className="flex justify-between w-full mb-5">
          <div className="pb-10 text-[15px] pl-40 text-gray-500 ">
            {item?.mealType}
          </div>
          <div className="
           ">
                        
          </div>
        </div> 
              <div className="flex justify-between w-full mb-5">
          <div className="text-gray-800 font-bold text-lg md:text-xl font-serif pl-40 ">
            {item?.name}
          </div>
          <div className="mx-5  flex h-10 px-4 justify-center items-center border border-green-500 rounded-xl mt-1 bg-green-500 text-white ml-4 md:ml-40 *
          transition-colors  duration-300  min-w-[80px] text-sm md:text-base ">
            <button >
                Buy
            </button>
          </div>
        </div> 
        </div>
      </div>
    </div>
  );
};

export default Cartcart;

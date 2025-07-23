import React, { useState } from "react";

const icons = [
  { name: "All", src: "./p3.png" },
  { name: "Dinner", src: "./d2.png" },
  { name: "Lunch", src: "./L1.png" },
  { name: "Beverage", src: "./b2.png" },
  { name: "Snack", src: "./snack.png" },
];

const Categories = ({ maindata, setProductData }) => {
  const [selected,setSelected]=useState('')
  const click = (name) => {
    if (name == "All") {
      setProductData(maindata);
      setSelected(name)
    } else {
      let temp = maindata.filter((item) => item.mealType[0] == name);
      setProductData(temp);
      setSelected(name)
    }
  };
  return (
    <div className="my-4 mx-3 md:mx-8">
      <div className="text-black font-bold md:text-3xl pt-20 flex justify-center pb-10">
        Categories
      </div>
      <div className="w-fit flex gap-7 md:gap-16 lg:gap-28 mx-auto my-4 ">
        {icons.map((item) => (
          <div
            className="flex flex-col items-center gap-2 cursor-pointer text-gray-700 font-medium hover:text-black"
            key={item.name}
            onClick={() => click(item.name)}
          >
            <div className="bg-gray-300 border-gray-300 rounded-full p-2 hover:border-gray-700 hover:bg-gray-700 transition-all duration-300">
              <img
                src={item.src}
                alt=""
                className="h-12 w-12 md:h-14 md:w-14 object-cover"
              />
            </div>

            <p className={`${selected==item.name ?'md:text-xl text-red-700 ':'text-black'} p-0 m-0 text-xs sm:text-sm `}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

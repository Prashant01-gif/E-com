import React from 'react';

const Category = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-20 text-4xl font-serif">
        Category
      </div>
      <div className="flex justify-center items-center gap-20 mt-10 flex-wrap">
        <div className="text-center">
          <img
            className="h-40 w-40 rounded-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            src="soft.jpg"
            alt=""
          />
          <div className="mt-4 font-serif text-red-600 text-xl">Soft Drinks</div>
        </div>

        <div className="text-center">
          <img
            className="h-40 w-40 rounded-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            src="food.avif"
            alt=""
          />
          <div className="mt-4 font-serif text-red-600 text-xl">Fast Food</div>
        </div>

        <div className="text-center">
          <img
            className="h-40 w-40 rounded-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            src="hard.jpg"
            alt=""
          />
          <div className="mt-4 font-serif text-red-600 text-xl">Hard Drinks</div>
        </div>

        <div className="text-center">
          <img
            className="h-40 w-40 rounded-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            src="sn.jpg"
            alt=""
          />
          <div className="mt-4 font-serif text-red-600 text-xl">Snacks</div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-20 mt-16 flex-wrap">
        <div className="text-center">
          <img
            className="h-40 w-40 rounded-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            src="burger.jpg"
            alt=""
          />
          <div className="mt-4 font-serif text-red-600 text-xl">Burger</div>
        </div>

        <div className="text-center">
          <img
            className="h-40 w-40 rounded-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
            src="pza.jpeg"
            alt=""
          />
          <div className="mt-4 font-serif text-red-600 text-xl">Pizza</div>
        </div>
      </div>
    </div>
  );
};

export default Category;

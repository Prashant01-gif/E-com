import React from "react";

function Home() {
  return (
    <div className="relative h-[85vh] mx-5 mt-5">
      <div className="h-full w-full overflow-hidden rounded-3xl">
        <img
          className="h-full w-full object-cover scale-x-[-1]"
          src="pizza3.jpg"
          alt="Pizza background"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center pl-[5%] md:pl-[4%] lg:pl-[3%] pt-[10%]">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-8">
          WELCOME
        </div>

        <div className="text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold text-white max-w-[90%] md:max-w-[80%] lg:max-w-[50%] mb-6 md:mb-10">
          A trusted destination that brings comfort, reliability, and
          satisfaction together designed to make every order smooth, every
          experience enjoyable, and every moment delightful.
        </div>
        <div className="bg-red-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-3xl flex justify-center items-center text-xs sm:text-sm md:text-base mb-4 cursor-pointer w-fit">
          Enjoy 80% discount in every food
        </div>
        <div className="bg-black rounded-xl text-white py-2 px-4 sm:py-3 sm:px-6 flex justify-center items-center text-sm sm:text-base cursor-pointer w-fit">
          Order now
        </div>
      </div>
    </div>
  );
}

export default Home;

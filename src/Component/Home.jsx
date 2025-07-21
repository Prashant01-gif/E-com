import React from "react";

function Home() {
  return (
    <div className="relative h-[85vh] mx-5 mt-5">
    
      <div className="h-full w-full overflow-hidden rounded-3xl relative">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/vdo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

     
        <div className="absolute inset-0 bg-black/40"></div>


        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg mb-4">
            WELCOME
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white max-w-[80%] md:max-w-[60%] lg:max-w-[50%] backdrop-blur-md bg-black/30 p-3 rounded-lg mb-6">
            Have a Great Food — freshly served with love, comfort, and delight in every bite!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-red-600 hover:bg-red-700 transition-colors text-white py-2 px-6 rounded-full text-sm sm:text-base shadow-lg">
              Enjoy 80% Discount
            </button>
            <button className="bg-black/80 hover:bg-black text-white py-2 px-6 rounded-full text-sm sm:text-base shadow-lg">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

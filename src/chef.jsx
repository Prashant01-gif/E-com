import React from 'react';

const Chef = () => {
  return (
    <div className="px-4 py-16 bg-gradient-to-br from-gray-50 to-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
          Meet Our Chefs
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          The talented hands behind our delicious creations
        </p>
        <div className="mt-2 w-24 h-1 mx-auto bg-red-600 rounded"></div>
      </div>

      {/* Chefs */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Chef Card */}
        <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <img
            className="w-full h-64 object-cover rounded-t-3xl"
            src="dona.jpg"
            alt="Chef Dona"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Chef Dona</h3>
            <p className="text-gray-500 mt-1">Pastry Specialist</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
              View Profile
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <img
            className="w-full h-64 object-cover rounded-t-3xl"
            src="samdi.jpg"
            alt="Chef Samdi"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Chef Samdi</h3>
            <p className="text-gray-500 mt-1">Grill Master</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
              View Profile
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
          <img
            className="w-full h-64 object-cover rounded-t-3xl"
            src="jhallu.jpg"
            alt="Chef Jhallu"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Chef Jhallu</h3>
            <p className="text-gray-500 mt-1">Head Chef</p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;

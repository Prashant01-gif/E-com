import React from 'react';

const Chef = () => {
  return (
    <div className="px-4 py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800">
          Our Chefs
        </h2>
        <p className="mt-2 text-gray-500">
          Meet the talented hands behind our delicious dishes
        </p>
      </div>

      {/* Chefs */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {/* Chef Card */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="dona.jpg"
            alt="Chef Dona"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Chef Dona</h3>
            <p className="text-gray-500 text-sm mt-1">Pastry Specialist</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="samdi.jpg"
            alt="Chef Samdi"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Chef Samdi</h3>
            <p className="text-gray-500 text-sm mt-1">Grill Master</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src="jhallu.jpg"
            alt="Chef Jhallu"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Chef Jhallu</h3>
            <p className="text-gray-500 text-sm mt-1">Head Chef</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;

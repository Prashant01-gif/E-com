import React from "react";

const Dashboard = ({order, productData}) => {
  return (
    <div className="flex-1 flex p-4 sm:p-6 lg:p-8 flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 bg-gray-50 min-h-screen">
      <div className="group relative bg-white border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-64 lg:w-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-red-500/30">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">No of Products</p>
          <p className="text-2xl sm:text-3xl text-gray-800 font-bold group-hover:text-red-600 transition-colors duration-300"> 
            {productData.length}
          </p>
        </div>
      </div>

      <div className="group relative bg-white border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-64 lg:w-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-red-500/30">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">No of Orders</p>
          <p className="text-2xl sm:text-3xl text-gray-800 font-bold group-hover:text-red-600 transition-colors duration-300">
            {order.length}
          </p>
        </div>
      </div>

      <div className="group relative bg-white border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-64 lg:w-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-red-500/30">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">Total Sales</p>
          <p className="text-2xl sm:text-3xl text-gray-800 font-bold group-hover:text-red-600 transition-colors duration-300">
            10
          </p>
        </div>
      </div>

      <div className="group relative bg-white border border-gray-200 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-64 lg:w-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-red-500/30">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-sm sm:text-base font-medium text-gray-600 mb-2">Pending Orders</p>
          <p className="text-2xl sm:text-3xl text-gray-800 font-bold group-hover:text-red-600 transition-colors duration-300">
            10
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
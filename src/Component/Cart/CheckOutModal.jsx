import React from "react";

const CheckOutModal = ({ visible, setVisible }) => {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen inset-0 fixed bg-black/50 z-50 backdrop-blur-md"
      onClick={() => setVisible(false)}
    >
 <div
  className="flex flex-col gap-4 bg-white rounded-lg p-4 sm:p-6 w-[90%] max-w-md shadow-lg"
  onClick={(e) => e.stopPropagation()}
>
  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
    Checkout
  </h2>
  <form className="flex flex-col gap-3 sm:gap-4">
    <input
      type="text"
      placeholder="Full Name"
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
    />
    <input
      type="email"
      placeholder="Email Address"
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
    />
    <input
      type="text"
      placeholder="Shipping Address"
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
    />
    <button
      type="submit"
      className="bg-red-700 text-white font-medium py-2 rounded-md hover:bg-red-800 transition text-sm sm:text-base"
    >
      Place Order
    </button>
  </form>
</div>


    </div>  
  );
};

export default CheckOutModal;

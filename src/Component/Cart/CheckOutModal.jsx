import React from "react";
import Userdetails from "./Userdetails";
import Totalamount from "../CustomFunction/Totalamount";

const CheckOutModal = ({ visible, setVisible, cart }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md z-50 p-4"
      onClick={() => setVisible(false)}
    >
      <div
        className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col space-y-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
    
        <div className="text-orange-600 font-bold text-2xl text-center mb-2">
          Check out
        </div>

        <div>
          <div className="grid grid-cols-3 font-semibold text-gray-700 border-b pb-1 text-center">
            <div>Food</div>
            <div>Quantity</div>
            <div>Price</div>
          </div>

          <div className="flex flex-col space-y-1 mt-1">
            {cart?.map((item, index) => (
              <div key={index} className="grid grid-cols-3 py-2 text-center">
                <div>{item.name}</div>
                <div>{item.quantity}</div>
                <div>${item.caloriesPerServing * item.quantity}</div>
              </div>
            ))}
          </div>

        
          <div className="flex justify-center mt-2 text-lg font-semibold">
            Total:{" "}
            <span className="text-orange-600 ml-2">${Totalamount(cart)}</span>
          </div>
        </div>

      
        <Userdetails />
      </div>
    </div>
  );
};

export default CheckOutModal;

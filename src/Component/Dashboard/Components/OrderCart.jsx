import React from "react";
import { LuDot } from "react-icons/lu";

const OrderCard = ({ data }) => {
  return (
    <div className="border border-red-300 h-fit p-4 rounded-lg bg-red-50 w-full text-red-700 text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="space-y-3">
        <div className="text-base font-semibold text-red-900 border-b border-red-200 pb-2">
          Customer Details
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 w-full">
          <p className="font-semibold text-red-800">{data.cName}</p> 
          <p className="text-red-600">{data.contactNumber}</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-1">
          <p className="text-red-700">
            <span>{data.city}</span>
          </p>
          <p className="text-red-700">
            <span>{data.street}</span>
          </p>
        </div>
        <div className="w-full bg-white p-3 rounded border border-red-200">
          <p className="font-semibold text-red-800 mb-1">Delivery Details:</p>
          <p className="text-red-600 text-sm">{data.deliveryDescription}</p>
        </div>
      </div>
      
      <div className="mt-5 space-y-3">
        <div className="text-base font-semibold text-red-900 border-b border-red-200 pb-2">
          Items
        </div>
        <div className="flex justify-between w-full bg-red-100 p-3 rounded border border-red-200">
          <p className="font-semibold text-red-800">Total Amount =</p>
          <p className="font-semibold text-red-900">{data.totalAmount}</p>
        </div>
        <div className="w-full space-y-2">
          {data.items.map((item, index) => (
            <div key={index} className="flex w-full justify-between items-center bg-white p-3 rounded border border-red-100">
              <div className="flex gap-2 items-center">
                <LuDot />
                <p className="text-red-700">{item.itemName}</p>
              </div>
              <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-semibold">
                {item.quantity}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
import React from "react";

function Model({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
     onClick={onClose}
    >
      <div className="bg-white rounded-2xl w-[90%] max-w-3xl h-[75%] flex "
      onClick={(e)=>{
        e.stopPropagation()
      }}
      >
        <div className="md:w-1/2 w-full h-64 md:h-full">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover h-full w-full"
          />
        </div>

        <div className="flex flex-col justify-between p-6 md:w-1/2 w-full">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {item.name}
            </h2>
            <p className="text-gray-600 mt-4">
              {item.instructions}
            </p>
          </div>

          <button
           
            className="mt-6 md:mt-auto bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;

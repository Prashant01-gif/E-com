import React from "react";

function Model({ item, onClose, added, onAddToCart }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
    
        <div className="md:w-1/2 w-full h-56 md:h-auto">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover h-full w-full rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
          />
        </div>

      
        <div className="flex flex-col justify-between p-4 md:p-6 md:w-1/2 w-full">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {item.name}
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              {item.instructions}
            </p>
          </div>

          <div className="mt-4">
            {!added ? (
              <button
                onClick={onAddToCart}
                className="bg-red-700 rounded-xl px-4 py-2 text-white text-sm md:text-base shadow-lg hover:shadow-2xl transition w-full"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex justify-center">
                <button
                  className="bg-green-600 rounded-xl px-4 py-2 text-white text-sm md:text-base shadow-lg w-full"
                >
                  Added to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;

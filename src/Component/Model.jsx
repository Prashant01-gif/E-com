import React from "react";

function Model({ item, onClose, added, onAddToCart }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-2"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl transition-all duration-300"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Image Section */}
        <div className="md:w-1/2 w-full h-56 md:h-auto">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover h-full w-full rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between p-5 md:p-7 md:w-1/2 w-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {item.pName}
            </h2>
            <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
              {item.description}
            </p>

            <p className="text-yellow-500 font-medium mt-3 text-sm md:text-base">
              ⭐ {item.rating}
            </p>

            <p className="text-lg md:text-xl font-semibold text-gray-800 mt-3">
              ${item.price}
            </p>
          </div>

          {/* Button */}
          <div className="mt-6">
            {!added ? (
              <button
                onClick={onAddToCart}
                className="bg-red-600 hover:bg-red-700 rounded-xl px-5 py-3 text-white font-medium text-sm md:text-base shadow-md hover:shadow-lg transition-all duration-300 w-full"
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="bg-green-600 rounded-xl px-5 py-3 text-white font-medium text-sm md:text-base shadow-md w-full cursor-not-allowed"
              >
                Added to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;

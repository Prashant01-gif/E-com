import React, { useEffect, useState } from "react";
import Chef from "./chef";
import ProductDataApi from "./Component/Api/productdata.api";
import Model from "./Component/Model";
import AddToCart from "./Component/localStorage/AddTOCart";
import Button from "./Component/Navbar/Btn";
import { useNavigate } from "react-router";

function Card({ item, onImageClick, added, onAddToCart }) {
  const { pName, image, description, rating = 0, price } = item;
  const navigate = useNavigate();

  // Get user role from localStorage
  const userData = JSON.parse(localStorage.getItem("userDetail"));
  const isAdmin = userData?.role === "admin";

  // Function to render stars from rating
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span
          key={i}
          className={i <= Math.floor(rating) ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 mx-auto w-full max-w-xs sm:max-w-none mb-5">
      {/* Product Image */}
      <img
        onClick={onImageClick}
        className="rounded-md w-full h-56 object-cover cursor-pointer"
        src={image}
        alt={pName}
      />

      {/* Product Info */}
      <div className="mt-3">
        <h2 className="text-gray-800 font-semibold text-lg line-clamp-1">
          {pName}
        </h2>

        {/* Rating */}
        <div className="flex items-center mt-1 text-sm">
          {renderStars(rating)}
          <span className="ml-1 text-gray-500">({rating})</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
          {description}
        </p>

        {/* Price + Buttons */}
        <div className="flex justify-between items-center mt-3 gap-2">
          <p className="text-red-600 font-bold text-lg">${price}</p>

          <div className="flex gap-2">
            {/* Show Edit button only if user is admin */}
            {isAdmin && (
              <button
                onClick={() => navigate("/Productdata")}
                className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1.5 rounded-md shadow-sm transition duration-150"
              >
                Edit
              </button>
            )}

            {!added ? (
              <button
                onClick={onAddToCart}
                className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded-md shadow-sm transition duration-150"
              >
                Add to Cart
              </button>
            ) : (
              <button
                className="bg-green-500 text-white text-xs px-3 py-1.5 rounded-md shadow-sm cursor-default"
              >
                ✓ Added
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


function Section({ title, items, onImageClick, addedItems, onAddToCart }) {
  return (
    <>
      <div className="text-black font-bold text-2xl md:text-3xl pt-20 flex justify-center pb-10">
        {title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 mb-5 px-2 sm:px-0">
        {items.map((item) => {
          // Use _id if available, otherwise use id, or generate a fallback key
          const itemKey = item._id || item.id || `item-${item.pName}-${Math.random()}`;
          const itemId = item._id || item.id;
          
          return (
            <Card
              key={itemKey}
              item={item}
              onImageClick={() => onImageClick(item)}
              added={addedItems[itemId]}
              onAddToCart={() => onAddToCart(item)}
            />
          );
        })}
      </div>
    </>
  );
}

function Items({ productData }) {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedItems, setAddedItems] = useState({});

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (item) => {
    // Use _id if available, otherwise use id
    const itemId = item._id || item.id;
    setAddedItems((prev) => ({ ...prev, [itemId]: true }));
    console.log(item);
    AddToCart(item);
  };

  // Add safety check for productData
  if (!productData || !Array.isArray(productData)) {
    return (
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-gray-600">Loading products...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <Section
        title="Recipes"
        items={productData}
        onImageClick={handleImageClick}
        addedItems={addedItems}
        onAddToCart={handleAddToCart}
      />

      {showModal && selectedProduct && (
        <Model
          item={selectedProduct}
          onClose={handleCloseModal}
          added={addedItems[selectedProduct._id || selectedProduct.id]}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}
    </div>
  );
}

export default Items;
import React, { useEffect, useState } from "react";
import Chef from "./chef";
import ProductDataApi from "./Component/Api/productdata.api";
import Model from "./Component/Model";
import AddToCart from "./Component/localStorage/AddTOCart";

function Card({ item, onImageClick, added, onAddToCart }) {
  const { name, price, image, mealType } = item;

  return (
    <div className="border-gray-200 bg-white p-4 shadow-lg hover:shadow-2xl transition mx-auto w-full max-w-xs sm:max-w-none">
      <img
        onClick={onImageClick}
        className="rounded-lg w-full h-48 object-cover cursor-pointer"
        src={image}
        alt={name}
      />
      <div>
        <h2 className="text-gray-800 font-bold text-lg md:text-xl font-serif p-2">
          {name}
        </h2>
        <h2 className="text-sm text-gray-500 px-2">
          {mealType}
        </h2>
        <div className="flex justify-between items-center mt-2 px-2">
          <p className="text-red-700 font-semibold text-base md:text-lg">
            ${item?.caloriesPerServing}
          </p>

          {!added ? (
            <button
              onClick={onAddToCart}
              className="border-red-700 bg-red-700 rounded-xl px-3 md:px-4 py-1 md:py-2 text-white text-sm md:text-base shadow-lg hover:shadow-2xl transition"
            >
              Add to Cart
            </button>
          ) : (
            <button
              className="bg-green-600 rounded-xl px-3 md:px-4 py-1 md:py-2 text-white text-sm md:text-base shadow-lg"
            >
              Added to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({ title, items, onImageClick, addedItems, onAddToCart }) {
  return (
    <>
      <div className="flex justify-center items-center mt-10 md:mt-20 text-3xl md:text-4xl font-serif">
        {title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 mb-5 px-2 sm:px-0">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
            onImageClick={() => onImageClick(item)}
            added={addedItems[item.id]}
            onAddToCart={() => onAddToCart(item)}
          />
        ))}
      </div>
    </>
  );
}

function Items() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedItems, setAddedItems] = useState({});

  useEffect(() => {
    ProductDataApi(setProductData).finally(() => setLoading(false));
  }, []);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (item) => {
    setAddedItems((prev) => ({ ...prev, [item.id]: true }));
    console.log(item);
    AddToCart(item);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {loading ? (
        <div className="text-center py-20 text-lg">Loading...</div>
      ) : (
        <Section
          title="Recipes"
          items={productData}
          onImageClick={handleImageClick}
          addedItems={addedItems}
          onAddToCart={handleAddToCart}
        />
      )}

      {showModal && selectedProduct && (
        <Model
          item={selectedProduct}
          onClose={handleCloseModal}
          added={addedItems[selectedProduct.id]}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}
    </div>
  );
}

export default Items;

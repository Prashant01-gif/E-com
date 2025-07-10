import React, { useEffect, useState } from "react";
import Chef from './chef';
import ProductDataApi from "./Component/Api/productdata.api";

function Card({ name, price, image }) {
  return (
    <div className="border-gray-200 bg-white p-4 shadow-lg hover:shadow-2xl transition mx-auto w-full max-w-xs sm:max-w-none">
      <img className="rounded-lg w-full h-48 object-cover" src={image} alt={name} />
      <div>
        <h2 className="text-gray-800 font-bold text-lg md:text-xl font-serif p-2">{name}</h2>
        <div className="flex justify-between items-center mt-2 px-2">
          <p className="text-red-700 font-semibold text-base md:text-lg">
            Price: $100
          </p>
          <button className="border-red-700 bg-red-700 rounded-xl px-3 md:px-4 py-1 md:py-2 text-white text-sm md:text-base shadow-lg hover:shadow-2xl transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <>
      <div className="flex justify-center items-center mt-10 md:mt-20 text-3xl md:text-4xl font-serif">
        {title}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-5 mb-5 px-2 sm:px-0">
        {items.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

function Items() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ProductDataApi(setProductData).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center text-2xl mt-20">
        Loading products...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <Section title="Recipes" items={productData} />
      <Chef />
    </div>
  );
}

export default Items;

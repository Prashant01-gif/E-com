import React, { useEffect } from "react";
import Chef from './chef'
import ProductDataApi from "./Component/Api/productdata.api";

const Product =()=> {

  useEffect(()=>{
    ProductDataApi();

  },[]);
}
const foodItems = [
{ name: "Pizza", desc: "Hot and Spicy", price: "$19.00", img: "pza.jpeg" },
  { name: "Burger", desc: "Hot and Spicy", price: "$19.00", img: "burger.jpg" },
  { name: "HotDog", desc: "Hot and Spicy", price: "$19.00", img: "hotdogg.jpg" },
  { name: "Momo", desc: "Hot and Spicy", price: "$19.00", img: "momo3.webp" },
  { name: "French fry", desc: "Hot and Spicy", price: "$19.00", img: "fch.jpeg" },
  { name: "Chewmin", desc: "Hot and Spicy", price: "$19.00", img: "ch.jpg" },
  { name: "Prashant", desc: "Creamy and Spicy", price: "$19.00", img: "prashant.webp" },
  { name: "Gulab Jamun", desc: "Sweet", price: "$19.00", img: "gulabjamun.jpg" },
  { name: "Biryani", desc: "Hot and Spicy", price: "$19.00", img: "miya.jpg" },
  { name: "Arrabbiata pasta", desc: "Sweet and Spicy", price: "$19.00", img: "pasta.jpeg" },
  { name: "Dal Tadka", desc: "Yellow lentils cooked with spices", price: "$19.00", img: "dal.webp" },
  { name: "Chicken fry", desc: "Hot and Spicy", price: "$19.00", img: "chicken.jpg" },
];

const softDrinks = [
  { name: "Coke", desc: "Cold and fresh", price: "$19.00", img: "coke.jpeg" },
  { name: "Dr Pepper", desc: "Cold and freezy", price: "$19.00", img: "pepper.jpg" },
  { name: "Sprite", desc: "Cold", price: "$19.00", img: "sp.jpg" },
  { name: "Fanta", desc: "Sweet and cold", price: "$19.00", img: "fanta.webp" },
  { name: "RedBull", desc: "Cold", price: "$19.00", img: "redbull.webp" },
  { name: "Mountain Dew", desc: "Der ki yeshi ki tyesi", price: "$19.00", img: "dew.webp" },
];

const hardDrinks = [
  { name: "Russo-Baltique Vodka", desc: "Cold and fresh", price: "$1.3 million", img: "rv1.jpg" },
  { name: "Château Wine", desc: "Cold and freezy", price: "$1100,000 per bottle.", img: "rv2.avif" },
  { name: "Rum", desc: "Cold", price: "$1M per bottle", img: "rum.jpg" },
  { name: "Tequila Ley .925", desc: "Sweet and cold", price: "$3M per bottle", img: "rv3.jpg" },
  { name: "Henri IV Dudognon", desc: "Cold", price: "$3M per bottle", img: "rv4.jpeg" },
  { name: "Armand de", desc: "Cold", price: "$1M", img: "rv6.png" },
];

function Card({ name, desc, price, img }) {
  return (
    <div className="border-gray-200 bg-white p-4 shadow-lg hover:shadow-2xl transition mx-auto w-full max-w-xs sm:max-w-none">
      <img className="rounded-lg w-full h-48 object-cover" src={img} alt={name} />
      <div>
        <h2 className="text-gray-800 font-bold text-lg md:text-xl font-serif p-2">{name}</h2>
        <p className="text-gray-500">{desc}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="text-blue-700 text-base md:text-lg font-bold">{price}</div>
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
        {items.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </>
  );
}

function Items() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <Section title="Food Items" items={foodItems} />
      <Section title="Soft Drinks" items={softDrinks} />
      <Section title="Hard Drinks" items={hardDrinks} />
      <Chef/>
    </div>
  );
}


export default Items;

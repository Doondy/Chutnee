import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Menu.css";
import Paneerbuttermasala from "../assets/Paneerbuttermasala.jpg";
import Vegbiryani from "../assets/Vegbiryani.jpg";
import Chutnewiththali from "../assets/Chutnewiththali.jpg";

const sampleMenu = [
  { id: 1, name: "Paneer Butter Masala", price: 250, image: Paneerbuttermasala },
  { id: 2, name: "Veg Biryani", price: 180, image: Vegbiryani },
  { id: 3, name: "ChutNee Special Thali", price: 320, image: Chutnewiththali },
];

export default function Menu() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-items">
        {sampleMenu.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-img" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
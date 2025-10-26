import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Menu.css";

const sampleMenu = [
  { id: 1, name: "Paneer Butter Masala", price: 250, image: "../assets/PaneerButterMasala.jpg" },
  { id: 2, name: "Veg Biryani", price: 180, image: "../assets/VegBiryani.jpg" },
  { id: 3, name: "ChutNee Special Thali", price: 320, image: "../assets/ChutneeThali.jpg" },
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
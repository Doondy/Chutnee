import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Order() {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <p>Your cart is empty. Please add items from Menu.</p>;
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Order Summary</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <h2>Total: ₹{totalPrice}</h2>
      <button>Place Order</button>
    </div>
  );
}
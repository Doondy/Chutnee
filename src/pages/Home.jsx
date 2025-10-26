import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <div className="home-content">
          <h1>Welcome to <span className="brand-name">ChutNee</span></h1>
          <p>Delicious meals delivered to your doorstep, fresh & hot every time!</p>
          <Link to="/menu">
            <button className="order-now-btn">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; 
import logo from "../assets/logo.png"; 


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={logo} alt="ChutNee Logo" />
          <span className="navbar-title">ChutNee</span>
        </div>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/order">Order</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
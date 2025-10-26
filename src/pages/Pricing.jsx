import React from "react";
import "../styles/Pricing.css";

export default function Pricing() {
  const plans = [
    { name: "Basic", price: "₹199", details: "1 meal per day" },
    { name: "Standard", price: "₹499", details: "2 meals per day" },
    { name: "Premium", price: "₹899", details: "3 meals + snack" },
  ];

  return (
    <section className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p>{plan.details}</p>
            <button>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}
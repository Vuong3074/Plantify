import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${import.meta.env.BASE_URL}bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: 24,
        color: "white",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.35)",
          padding: 28,
          borderRadius: 8,
          maxWidth: 900,
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 44, margin: 0 }}>🌿 Plantify</h1>
        <p style={{ maxWidth: 700, margin: "12px auto", fontSize: 18 }}>
          Plantify — your friendly online houseplant shop. We offer curated, easy-care plants
          that brighten your space and purify the air. Explore categories and add your favorites to the cart.
        </p>
        <Link to="/products">
          <button
            style={{
              background: "var(--green)",
              color: "white",
              padding: "10px 18px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

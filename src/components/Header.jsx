import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const totalItems = useSelector((s) => s.cart.totalQuantity);
  const loc = useLocation();

  return (
    <header className="header">
      <div style={{ fontWeight: 700, fontSize: 20 }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>🌿 Plantify</Link>
      </div>

      <nav style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <Link to="/products" style={{ color: "white", textDecoration: loc.pathname === "/products" ? "underline" : "none" }}>
          Products
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: loc.pathname === "/cart" ? "underline" : "none", display: "flex", alignItems: "center", gap: 6 }}>
          <span>🛒</span>
          <span>Cart</span>
          <span style={{ background: "rgba(255,255,255,0.15)", padding: "2px 8px", borderRadius: 12 }}>{totalItems}</span>
        </Link>
      </nav>
    </header>
  );
}

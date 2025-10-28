import React from "react";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center", padding: 12, background: "white", borderRadius: 8, marginBottom: 8 }}>
      <img src={item.img} alt={item.name} style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 6 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 700 }}>{item.name}</div>
        <div style={{ color: "#4a5568" }}>${item.price} each</div>
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button className="small-btn" onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <div>{item.quantity}</div>
        <button className="small-btn" onClick={() => dispatch(increaseQty(item.id))}>+</button>
      </div>

      <div style={{ width: 90, textAlign: "right", fontWeight: 700 }}>${(item.price * item.quantity).toFixed(2)}</div>

      <div>
        <button onClick={() => dispatch(removeFromCart(item.id))}>🗑️</button>
      </div>
    </div>
  );
}

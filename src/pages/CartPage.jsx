import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(s => s.cart);
  const list = Object.values(items);

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {totalQuantity === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/products"><button style={{ background: "var(--green)", color: "white" }}>Browse Plants</button></Link>
        </>
      ) : (
        <>
          <div style={{ display: "grid", gap: 8 }}>
            {list.map(item => <CartItem key={item.id} item={item} />)}
          </div>

          <div style={{ marginTop: 16, textAlign: "right" }}>
            <div style={{ fontWeight: 700 }}>Total Items: {totalQuantity}</div>
            <div style={{ fontWeight: 700, marginBottom: 8 }}>Total Cost: ${totalPrice.toFixed(2)}</div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
              <button className="small-btn" onClick={() => dispatch(clearCart())} style={{ background: "var(--muted)", color: "white" }}>
                Clear Cart
              </button>

              <button className="small-btn" onClick={() => alert("Coming Soon")} style={{ background: "#718096", color: "white" }}>
                Checkout (Coming Soon)
              </button>

              <Link to="/products">
                <button style={{ background: "var(--green)", color: "white" }}>Continue Shopping</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

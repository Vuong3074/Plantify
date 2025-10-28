import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PlantCard from "../components/PlantCard";
import { addToCart } from "../redux/cartSlice";

export default function ProductListingPage() {
  const dispatch = useDispatch();
  const items = useSelector(s => s.cart.items);

  const plants = [
    { id: "1", name: "Snake Plant", price: 15.00, category: "Low Light", img: "/plants/snake.png" },
    { id: "2", name: "Monstera", price: 25.00, category: "Tropical", img: "/plants/monstera.png" },
    { id: "3", name: "Succulent", price: 10.00, category: "Desert", img: "/plants/succulent.png" },
    { id: "4", name: "Peace Lily", price: 20.00, category: "Flowering", img: "/plants/lily.png" },
    { id: "5", name: "Aloe Vera", price: 12.00, category: "Desert", img: "/plants/aloe.png" },
    { id: "6", name: "Pothos", price: 18.00, category: "Low Light", img: "/plants/pothos.png" },
  ];

  // derive categories for display (at least 3)
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div className="container">
      <h2 style={{ marginTop: 6 }}>Shop Our Plants</h2>
      <p style={{ color: "#4a5568" }}>Categories: {categories.join(" • ")}</p>

      <div className="grid" style={{ marginTop: 12 }}>
        {plants.map((p) => (
          <PlantCard
            key={p.id}
            plant={p}
            onAdd={() => dispatch(addToCart(p))}
            disabled={!!items[p.id]}
          />
        ))}
      </div>
    </div>
  );
}

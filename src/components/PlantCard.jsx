import React from "react";

export default function PlantCard({ plant, onAdd, disabled }) {
  return (
    <div className="card">
      <img
        src={`${import.meta.env.BASE_URL}${plant.img.startsWith('/') ? plant.img.slice(1) : plant.img}`}
        alt={plant.name}
        style={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderRadius: 6,
        }}
      />
      <div style={{ paddingTop: 8 }}>
        <div style={{ fontWeight: 700 }}>{plant.name}</div>
        <div style={{ color: "var(--muted)", marginBottom: 8 }}>${plant.price}</div>
        <button
          className="add"
          onClick={onAdd}
          disabled={disabled}
        >
          {disabled ? "Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

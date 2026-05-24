import React from "react";

function ProductCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>Price: ₹{props.price}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;

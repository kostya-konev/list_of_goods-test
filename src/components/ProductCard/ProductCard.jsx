import React from "react";
import './ProductCard.scss';

export const ProductCard = ({ product }) => {

  if (product === null) {
    return;
  } else {
    return (
      <div className="App__card">
        <div>{product.name}</div>
        <div>{product.count}</div>
        <div>{product.weight}</div>
      </div>
    )
  }
}
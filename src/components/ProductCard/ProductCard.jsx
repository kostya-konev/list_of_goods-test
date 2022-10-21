import React, { useState } from "react";
import './ProductCard.scss';
import { EditProduct } from "../EditProduct/EditProduct";

export const ProductCard = ({ product }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  if (product === null) {
    return;
  } else {
    return (
      <div className="App__card">
        <span className="card-sign">Your good here 22 &#128071;</span>
        <div className="card" style={{ "width": "18rem" }}>
          <img className="card-img-top" src={product.imageUrl} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title product-name">{product.name}</h5>
            <p className="card-text">{product.comment}</p>
          </div> 
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.count}</li>
            <li className="list-group-item">{product.size.width}</li>
            <li className="list-group-item">{product.size.height}</li>
            <li className="list-group-item">{product.weight}</li>
          </ul>
          <div className="card-body">
            <button onClick={() => setIsEditOpen(true)} className="btn btn-link">Edit</button>
          </div>
        </div>

        {isEditOpen && 
          <EditProduct
            setIsEditOpen={setIsEditOpen}
            selectedProduct={product}
            productId={product.id}
          />}
      </div>
    )
  }
}
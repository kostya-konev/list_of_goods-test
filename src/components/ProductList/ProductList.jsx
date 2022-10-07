import React, { useState } from "react";
import './ProductList.scss';

export const ProductList = ({
  products,
  setIsModalOpened,
  deleteProduct,
  setSelectedId,
  onReverse,
  onSortByAmount 
}) => {
  const [isDeleteChosen, setIsDeleteChosen] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0);

  return (
    <div className="App__list">
      <ul className="products">
        {products.map(product => (
          <li
            key={Math.random()}
            className='product'
          >
            <span>
              {product.name}
            </span>

            <button
              type="button"
              className="list-button btn btn-warning"
              onClick={() => {
                setIdToDelete(product.id)
                setIsDeleteChosen(true)
              }}
            >
              Delete
            </button>

            <button
              type="button"
              className="list-button btn btn-info"
              onClick={() => {
                setIsDeleteChosen(false)
                setSelectedId(product.id)
              }}
            >
              Select
            </button>
          </li>
        ))}
      </ul>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button" id="dropdownMenuButton"
          data-toggle="dropdown" 
          aria-haspopup="true" 
          aria-expanded="false"
        >
          Sort
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button onClick={() => onReverse()} className="dropdown-item">Reverse</button>
          <button onClick={() => onSortByAmount()} className="dropdown-item">Sort by amount</button>
        </div>
      </div>

      <div className="App__button-add">
        <button
          className="btn btn-primary"
          onClick={() => setIsModalOpened(true)}
        >
          Add product
        </button>
      </div>

      {isDeleteChosen && (
        <div className="confirmation-message">
          <h5>Do uou really want to delete it?</h5>

          <div className="buttons">
            <button className='button' onClick={() => setIsDeleteChosen(false)}>No</button>
            <button className='button' onClick={() => {
              deleteProduct(idToDelete)
              setIsDeleteChosen(false)
            }}>Yes</button>
          </div>
        </div>
      )}
    </div>
  )
}
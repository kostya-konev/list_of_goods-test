import React, { useState } from "react";
import './NewProduct.scss';

export const NewProduct = ({ addProduct, products, setIsModalOpened }) => {

  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [comment, setComment] = useState('');
  return (
    <div className="App__form">
      You can add some good here
      <span style={{'fontSize': '100px'}}>&#128521;</span>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const newProduct = {
            id: products[products.length - 1].id + 1,
            imageUrl: url,
            name: name,
            count: count,
            size: {
              width: width,
              height: height,
            },
            weight: weight,
            comment: comment,
          };

          addProduct(newProduct);
        }}
      >
        <input
          className="form-control input"
          placeholder="image url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <input
          className="form-control input"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="form-control input"
          placeholder="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          required
        />
        <input
          className="form-control input"
          placeholder="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
        <input
          className="form-control input"
          placeholder="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          className="form-control input"
          placeholder="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          className="form-control input"
          placeholder="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          minLength={5}
        />
        <div className="controllers">
          <button type='submit' className="btn btn-secondary">Confirm</button>
          <button onClick={() => setIsModalOpened(false)} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  )
}
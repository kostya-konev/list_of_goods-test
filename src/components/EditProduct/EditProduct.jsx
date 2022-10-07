import React, { useState, useContext } from "react";
import './EditProduct.scss';
import { MyContext } from "../../App";

export const EditProduct = ({ setIsEditOpen, productId, selectedProduct }) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [comment, setComment] = useState('');
  const context = useContext(MyContext);

  const reset = () => {
    setUrl('');
    setName('');
    setCount('');
    setWidth('');
    setHeight('');
    setWeight('');
    setComment('');
  };

  return (
    <div className="App__edit">
       <form
        onSubmit={(event) => {
          event.preventDefault();
          const newProduct = {
            id: context[context.length - 1].id + 1,
            imageUrl: url || selectedProduct.imageUrl,
            name: name || selectedProduct.name,
            count: count || selectedProduct.count,
            size: {
              width: width || selectedProduct.size.width,
              height: height || selectedProduct.size.height,
            },
            weight: weight || selectedProduct.size.weight,
            comment: [comment] | selectedProduct.comment,
          };

          fetch(`http://localhost:3000/products/${productId}`, {
            method: 'PATCH',
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(newProduct),
          });
          reset();
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
          <button onClick={() => setIsEditOpen(false)} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import './App.scss';
import { ProductList } from './components/ProductList/ProductList';
import productsFromServer from './server/db.json';
import { ProductCard } from './components/ProductCard/ProductCard';
import { NewProduct } from './components/NewProduct/NewProduct'


export const App = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);

    setProducts(updatedProducts);
  };

  const addProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]); 
  };

  useEffect(() => {
    // fetch('http://localhost:3000/products')
    //   .then(res => res.json())
    //   .then(products => setProducts(products))

    setProducts(productsFromServer.products);
  }, []);

  useEffect(() => {
    const selectedGood = products.find(good => good.id === selectedId);

    setSelectedProduct(selectedGood);
  }, [selectedId, products]);

  return (
    <div className="App">
      <ProductList
        products={products}
        setIsModalOpened={setIsModalOpened}
        deleteProduct={deleteProduct}
        setSelectedId={setSelectedId}
      />
      {isModalOpened && <NewProduct addProduct={addProduct} products={products} setIsModalOpened={setIsModalOpened} />}
      {selectedProduct && <ProductCard product={selectedProduct} />}
    </div>
  );
};

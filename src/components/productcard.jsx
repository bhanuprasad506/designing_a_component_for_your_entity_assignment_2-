import '../styles/productCard.css';
import React from 'react';
import ViewProductButton from "./ViewProductButton";


const ProductCard = () => {
  // Dummy static details for product
  const productImage = 'https://via.placeholder.com/150';
  const productName = 'Sample Product';
  const productPrice = '$99.99';

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} />
      <h3>{productName}</h3>
      <p>{productPrice}</p>
      <ViewProductButton />
    </div>
  );
};

export default ProductCard;
import '../styles/productCard.css';

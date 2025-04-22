// src/components/ViewProductButton/ViewProductButton.jsx
import React from 'react';

const ViewProductButton = () => {
  const handleClick = () => {
    alert('Redirecting to product details page');
  };

  return (
    <button onClick={handleClick} className="view-product-button">
      View Product
    </button>
  );
};

export default ViewProductButton;

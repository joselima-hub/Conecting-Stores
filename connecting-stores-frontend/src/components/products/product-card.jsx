import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-2">Loja: {product.store}</p>
      <p className="text-blue-600 font-bold text-xl">€ {product.price}</p>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    store: PropTypes.string,
  }).isRequired,
};

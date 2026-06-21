import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product, setPage, setSelectedProductId }) {
  const { addToCart } = useContext(CartContext);

  const handleViewDetails = () => {
    setSelectedProductId(product.id);
    setPage('detail');
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="relative overflow-hidden bg-gray-100 aspect-square cursor-pointer" onClick={handleViewDetails}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
          {product.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 onClick={handleViewDetails} className="font-semibold text-gray-900 text-lg hover:text-indigo-600 cursor-pointer transition line-clamp-1 mb-1">
          {product.name}
        </h3>
        <div className="flex items-center space-x-1 mb-4">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-sm text-gray-500 font-medium">{product.rating}</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-gray-900 hover:bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-xl transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
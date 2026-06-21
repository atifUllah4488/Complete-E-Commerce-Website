import React, { useContext, useState } from 'react';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

export default function ProductDetail({ productId, setPage }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === productId);

  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <button onClick={() => setPage('shop')} className="text-sm font-semibold text-gray-500 hover:text-gray-900 mb-8 flex items-center gap-2 transition">
        ← Back to Catalog
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6">
          <span className="bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
          
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-700 font-bold">{product.rating}</span>
            <span className="text-sm text-gray-400">| Customer Approved</span>
          </div>

          <p className="text-3xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <hr className="border-gray-100" />

          {/* Quantity Controls and Actions */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-4 py-2.5 text-gray-600 hover:bg-gray-100 font-bold transition"
              >
                -
              </button>
              <span className="px-4 font-semibold text-gray-900">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="px-4 py-2.5 text-gray-600 hover:bg-gray-100 font-bold transition"
              >
                +
              </button>
            </div>

            <button 
              onClick={() => addToCart(product, quantity)}
              className="flex-1 bg-gray-900 hover:bg-indigo-600 text-white font-semibold py-3 rounded-xl transition shadow-sm"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart({ setPage }) {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="max-w-md mx-auto text-center py-24 px-4 animate-fadeIn">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added anything to your order catalog yet.</p>
        <button onClick={() => setPage('shop')} className="bg-gray-900 text-white font-medium px-6 py-2.5 rounded-xl hover:bg-indigo-600 transition">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Cart Item Row List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm gap-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-50 border border-gray-100 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-base line-clamp-1">{item.name}</h3>
                  <p className="text-sm text-gray-400 capitalize">{item.category}</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">${item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6">
                <div className="flex items-center border border-gray-100 rounded-xl bg-gray-50">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1.5 text-gray-500 hover:bg-gray-100 font-bold transition">-</button>
                  <span className="px-2 font-medium text-sm text-gray-900">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1.5 text-gray-500 hover:bg-gray-100 font-bold transition">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition p-1">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Bill Summary */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-6">
          <h2 className="text-lg font-bold text-gray-900">Order Summary</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-semibold text-gray-900">${getCartTotal().toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="text-green-600 font-semibold">Free</span></div>
          </div>
          <hr className="border-gray-200" />
          <div className="flex justify-between text-base font-bold text-gray-900">
            <span>Total Price</span><span>${getCartTotal().toFixed(2)}</span>
          </div>
          <button onClick={() => setPage('checkout')} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition text-center shadow-sm block">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
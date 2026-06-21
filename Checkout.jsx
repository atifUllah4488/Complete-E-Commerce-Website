import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Checkout({ setPage }) {
  const { getCartTotal, clearCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '', zip: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (!!errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid";
    }
    if (!formData.address.trim()) tempErrors.address = "Shipping Address is required";
    if (!formData.zip.trim()) tempErrors.zip = "ZIP/Postal Code is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      clearCart();
    }
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto text-center py-24 px-4 animate-fadeIn">
        <div className="w-16 h-16 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">✓</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
        <p className="text-gray-500 mb-6">Thank you for your purchase. Your tracking logic details have been dispatched mock-style.</p>
        <button onClick={() => setPage('home')} className="bg-gray-900 text-white font-medium px-6 py-2.5 rounded-xl hover:bg-indigo-600 transition">
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout Details</h1>
      
      <form onSubmit={handleSubmit} className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : 'border-gray-200'}`} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-200'}`} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Shipping Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.address ? 'border-red-500' : 'border-gray-200'}`} />
          {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP / Postal Code</label>
          <input type="text" name="zip" value={formData.zip} onChange={handleInputChange} className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.zip ? 'border-red-500' : 'border-gray-200'}`} />
          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
        </div>

        <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center text-gray-900 border border-gray-100">
          <span className="font-medium text-sm text-gray-600">Total Due:</span>
          <span className="text-xl font-bold">${getCartTotal().toFixed(2)}</span>
        </div>

        <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition shadow-sm">
          Complete Mock Payment
        </button>
      </form>
    </div>
  );
}
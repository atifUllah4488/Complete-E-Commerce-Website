import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Navbar({ setPage }) {
  const { getCartCount } = useContext(CartContext);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div onClick={() => setPage('home')} className="text-xl font-bold tracking-wider text-gray-900 cursor-pointer">
            NEXUS<span className="text-indigo-600">.</span>
          </div>
          <div className="hidden md:flex space-x-8 font-medium text-gray-600">
            <button onClick={() => setPage('home')} className="hover:text-indigo-600 transition">Home</button>
            <button onClick={() => setPage('shop')} className="hover:text-indigo-600 transition">Shop</button>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setPage('cart')} className="relative p-2 text-gray-700 hover:text-indigo-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
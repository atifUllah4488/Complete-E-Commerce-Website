import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home({ setPage, setSelectedProductId }) {
  const featured = products.slice(0, 3);

  return (
    <div className="space-y-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-indigo-950 text-white rounded-3xl overflow-hidden mx-4 my-6 lg:mx-8">
        <div className="max-w-4xl px-8 py-20 md:py-32 space-y-6 relative z-10">
          <span className="text-xs tracking-widest text-indigo-400 font-bold uppercase bg-indigo-500/10 px-3 py-1 rounded-full">New Season Collection</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            The Next Generation of <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Minimalist Essentials</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl">
            Discover precision-crafted gear designed to simplify and elevate your everyday architecture.
          </p>
          <button 
            onClick={() => setPage('shop')}
            className="bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-indigo-50 transition duration-200"
          >
            Explore Shop
          </button>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Releases</h2>
            <p className="text-gray-500 mt-1">Handpicked premium designs trending this week.</p>
          </div>
          <button onClick={() => setPage('shop')} className="text-indigo-600 font-semibold hover:text-indigo-700 transition">
            View All Products →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              setPage={setPage} 
              setSelectedProductId={setSelectedProductId} 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
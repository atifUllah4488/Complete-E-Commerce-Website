import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Shop({ setPage, setSelectedProductId }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('default');

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || product.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0; 
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-fadeIn">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Catalog</h1>

      {/* Filters Control Toolbar */}
      <div className="bg-gray-50 rounded-2xl p-4 mb-10 flex flex-col lg:flex-row gap-4 items-center justify-between border border-gray-100">
        <div className="w-full lg:max-w-xs relative">
          <input 
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl pl-4 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
        </div>

        <div className="flex flex-wrap w-full lg:w-auto gap-4 items-center justify-end">
          {/* Category Select */}
          <div className="flex space-x-1 bg-white p-1 rounded-xl border border-gray-200">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${category === cat ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Select */}
          <select 
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="default">Default Sorting</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Dynamic Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              setPage={setPage} 
              setSelectedProductId={setSelectedProductId} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No products found fitting your search criteria.</p>
        </div>
      )}
    </div>
  );
}
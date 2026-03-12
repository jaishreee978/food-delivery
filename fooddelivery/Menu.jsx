import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Our Menu</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mt-2">Freshly Made For You</h3>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            onClick={() => setActiveCategory("All")}
            className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm border ${activeCategory === "All" ? "bg-primary text-white border-primary" : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-6 py-2 rounded-full font-semibold transition-all shadow-sm border ${activeCategory === cat.title ? "bg-primary text-white border-primary" : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.title}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium">
            No products found for this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;

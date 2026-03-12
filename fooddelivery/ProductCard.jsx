import React from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-green-50/50 group"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "0px" }}
      whileHover={{ y: -5 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 flex items-center space-x-1 rounded-full text-xs font-bold text-gray-800 shadow-sm border border-gray-100">
          <FiStar className="text-yellow-400" />
          <span>{product.rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">{product.category}</p>
        <h4 className="text-xl font-bold text-gray-900 mb-4 line-clamp-1 group-hover:text-primary transition-colors">{product.name}</h4>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-black text-gray-900">
            ${product.price}
          </span>
          <motion.button 
            onClick={() => addToCart(product)}
            className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-green-200 hover:bg-green-600 focus:ring focus:ring-green-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Add ${product.name} to cart`}
          >
            <FiShoppingCart size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

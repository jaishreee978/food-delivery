import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
  ];

  const handleScroll = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary font-poppins">Juco Foods</span>
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary transition font-medium">Home</Link>
            <Link to="/menu" className="text-gray-600 hover:text-primary transition font-medium">Menu</Link>
            <button onClick={() => handleScroll('offers')} className="text-gray-600 hover:text-primary transition font-medium">Offers</button>
            <button onClick={() => handleScroll('about')} className="text-gray-600 hover:text-primary transition font-medium">About</button>
            <button onClick={() => handleScroll('contact')} className="text-gray-600 hover:text-primary transition font-medium">Contact</button>
            
            <Link to="/cart" className="relative p-2 text-primary hover:bg-green-50 rounded-full transition">
              <FiShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-primary">
              <FiShoppingCart size={24} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-green-100"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md">Home</Link>
              <Link to="/menu" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md">Menu</Link>
              <button onClick={() => handleScroll('offers')} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md">Offers</button>
              <button onClick={() => handleScroll('about')} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md">About</button>
              <button onClick={() => handleScroll('contact')} className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-green-50 rounded-md">Contact</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

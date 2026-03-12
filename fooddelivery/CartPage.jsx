import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50/50">
        <div className="w-32 h-32 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <FiShoppingBag size={48} className="text-primary opacity-50" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-sm text-center">Looks like you haven't added any fresh juices or healthy shakes to your cart yet.</p>
        <Link to="/menu" className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition duration-300">
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50/30 min-h-screen border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 tracking-tight">Shopping Cart <span className="text-primary">({cart.length})</span></h1>

        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="w-full lg:w-2/3 space-y-4">
            {cart.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center p-4 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-2xl" />
                
                <div className="flex-1 ml-6">
                  <p className="text-xs font-semibold text-secondary uppercase tracking-wider">{item.category}</p>
                  <Link to={`/menu`} className="text-lg font-bold text-gray-900 hover:text-primary transition">{item.name}</Link>
                  <p className="text-primary font-black mt-1">${item.price}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 ml-4">
                  <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition shadow-sm text-gray-500"
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-gray-800">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white hover:text-primary transition shadow-sm text-gray-500"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="text-lg font-black text-gray-800 min-w-[60px] text-right">
                      ${item.price * item.quantity}
                    </span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition p-2 hover:bg-red-50 rounded-full"
                      title="Remove item"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-gray-100 pb-6">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Subtotal</span>
                  <span className="text-gray-900 font-bold">${cartTotal}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Shipping</span>
                  <span className="text-green-500 font-bold">Free</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium tracking-wide">
                  <span>Tax</span>
                  <span className="text-gray-900 font-bold">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-3xl font-black text-primary">${cartTotal}</span>
              </div>
              
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-green-500/30 hover:bg-green-600 transition flex items-center justify-center space-x-2">
                <span>Checkout</span>
                <FiArrowRight />
              </button>
              
              <div className="mt-6 text-center text-sm text-gray-500 font-medium flex items-center justify-center space-x-2">
                <span>🔒 Secure checkout provided by Juco</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Graphic/Gradient Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-primary text-sm font-semibold mb-4 border border-green-200 shadow-sm">
              100% Natural Ingredients 🌱
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Refresh Your  <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Day Naturally</span>
          </h1>
          <p className="text-xl text-gray-600 font-medium max-w-lg mx-auto md:mx-0">
            Fresh Juices • Healthy Shakes • Natural Coconut Products
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link to="/menu" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 hover:shadow-green-500/50 hover:-translate-y-1 transition-all duration-300">
              Order Now
            </Link>
            <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-bold rounded-full shadow-md hover:bg-gray-50 border border-gray-100 hover:-translate-y-1 transition-all duration-300">
              Explore More
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2 relative flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Main Hero Image overlay */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10">
             <img src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80" alt="Fresh Juice" className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700" />
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-10 -right-4 md:-right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 z-20 flex items-center space-x-3"
          >
             <span className="text-3xl">🥥</span>
             <div>
               <p className="text-sm font-bold text-gray-800">Fresh Coconut</p>
               <p className="text-xs text-gray-500">Zero sugar</p>
             </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-4 md:-left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 z-20 flex items-center space-x-3"
          >
             <span className="text-3xl">🍓</span>
             <div>
               <p className="text-sm font-bold text-gray-800">Berry Shakes</p>
               <p className="text-xs text-gray-500">Premium quality</p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

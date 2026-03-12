import React from 'react';
import { motion } from 'framer-motion';

const Offers = () => {
  return (
    <section id="offers" className="py-20 bg-green-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Special Deals</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mt-2">Offers You Can't Resist</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-xl aspect-video group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-90 transition-opacity group-hover:opacity-100 z-0"></div>
            <img src="https://images.unsplash.com/photo-1546173159-315724a31696?w=500&q=80" alt="Buy 1 Get 1" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
            <div className="relative z-10 p-8 flex flex-col justify-center h-full">
              <span className="bg-white text-orange-500 font-bold px-3 py-1 rounded-full text-xs self-start mb-4 uppercase tracking-wider">Limited Time</span>
              <h4 className="text-3xl font-black text-white mb-2 leading-tight">Buy 1 <br/> Get 1 Juice</h4>
              <p className="text-orange-50 font-medium mb-6">On all fresh fruit juices</p>
              <button className="bg-white text-orange-500 font-bold px-6 py-2 rounded-full self-start hover:bg-gray-50 transition shadow-lg">Claim Offer</button>
            </div>
          </motion.div>

          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-xl aspect-video group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-400 opacity-90 transition-opacity group-hover:opacity-100 z-0"></div>
            <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&q=80" alt="Smoothies" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
            <div className="relative z-10 p-8 flex flex-col justify-center h-full">
              <span className="bg-white text-green-600 font-bold px-3 py-1 rounded-full text-xs self-start mb-4 uppercase tracking-wider">Summer Hot</span>
              <h4 className="text-3xl font-black text-white mb-2 leading-tight">Summer <br/> Specials</h4>
              <p className="text-green-50 font-medium mb-6">25% off on all smoothies</p>
              <button className="bg-white text-green-600 font-bold px-6 py-2 rounded-full self-start hover:bg-gray-50 transition shadow-lg">Claim Offer</button>
            </div>
          </motion.div>

          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-xl aspect-video group md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-400 to-cyan-400 opacity-90 transition-opacity group-hover:opacity-100 z-0"></div>
            <img src="https://images.unsplash.com/photo-1522012168383-09418ed1ba77?w=500&q=80" alt="Coconut Drink" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" />
            <div className="relative z-10 p-8 flex flex-col justify-center h-full">
              <span className="bg-white text-blue-500 font-bold px-3 py-1 rounded-full text-xs self-start mb-4 uppercase tracking-wider">Healthy Choice</span>
              <h4 className="text-3xl font-black text-white mb-2 leading-tight">Coconut <br/> Health Drinks</h4>
              <p className="text-blue-50 font-medium mb-6">Stay hydrated & refreshed</p>
              <button className="bg-white text-blue-500 font-bold px-6 py-2 rounded-full self-start hover:bg-gray-50 transition shadow-lg">Explore</button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Offers;

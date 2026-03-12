import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/products';
import { FiDroplet, FiCoffee, FiStar, FiSun } from 'react-icons/fi';
import { GiCoconuts } from 'react-icons/gi';

const iconMap = {
  juice: <FiDroplet size={32} className="text-secondary" />,
  shake: <FiCoffee size={32} className="text-primary" />,
  salad: <FiStar size={32} className="text-orange-400" />,
  coconut_shake: <FiSun size={32} className="text-yellow-400" />,
  coconut: <GiCoconuts size={32} className="text-green-700" />,
};

const Categories = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Discover</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mt-2">Our Fresh Categories</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-green-50 hover:shadow-xl transition-shadow cursor-pointer flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-green-100 transition-all duration-300">
                {iconMap[cat.icon]}
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{cat.title}</h4>
              <p className="text-xs text-gray-500 line-clamp-2">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

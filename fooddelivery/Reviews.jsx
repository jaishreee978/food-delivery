import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const reviewsData = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "Best fresh juices in town! The mango juice is absolutely divine and the packaging is great.",
    rating: 5,
    role: "Regular Customer"
  },
  {
    id: 2,
    name: "Michael Davis",
    text: "Loved the coconut shakes! It's difficult to find such authentic tender coconut flavor.",
    rating: 5,
    role: "Food Blogger"
  },
  {
    id: 3,
    name: "Emily Thompson",
    text: "Healthy and delicious drinks. I order the seasonal fruit mix every weekend.",
    rating: 4,
    role: "Fitness Coach"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(state => state === 0 ? reviewsData.length - 1 : state - 1);
  };

  const next = () => {
    setCurrentIndex(state => state === reviewsData.length - 1 ? 0 : state + 1);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Testimonials</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mt-2">What Our Customers Say</h3>
        </div>

        <div className="relative">
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-green-50 transition"
          >
            <FiChevronLeft size={24} />
          </button>

          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white px-8 md:px-16 py-12 text-center"
              >
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(reviewsData[currentIndex].rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>
                <p className="text-2xl text-gray-700 font-medium italic mb-8 leading-relaxed">
                  "{reviewsData[currentIndex].text}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{reviewsData[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{reviewsData[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-green-50 transition"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {reviewsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

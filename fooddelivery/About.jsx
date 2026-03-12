import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const features = [
    "100% Natural",
    "Farm Fresh",
    "No Preservatives",
    "Zero Added Sugar Options"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3">
              <img 
                src="https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80" 
                alt="Fresh ingredients" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 shadow-lg inline-block">
                  <p className="text-primary font-bold text-xl">Trusted by</p>
                  <p className="text-gray-800 text-sm font-medium border-t border-gray-200 pt-1 mt-1">10,000+ happy customers</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">Our Story</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Purity in Every <span className="text-primary">Sip</span>.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Juco Foods is a healthy beverage shop offering fresh fruit juices, delicious milkshakes, fruit salads, and coconut-based drinks made from natural ingredients. We believe that healthy choices should also be the most delicious ones.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg border border-gray-100"
                  whileHover={{ scale: 1.05, backgroundColor: "#f0fdf4" }}
                >
                  <FiCheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="font-semibold text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              className="mt-6 px-8 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

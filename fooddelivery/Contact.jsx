import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          
          <div className="w-full lg:w-5/12 bg-primary p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-extrabold mb-4">Get in Touch</h3>
                <p className="text-green-50 font-medium mb-12">
                  Have a question or want to order in bulk? Drop us a message and we'll be happy to assist you!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold">Shop Address</p>
                      <p className="text-green-100 text-sm mt-1">123 Fresh Lane, Juice City, NY 10012</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold">Phone Number</p>
                      <p className="text-green-100 text-sm mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div className="ml-4">
                      <p className="font-bold">Email Address</p>
                      <p className="text-green-100 text-sm mt-1">hello@jucofoods.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl overflow-hidden shadow-inner h-48 bg-green-600/30 border border-green-500/50 flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80)' }}></div>
                 <span className="relative z-10 font-bold bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg">Google Maps Location</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 p-12">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white" 
                    placeholder="john@example.com" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white" 
                  placeholder="How can we help?" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  required 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors bg-gray-50 focus:bg-white resize-none" 
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-green-600 hover:shadow-green-500/30 transition-all focus:ring focus:ring-green-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

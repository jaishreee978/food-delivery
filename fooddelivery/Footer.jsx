import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary font-poppins">Juco Foods</h3>
            <p className="text-sm text-gray-500">
              Fresh juices, delicious milkshakes, fruit salads, and natural coconut products for a healthier lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FiFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FiInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><FiTwitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>Monday - Friday: 8:00 AM - 10:00 PM</li>
              <li>Saturday: 9:00 AM - 11:00 PM</li>
              <li>Sunday: 9:00 AM - 9:00 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-start"><FiMapPin className="mr-2 mt-1 flex-shrink-0 text-primary" /> 123 Fresh Lane, Juice City, NY 10012</li>
              <li className="flex items-center"><FiPhone className="mr-2 text-primary" /> +1 (555) 123-4567</li>
              <li className="flex items-center"><FiMail className="mr-2 text-primary" /> hello@jucofoods.com</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Juco Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

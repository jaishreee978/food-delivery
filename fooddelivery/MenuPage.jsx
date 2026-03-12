import React, { useEffect } from 'react';
import Menu from '../components/Menu';

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="bg-primary/5 py-16 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Full <span className="text-primary">Menu</span></h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our complete selection of fresh juices, milkshakes, fruit salads, and coconut products.
          </p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default MenuPage;

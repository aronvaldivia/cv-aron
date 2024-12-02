import React from 'react';
import { Code2 } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full h-20 z-10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 pt-4">
          <div className="flex items-center gap-2">
            
            <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/a469f9b8-da28-7f56-507e-03b041e19ef6.png"
                  alt="logo"
                 width={80}
                />
             
            <span className="text-xl font-bold text-gray-800"></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-emerald-00 hover:text-blue-700 transition-colors">
              Sobre Mí
            </a>
         
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
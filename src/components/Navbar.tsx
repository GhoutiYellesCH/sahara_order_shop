
import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', nameAr: 'الرئيسية', href: '#home' },
    { name: 'Produits', nameAr: 'المنتجات', href: '#products' },
    { name: 'À propos', nameAr: 'من نحن', href: '#about' },
    { name: 'Contact', nameAr: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-amber-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DZ</span>
            </div>
            <span className="font-bold text-xl text-gray-900">DZ Store</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200 group"
              >
                <span className="block">{item.name}</span>
                <span className="text-xs text-gray-500 group-hover:text-green-500">{item.nameAr}</span>
              </a>
            ))}
            
            {/* Admin Link */}
            <Link
              to="/admin"
              className="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              <Settings className="w-4 h-4 mr-1" />
              Admin
            </Link>
            
            {/* Language Switcher */}
            <div className="flex items-center bg-amber-100 rounded-full p-1">
              <button className="w-8 h-8 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center">
                FR
              </button>
              <button className="w-8 h-8 rounded-full text-gray-600 text-xs font-bold flex items-center justify-center">
                AR
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-amber-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-amber-50 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="block font-medium">{item.name}</span>
                  <span className="text-xs text-gray-500">{item.nameAr}</span>
                </a>
              ))}
              <Link
                to="/admin"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-amber-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings className="w-4 h-4 mr-2" />
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

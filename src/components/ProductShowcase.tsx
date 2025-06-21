
import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Théière Traditionnelle Kabyle',
      nameAr: 'إبريق شاي قبائلي تقليدي',
      price: '3,500',
      originalPrice: '4,200',
      image: 'https://images.unsplash.com/photo-1582654271143-c4b1b2b7a6e8?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 124,
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Panier Artisanal Berbère',
      nameAr: 'سلة أمازيغية يدوية',
      price: '2,800',
      originalPrice: '3,500',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      badge: 'Artisanal'
    },
    {
      id: 3,
      name: 'Tapis Ghardaïa Authentique',
      nameAr: 'سجادة غرداية أصيلة',
      price: '12,500',
      originalPrice: '15,000',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      rating: 5.0,
      reviews: 67,
      badge: 'Premium'
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Produits Phares
          </h2>
          <p className="text-xl text-gray-600 mb-2" dir="rtl">
            منتجاتنا المميزة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>
                
                {/* Heart Icon */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
                
                {/* Quick Add to Cart */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors duration-200">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Ajouter au Panier</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3" dir="rtl">{product.nameAr}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{product.price} DA</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice} DA</span>
                  </div>
                  
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Commander
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Voir Tous les Produits
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

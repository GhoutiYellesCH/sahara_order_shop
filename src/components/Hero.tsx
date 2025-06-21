
import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';

const Hero = () => {
  const scrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(245, 158, 11, 0.9) 0%, rgba(146, 64, 14, 0.8) 100%), url('data:image/svg+xml;utf8,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><polygon points="30,0 60,30 30,60 0,30"/></g></svg>')`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Arabic Text */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg" dir="rtl">
            تسوّق بكل فخر من الجزائر
          </h1>
          
          {/* French Text */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-amber-100 drop-shadow-md">
            Faites vos achats avec fierté en Algérie
          </h2>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-amber-50 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'artisanat authentique algérien • منتجات تراثية أصيلة من الجزائر
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-amber-100">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 fill-current" />
              <span>Qualité Authentique</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Livraison à Domicile</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-5 h-5 text-center font-bold">💰</span>
              <span>Paiement à la Livraison</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
            <button
              onClick={scrollToOrder}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="block">أطلب الآن</span>
              <span className="text-sm opacity-90">Commander maintenant</span>
            </button>
            
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Découvrir nos Produits
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-50 to-transparent" />
    </section>
  );
};

export default Hero;

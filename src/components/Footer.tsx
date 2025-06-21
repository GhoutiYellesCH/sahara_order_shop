
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DZ</span>
              </div>
              <span className="font-bold text-xl">DZ Store</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre boutique en ligne pour l'artisanat algérien authentique. 
              Nous célébrons la richesse culturelle de l'Algérie à travers nos produits soigneusement sélectionnés.
            </p>
            <p className="text-gray-300 text-sm" dir="rtl">
              متجرك الإلكتروني للحرف اليدوية الجزائرية الأصيلة
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Accueil</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Produits</a></li>
              <li><a href="#order-section" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Commander</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors duration-200">À propos</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Service Client</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Livraison & Retours</li>
              <li>Guide des Tailles</li>
              <li>Suivi de Commande</li>
              <li>FAQ</li>
              <li>Conditions d'Utilisation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+213 XX XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">contact@dzstore.dz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Alger, Algérie</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DZ Store. Tous droits réservés. Made with ❤️ in Algeria
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-200">
                Conditions d'Utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

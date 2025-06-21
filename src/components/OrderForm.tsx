
import React, { useState } from 'react';
import { MapPin, Phone, User, Package, CheckCircle } from 'lucide-react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    wilaya: '',
    phone: '',
    product: 'Théière Traditionnelle Kabyle'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const wilayas = [
    'Adrar', 'Chlef', 'Laghouat', 'Oum El Bouaghi', 'Batna', 'Béjaïa', 'Biskra', 'Béchar',
    'Blida', 'Bouira', 'Tamanrasset', 'Tébessa', 'Tlemcen', 'Tiaret', 'Tizi Ouzou', 'Alger',
    'Djelfa', 'Jijel', 'Sétif', 'Saïda', 'Skikda', 'Sidi Bel Abbès', 'Annaba', 'Guelma',
    'Constantine', 'Médéa', 'Mostaganem', 'MSila', 'Mascara', 'Ouargla', 'Oran', 'El Bayadh',
    'Illizi', 'Bordj Bou Arréridj', 'Boumerdès', 'El Tarf', 'Tindouf', 'Tissemsilt', 'El Oued',
    'Khenchela', 'Souk Ahras', 'Tipaza', 'Mila', 'Aïn Defla', 'Naâma', 'Aïn Témouchent',
    'Ghardaïa', 'Relizane'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call - replace with actual API call later
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Order submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="order-section" className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="mb-6">
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Commande Confirmée!</h2>
              <p className="text-xl text-green-600 mb-4" dir="rtl">تم تأكيد طلبك بنجاح!</p>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Détails de votre commande:</h3>
                <p><strong>Nom:</strong> {formData.name}</p>
                <p><strong>Produit:</strong> {formData.product}</p>
                <p><strong>Wilaya:</strong> {formData.wilaya}</p>
                <p><strong>Téléphone:</strong> {formData.phone}</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-800">
                <strong>📞 Notre équipe vous contactera sous 24h pour confirmer les détails de livraison.</strong>
              </p>
              <p className="text-sm text-amber-700 mt-2">
                Paiement: À la livraison (Cash on Delivery)
              </p>
            </div>
            
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Nouvelle Commande
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order-section" className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Passez Votre Commande
          </h2>
          <p className="text-xl text-gray-600 mb-2" dir="rtl">
            اطلب منتجك الآن
          </p>
          <p className="text-lg text-gray-600">
            Livraison gratuite • Paiement à la livraison • Service client 24/7
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left side - Form */}
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Selection */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Package className="w-4 h-4 mr-2" />
                    Produit à Commander
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    required
                  >
                    <option value="Théière Traditionnelle Kabyle">Théière Traditionnelle Kabyle - 3,500 DA</option>
                    <option value="Panier Artisanal Berbère">Panier Artisanal Berbère - 2,800 DA</option>
                    <option value="Tapis Ghardaïa Authentique">Tapis Ghardaïa Authentique - 12,500 DA</option>
                  </select>
                </div>

                {/* Name */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 mr-2" />
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom complet"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    required
                    minLength={2}
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Adresse Complète
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Rue, quartier, commune..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>

                {/* Wilaya */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    Wilaya
                  </label>
                  <select
                    name="wilaya"
                    value={formData.wilaya}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    required
                  >
                    <option value="">Sélectionnez votre wilaya</option>
                    {wilayas.map((wilaya) => (
                      <option key={wilaya} value={wilaya}>{wilaya}</option>
                    ))}
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="0X XX XX XX XX"
                    pattern="^0[567][0-9]{8}$"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Format: 05/06/07 suivi de 8 chiffres</p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </div>
                  ) : (
                    'Confirmer ma Commande 🚀'
                  )}
                </button>
              </form>
            </div>

            {/* Right side - Summary */}
            <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-amber-500 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🇩🇿</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">100% Algérien</h4>
                    <p className="text-sm text-white/90">Produits authentiques fabriqués localement</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🚚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Livraison Rapide</h4>
                    <p className="text-sm text-white/90">Livraison dans toute l'Algérie sous 3-7 jours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💰</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Paiement Sécurisé</h4>
                    <p className="text-sm text-white/90">Payez uniquement à la réception</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Garantie Qualité</h4>
                    <p className="text-sm text-white/90">Satisfait ou remboursé sous 7 jours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-center">
                  <strong>🎉 Offre Spéciale!</strong><br />
                  Livraison gratuite pour toute commande aujourd'hui
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;

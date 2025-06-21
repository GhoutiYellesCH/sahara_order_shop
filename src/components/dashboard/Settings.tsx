
import React, { useState } from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    siteName: 'DZ E-Commerce',
    currency: 'DA',
    defaultDeliveryFee: 500,
    orderIdPrefix: 'DZ',
    maxOrdersPerDay: 50,
    autoConfirmOrders: false,
    emailNotifications: true,
    smsNotifications: false
  });

  const handleSave = () => {
    console.log('Settings saved:', settings);
    // Here you would typically save to a backend
    alert('Paramètres sauvegardés avec succès!');
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">Paramètres du Site</h3>
          <button
            onClick={handleSave}
            className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Save className="w-4 h-4 mr-2" />
            Sauvegarder
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du Site
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({...settings, siteName: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Devise
            </label>
            <select
              value={settings.currency}
              onChange={(e) => setSettings({...settings, currency: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="DA">Dinar Algérien (DA)</option>
              <option value="EUR">Euro (€)</option>
              <option value="USD">Dollar US ($)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Frais de Livraison par Défaut (DA)
            </label>
            <input
              type="number"
              value={settings.defaultDeliveryFee}
              onChange={(e) => setSettings({...settings, defaultDeliveryFee: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Préfixe ID Commande
            </label>
            <input
              type="text"
              value={settings.orderIdPrefix}
              onChange={(e) => setSettings({...settings, orderIdPrefix: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre Max de Commandes par Jour
            </label>
            <input
              type="number"
              value={settings.maxOrdersPerDay}
              onChange={(e) => setSettings({...settings, maxOrdersPerDay: parseInt(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="border-t pt-6">
          <h4 className="text-md font-medium text-gray-900 mb-4">Notifications</h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="autoConfirm"
                checked={settings.autoConfirmOrders}
                onChange={(e) => setSettings({...settings, autoConfirmOrders: e.target.checked})}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="autoConfirm" className="ml-2 text-sm text-gray-700">
                Confirmer automatiquement les commandes
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotif"
                checked={settings.emailNotifications}
                onChange={(e) => setSettings({...settings, emailNotifications: e.target.checked})}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="emailNotif" className="ml-2 text-sm text-gray-700">
                Notifications par email
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="smsNotif"
                checked={settings.smsNotifications}
                onChange={(e) => setSettings({...settings, smsNotifications: e.target.checked})}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="smsNotif" className="ml-2 text-sm text-gray-700">
                Notifications par SMS
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

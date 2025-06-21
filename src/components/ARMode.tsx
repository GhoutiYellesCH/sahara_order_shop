
import React, { useState } from 'react';
import { Camera, Eye, RotateCcw, Download, X } from 'lucide-react';

interface ARModeProps {
  product: {
    name: string;
    image: string;
    price: number;
  };
  onClose: () => void;
}

const ARMode = ({ product, onClose }: ARModeProps) => {
  const [isARActive, setIsARActive] = useState(false);
  const [arSupported, setArSupported] = useState(true);

  const startAR = () => {
    // Check if AR is supported (in a real implementation, you'd check for WebXR support)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setIsARActive(true);
    } else {
      setArSupported(false);
    }
  };

  const stopAR = () => {
    setIsARActive(false);
  };

  const takeScreenshot = () => {
    // In a real implementation, this would capture the AR view
    console.log('Screenshot taken of AR view');
    alert('Capture d\'écran sauvegardée!');
  };

  if (!arSupported) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md mx-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Mode AR Non Supporté</h3>
          <p className="text-gray-600 mb-6">
            Votre appareil ne supporte pas la réalité augmentée. 
            Veuillez utiliser un appareil compatible ou un navigateur récent.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* AR Interface Header */}
      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 z-10">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm opacity-75">{product.price.toLocaleString()} DA</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* AR Camera View */}
      <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
        {!isARActive ? (
          <div className="text-center text-white">
            <div className="w-32 h-32 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Camera className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mode Réalité Augmentée</h3>
            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Visualisez comment ce produit s'intégrera dans votre espace. 
              Pointez votre caméra vers l'endroit où vous souhaitez placer l'objet.
            </p>
            <button
              onClick={startAR}
              className="bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center mx-auto"
            >
              <Eye className="w-5 h-5 mr-2" />
              Démarrer l'AR
            </button>
          </div>
        ) : (
          <>
            {/* Simulated AR View */}
            <div className="w-full h-full bg-gradient-to-b from-blue-900 to-blue-700 relative overflow-hidden">
              {/* Simulated camera feed background */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
              </div>
              
              {/* AR Object Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-64 h-64 object-contain opacity-90 shadow-2xl"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}
                  />
                  <div className="absolute inset-0 border-2 border-green-400 rounded-lg animate-pulse"></div>
                </div>
              </div>

              {/* AR Instructions */}
              <div className="absolute top-20 left-4 right-4 text-center">
                <div className="bg-black bg-opacity-50 text-white p-3 rounded-lg">
                  <p className="text-sm">
                    Déplacez votre appareil pour positionner l'objet
                  </p>
                </div>
              </div>
            </div>

            {/* AR Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6">
              <div className="flex justify-center space-x-6">
                <button
                  onClick={takeScreenshot}
                  className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
                >
                  <Download className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={() => console.log('Rotate object')}
                  className="w-14 h-14 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200"
                >
                  <RotateCcw className="w-6 h-6 text-white" />
                </button>
                
                <button
                  onClick={stopAR}
                  className="w-14 h-14 bg-red-500 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-white text-sm opacity-75">
                  Appuyez sur les boutons pour capturer, faire pivoter ou arrêter l'AR
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ARMode;

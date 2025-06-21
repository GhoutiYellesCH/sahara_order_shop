
import React from 'react';
import { Star, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Star,
      title: 'Qualité Premium',
      titleAr: 'جودة متميزة',
      description: 'Produits artisanaux authentiques sélectionnés avec soin',
      descriptionAr: 'منتجات حرفية أصيلة مختارة بعناية'
    },
    {
      icon: Award,
      title: 'Savoir-faire Traditionnel',
      titleAr: 'خبرة تقليدية',
      description: 'Préservation des techniques ancestrales algériennes',
      descriptionAr: 'الحفاظ على التقنيات الجزائرية التراثية'
    },
    {
      icon: Users,
      title: 'Artisans Locaux',
      titleAr: 'حرفيون محليون',
      description: 'Soutien direct aux artisans de toutes les régions',
      descriptionAr: 'دعم مباشر للحرفيين من جميع المناطق'
    },
    {
      icon: Globe,
      title: 'Livraison Nationale',
      titleAr: 'توصيل وطني',
      description: 'Livraison dans toutes les wilayas d\'Algérie',
      descriptionAr: 'توصيل لجميع ولايات الجزائر'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos de DZ Store</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            Votre destination privilégiée pour l'artisanat algérien authentique
          </p>
          <p className="text-lg text-gray-500" dir="rtl">
            وجهتك المفضلة للحرف اليدوية الجزائرية الأصيلة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Mission</h3>
            <p className="text-gray-600 mb-4">
              DZ Store est né de la passion de préserver et promouvoir le riche patrimoine artisanal algérien. 
              Nous connectons les artisans talentueux de toutes les régions d'Algérie avec les amateurs 
              d'authenticité et de qualité.
            </p>
            <p className="text-gray-600 mb-6">
              Chaque produit raconte une histoire, porte en lui des siècles de savoir-faire et représente 
              l'excellence de l'artisanat traditionnel algérien.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg" dir="rtl">
              <p className="text-gray-700">
                متجر DZ وُلد من شغف الحفاظ على التراث الحرفي الجزائري الغني وترقيته. 
                نحن نربط الحرفيين الموهوبين من جميع مناطق الجزائر بعشاق الأصالة والجودة.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Produits Uniques</div>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Artisans Partenaires</div>
            </div>
            <div className="bg-amber-100 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">48</div>
              <div className="text-sm text-gray-600">Wilayas Couvertes</div>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-sm text-gray-600">Clients Satisfaits</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
              <div className="border-t pt-3" dir="rtl">
                <h5 className="text-md font-medium text-gray-800 mb-1">{feature.titleAr}</h5>
                <p className="text-sm text-gray-500">{feature.descriptionAr}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

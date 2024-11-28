import React from 'react';
import { Code, Layout, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: 'Développement Logiciel Sur Mesure',
    description: 'Solutions personnalisées conçues pour répondre à vos défis commerciaux uniques.',
    icon: Code,
  },
  {
    title: 'Développement Web',
    description: 'Applications web réactives et dynamiques utilisant les technologies les plus récentes.',
    icon: Layout,
  },
  {
    title: 'Développement Mobile',
    description: 'Applications mobiles natives et multiplateformes pour iOS et Android.',
    icon: Smartphone,
  },
  {
    title: 'Solutions Cloud',
    description: 'Infrastructure cloud évolutive et services de déploiement sécurisés.',
    icon: Globe,
  },
];

export function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nos Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Des solutions logicielles complètes pour dynamiser votre entreprise
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
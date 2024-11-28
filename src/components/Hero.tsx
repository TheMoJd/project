import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div id="home" className="relative bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Transformez Vos Idées En</span>
          <span className="block text-indigo-600">Solutions Logicielles Innovantes</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Nous créons des solutions logicielles de pointe qui stimulent l'innovation et offrent des résultats exceptionnels aux entreprises du monde entier.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            Commencer
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200">
            En Savoir Plus
          </a>
        </div>
      </div>
    </div>
  );
}
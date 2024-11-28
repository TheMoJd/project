import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">Nova Advanced Solutions</span>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Politique de Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 text-sm">
              Conditions d'Utilisation
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © 2024 Nova Advanced Solutions. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
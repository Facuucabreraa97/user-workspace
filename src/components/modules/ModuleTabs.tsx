'use client'

import { useState } from 'react';
import { modules } from '@/data/modules';
import ModuleCard from './ModuleCard';

export default function ModuleTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = [
    { name: 'Todos', modules: modules },
    { name: 'Básicos', modules: modules.filter(m => m.difficulty === 'beginner') },
    { name: 'Intermedios', modules: modules.filter(m => m.difficulty === 'intermediate') },
    { name: 'Avanzados', modules: modules.filter(m => m.difficulty === 'advanced') }
  ];

  return (
    <section id="modulos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Módulos de Formación
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Domina el trading de criptomonedas con nuestros módulos especializados. 
            Desbloquea contenido exclusivo suscribiéndote a nuestros planes.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === index
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-75">
                  ({category.modules.length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories[activeTab].modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        {categories[activeTab].modules.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay módulos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}

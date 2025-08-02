'use client'

import { useAuth } from '@/components/auth/AuthContext';
import { Module } from '@/data/modules';
import { useState } from 'react';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const { hasAccessToModule, setShowSubscriptionPopup, setSelectedModule } = useAuth();
  const [showPreview, setShowPreview] = useState(false);
  
  const hasAccess = hasAccessToModule(module.id);
  
  const handleModuleClick = () => {
    if (hasAccess) {
      // Navigate to full content
      console.log('Access granted to:', module.title);
    } else {
      setSelectedModule(module.id);
      setShowSubscriptionPopup(true);
    }
  };

  return (
    <div className="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      {!hasAccess && (
        <div className="absolute inset-0 bg-black/5 rounded-lg pointer-events-none">
          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
            BLOQUEADO
          </div>
        </div>
      )}
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
          <p className="text-gray-600 text-sm">{module.description}</p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{module.duration}</span>
          <span>•</span>
          <span>{module.lessons} lecciones</span>
          <span>•</span>
          <span className="capitalize">{module.difficulty}</span>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-gray-700">
            {showPreview ? module.previewContent : module.previewContent.substring(0, 100) + '...'}
          </p>
          
          <div className="flex gap-2">
            {!hasAccess && (
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="text-sm text-gray-600 hover:text-gray-900 underline"
              >
                {showPreview ? 'Ver menos' : 'Ver más'}
              </button>
            )}
            
            <button
              onClick={handleModuleClick}
              className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                hasAccess
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {hasAccess ? 'Acceder al módulo' : 'Desbloquear contenido'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

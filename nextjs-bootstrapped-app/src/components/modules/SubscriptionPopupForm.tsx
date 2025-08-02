'use client'

import React, { useState } from 'react';
import { subscriptionTiers } from 'src/data/modules';

interface SubscriptionPopupFormProps {
  mode: 'login' | 'register';
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  name: string;
  setName: (name: string) => void;
  selectedTier: 'basic' | 'premium' | 'pro';
  setSelectedTier: (tier: 'basic' | 'premium' | 'pro') => void;
  isLoading: boolean;
  errorMessage: string;
  onLoginSubmit: (e: React.FormEvent) => void;
  onRegisterSubmit: (e: React.FormEvent) => void;
}

export default function SubscriptionPopupForm({
  mode,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  selectedTier,
  setSelectedTier,
  isLoading,
  errorMessage,
  onLoginSubmit,
  onRegisterSubmit,
}: SubscriptionPopupFormProps) {
  return (
    <div>
      {mode === 'register' ? (
        <>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Crear Cuenta</h3>
          <form onSubmit={onRegisterSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
                minLength={6}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Elige tu Plan</h3>
              <div className="space-y-4">
                {Object.entries(subscriptionTiers).map(([key, tier]: [string, {name: string; price: number; features: string[]}]) => (
                  <div
                    key={key}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedTier === key
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTier(key as 'basic' | 'premium' | 'pro')}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{tier.name}</h4>
                      <span className="text-2xl font-bold text-gray-900">${tier.price}/mes</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tier.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 disabled:opacity-50"
            >
              {isLoading ? 'Procesando...' : 'Registrarme y Suscribirme'}
            </button>
          </form>
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Iniciar Sesión</h3>
          <form onSubmit={onLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                required
                minLength={6}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 disabled:opacity-50"
            >
              {isLoading ? 'Procesando...' : 'Iniciar Sesión'}
            </button>
          </form>
          {errorMessage && <p className="text-red-600 text-sm mt-2">{errorMessage}</p>}
        </>
      )}
    </div>
  );
}

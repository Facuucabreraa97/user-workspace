'use client'

import { useState } from 'react';
import { useAuth } from '../../auth/AuthContext';
import SubscriptionPopupForm from './SubscriptionPopupForm';
import GoogleLoginButton from './GoogleLoginButton';

export default function SubscriptionPopup() {
  const { 
    showSubscriptionPopup, 
    setShowSubscriptionPopup, 
    selectedModule, 
    register, 
    login, 
    loginWithGoogle 
  } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedTier, setSelectedTier] = useState<'basic' | 'premium' | 'pro'>('basic');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    try {
      await register(email, password, name, selectedTier);
      setShowSubscriptionPopup(false);
      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      setErrorMessage('Error en el registro. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    try {
      const success = await login(email, password);
      if (success) {
        setShowSubscriptionPopup(false);
        setEmail('');
        setPassword('');
      } else {
        setErrorMessage('Credenciales inválidas.');
      }
    } catch (error) {
      setErrorMessage('Error en el inicio de sesión. Intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      if (loginWithGoogle) {
        await loginWithGoogle();
        setShowSubscriptionPopup(false);
      } else {
        setErrorMessage('Google login no está disponible.');
      }
    } catch (error) {
      setErrorMessage('Error en el inicio de sesión con Google.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!showSubscriptionPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === 'register' ? 'Desbloquea Contenido Exclusivo' : 'Iniciar Sesión'}
            </h2>
            <button
              onClick={() => setShowSubscriptionPopup(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Cerrar ventana"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {selectedModule && mode === 'register' && (
            <p className="mt-2 text-sm text-gray-600">
              Para acceder a este módulo, necesitas suscribirte a uno de nuestros planes
            </p>
          )}
          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => setMode('login')}
              className={`px-4 py-2 rounded-md font-semibold ${
                mode === 'login' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => setMode('register')}
              className={`px-4 py-2 rounded-md font-semibold ${
                mode === 'register' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Registrarse
            </button>
          </div>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-8">
          <GoogleLoginButton onClick={handleGoogleLogin} isLoading={isLoading} errorMessage={errorMessage} />
          <SubscriptionPopupForm
            mode={mode}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            name={name}
            setName={setName}
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
            isLoading={isLoading}
            errorMessage={errorMessage}
            onLoginSubmit={handleLoginSubmit}
            onRegisterSubmit={handleRegisterSubmit}
          />
        </div>
      </div>
    </div>
  );
}

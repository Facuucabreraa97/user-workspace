'use client'

import React from 'react';

interface GoogleLoginButtonProps {
  onClick: () => void;
  isLoading: boolean;
  errorMessage: string;
}

export default function GoogleLoginButton({ onClick, isLoading, errorMessage }: GoogleLoginButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 disabled:opacity-50"
      >
        {isLoading ? 'Procesando...' : 'Continuar con Google'}
      </button>
      {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
    </div>
  );
}

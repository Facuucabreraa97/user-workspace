'use client'

import { useState } from 'react'
import { useAuth } from '../auth/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated, logout, setShowSubscriptionPopup } = useAuth()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 bg-[#0f0f0f] backdrop-blur-sm border-b border-[#1b1b1b] shadow-[0_0_10px_#00ffcc]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-extrabold text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc] cursor-default select-none">ChainDojo</h1>
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-white hover:text-[#00ffcc] px-3 py-2 text-sm font-semibold transition-colors duration-300 drop-shadow-[0_0_5px_#00ffcc]"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection('modulos')}
            className="text-white hover:text-[#ff00cc] px-3 py-2 text-sm font-semibold transition-colors duration-300 drop-shadow-[0_0_5px_#ff00cc]"
          >
            Módulos
          </button>
          <button
            onClick={() => scrollToSection('segmentos')}
            className="text-white hover:text-[#00ffcc] px-3 py-2 text-sm font-semibold transition-colors duration-300 drop-shadow-[0_0_5px_#00ffcc]"
          >
            Criptomonedas
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="text-white hover:text-[#ff00cc] px-3 py-2 text-sm font-semibold transition-colors duration-300 drop-shadow-[0_0_5px_#ff00cc]"
          >
            Contacto
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-sm text-white drop-shadow-[0_0_5px_#00ffcc]">Hola, {user?.name}</span>
              <button
                onClick={logout}
                className="bg-[#00ffcc] text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#00e6b8] transition-colors drop-shadow-[0_0_10px_#00ffcc]"
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowSubscriptionPopup(true)}
              className="bg-[#ff00cc] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#e600b8] transition-colors drop-shadow-[0_0_10px_#ff00cc]"
            >
              Iniciar Sesión / Registrarse
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-[#00ffcc] p-2"
          >
            <span className="sr-only">Abrir menú</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-current block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0f0f0f] border-t border-[#1b1b1b]">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-white hover:text-[#00ffcc] block px-3 py-2 text-base font-semibold w-full text-left drop-shadow-[0_0_5px_#00ffcc]"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('modulos')}
                className="text-white hover:text-[#ff00cc] block px-3 py-2 text-base font-semibold w-full text-left drop-shadow-[0_0_5px_#ff00cc]"
              >
                Módulos
              </button>
              <button
                onClick={() => scrollToSection('segmentos')}
                className="text-white hover:text-[#00ffcc] block px-3 py-2 text-base font-semibold w-full text-left drop-shadow-[0_0_5px_#00ffcc]"
              >
                Criptomonedas
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-white hover:text-[#ff00cc] block px-3 py-2 text-base font-semibold w-full text-left drop-shadow-[0_0_5px_#ff00cc]"
              >
                Contacto
              </button>
              {isAuthenticated ? (
                <>
                  <div className="border-t border-[#1b1b1b] pt-2">
                    <p className="text-white px-3 py-2 text-base font-semibold drop-shadow-[0_0_5px_#00ffcc]">
                      Hola, {user?.name}
                    </p>
                    <button
                      onClick={logout}
                      className="text-white hover:text-[#00ffcc] block px-3 py-2 text-base font-semibold w-full text-left drop-shadow-[0_0_5px_#00ffcc]"
                    >
                      Cerrar Sesión
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => setShowSubscriptionPopup(true)}
                  className="bg-[#ff00cc] text-white block px-3 py-2 text-base font-semibold w-full text-left rounded-md mt-2 drop-shadow-[0_0_10px_#ff00cc]"
                >
                  Iniciar Sesión / Registrarse
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

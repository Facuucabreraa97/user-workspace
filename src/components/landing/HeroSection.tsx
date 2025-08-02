'use client'

export default function HeroSection() {
  const scrollToContent = () => {
    const element = document.getElementById('contenido')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-[#0f0f0f] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc] via-[#ff00cc] to-[#1b1b1b] opacity-20 blur-3xl animate-animateGlow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-[0_0_10px_#00ffcc]">
              <span className="block">Domina el Mundo de las</span>
              <span className="block bg-gradient-to-r from-[#00ffcc] via-[#ff00cc] to-[#ff00cc] bg-clip-text text-transparent drop-shadow-[0_0_15px_#ff00cc]">
                Criptomonedas
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Curso completo para principiantes e intermedios
            </p>
          </div>

          {/* Subheadline */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Aprende desde los conceptos básicos hasta estrategias avanzadas de trading. 
              Descubre Bitcoin, Ethereum y las criptomonedas más importantes del mercado.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-[#1b1b1b] rounded-lg p-6 border border-[#00ffcc] shadow-[0_0_10px_#00ffcc]">
              <h3 className="text-lg font-semibold mb-2 text-[#00ffcc]">Para Principiantes</h3>
              <p className="text-gray-400 text-sm">Comienza desde cero sin conocimientos previos</p>
            </div>
            <div className="bg-[#1b1b1b] rounded-lg p-6 border border-[#ff00cc] shadow-[0_0_10px_#ff00cc]">
              <h3 className="text-lg font-semibold mb-2 text-[#ff00cc]">Nivel Intermedio</h3>
              <p className="text-gray-400 text-sm">Profundiza en análisis técnico y estrategias</p>
            </div>
            <div className="bg-[#1b1b1b] rounded-lg p-6 border border-[#00ffcc] shadow-[0_0_10px_#00ffcc]">
              <h3 className="text-lg font-semibold mb-2 text-[#00ffcc]">Práctica Real</h3>
              <p className="text-gray-400 text-sm">Casos de estudio y ejemplos del mundo real</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={scrollToContent}
              className="bg-gradient-to-r from-[#00ffcc] to-[#ff00cc] text-black px-8 py-4 rounded-lg text-lg font-semibold hover:from-[#00e6b8] hover:to-[#e600b8] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Comenzar Ahora
            </button>
            <button
              onClick={() => document.getElementById('segmentos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Ver Criptomonedas
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ffcc]">10+</div>
              <div className="text-sm text-gray-400">Módulos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ffcc]">50+</div>
              <div className="text-sm text-gray-400">Lecciones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ffcc]">15+</div>
              <div className="text-sm text-gray-400">Criptomonedas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#00ffcc]">24/7</div>
              <div className="text-sm text-gray-400">Soporte</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

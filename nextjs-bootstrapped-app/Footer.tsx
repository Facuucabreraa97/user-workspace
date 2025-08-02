'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    curso: [
      { name: "Contenido del Curso", href: "#contenido" },
      { name: "Criptomonedas", href: "#segmentos" },
      { name: "Metodología", href: "#" },
      { name: "Certificación", href: "#" }
    ],
    recursos: [
      { name: "Blog", href: "#" },
      { name: "Glosario", href: "#" },
      { name: "Herramientas", href: "#" },
      { name: "Noticias Cripto", href: "#" }
    ],
    soporte: [
      { name: "Centro de Ayuda", href: "#" },
      { name: "Contacto", href: "#contacto" },
      { name: "FAQ", href: "#" },
      { name: "Comunidad", href: "#" }
    ],
    legal: [
      { name: "Términos de Uso", href: "#" },
      { name: "Política de Privacidad", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Disclaimer", href: "#" }
    ]
  }

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">CriptoAcademia</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tu plataforma de confianza para aprender sobre criptomonedas y blockchain. 
                Desde conceptos básicos hasta estrategias avanzadas de trading.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">@</span>
                </div>
                <span className="text-gray-400">info@criptoacademia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">📱</span>
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">🌐</span>
                </div>
                <span className="text-gray-400">24/7 Soporte Online</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Curso</h4>
            <ul className="space-y-2">
              {footerLinks.curso.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Mantente Actualizado</h4>
              <p className="text-gray-400">
                Recibe las últimas noticias sobre criptomonedas y actualizaciones del curso.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">T</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">in</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">YouTube</span>
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">▶</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <span className="sr-only">Discord</span>
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold">D</span>
                </div>
              </a>
            </div>
            
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} CriptoAcademia. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Hecho con ❤️ para la comunidad cripto
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            <strong>Aviso Legal:</strong> Este curso es únicamente para fines educativos. Las criptomonedas son activos volátiles y de alto riesgo. 
            Nunca inviertas más de lo que puedas permitirte perder. Siempre realiza tu propia investigación antes de tomar decisiones de inversión.
          </p>
        </div>
      </div>
    </footer>
  )
}

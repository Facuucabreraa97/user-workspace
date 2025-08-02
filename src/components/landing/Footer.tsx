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
    <footer id="contacto" className="bg-[#0f0f0f] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold mb-4 text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc]">CriptoAcademia</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Tu plataforma de confianza para aprender sobre criptomonedas y blockchain. 
                Desde conceptos básicos hasta estrategias avanzadas de trading.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#00ffcc] rounded-full flex items-center justify-center">
                  <span className="text-xs text-black">@</span>
                </div>
                <span className="text-gray-400">info@criptoacademia.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#ff00cc] rounded-full flex items-center justify-center">
                  <span className="text-xs text-black">📱</span>
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-[#00ffcc] rounded-full flex items-center justify-center">
                  <span className="text-xs text-black">🌐</span>
                </div>
                <span className="text-gray-400">24/7 Soporte Online</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00ffcc] drop-shadow-[0_0_5px_#00ffcc]">Curso</h4>
            <ul className="space-y-2">
              {footerLinks.curso.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#00ffcc] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff00cc] drop-shadow-[0_0_5px_#ff00cc]">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff00cc] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#00ffcc] drop-shadow-[0_0_5px_#00ffcc]">Soporte</h4>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-[#00ffcc] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#ff00cc] drop-shadow-[0_0_5px_#ff00cc]">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff00cc] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-[#1b1b1b]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-white drop-shadow-[0_0_5px_#00ffcc]">Mantente Actualizado</h4>
              <p className="text-gray-400">
                Recibe las últimas noticias sobre criptomonedas y actualizaciones del curso.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 bg-[#1b1b1b] border border-[#00ffcc] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00ffcc] transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#00ffcc] to-[#ff00cc] text-black rounded-lg font-medium hover:from-[#00e6b8] hover:to-[#e600b8] transition-all duration-300 transform hover:scale-105">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-[#1b1b1b]">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-[#00ffcc] hover:text-[#00e6b8] transition-colors duration-300 font-bold">
                Twitter
              </a>
              <a href="#" className="text-[#ff00cc] hover:text-[#e600b8] transition-colors duration-300 font-bold">
                LinkedIn
              </a>
              <a href="#" className="text-[#00ffcc] hover:text-[#00e6b8] transition-colors duration-300 font-bold">
                YouTube
              </a>
              <a href="#" className="text-[#ff00cc] hover:text-[#e600b8] transition-colors duration-300 font-bold">
                Discord
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
      <div className="bg-[#1b1b1b] py-4">
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

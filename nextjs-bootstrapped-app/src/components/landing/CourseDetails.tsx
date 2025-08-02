'use client'

export default function CourseDetails() {
  const modules = [
    {
      title: "Introducción a las Criptomonedas",
      description: "Conceptos básicos, historia del dinero digital y fundamentos de blockchain",
      lessons: 8,
      duration: "2 horas"
    },
    {
      title: "Tecnología Blockchain",
      description: "Cómo funciona la cadena de bloques, minería y consenso distribuido",
      lessons: 6,
      duration: "1.5 horas"
    },
    {
      title: "Bitcoin en Profundidad",
      description: "La primera criptomoneda, su funcionamiento y casos de uso",
      lessons: 7,
      duration: "2 horas"
    },
    {
      title: "Ethereum y Contratos Inteligentes",
      description: "Plataforma descentralizada, DApps y el ecosistema DeFi",
      lessons: 9,
      duration: "2.5 horas"
    },
    {
      title: "Seguridad y Almacenamiento",
      description: "Wallets, claves privadas, mejores prácticas de seguridad",
      lessons: 5,
      duration: "1.5 horas"
    },
    {
      title: "Trading y Análisis Técnico",
      description: "Estrategias de trading, análisis de gráficos y gestión de riesgo",
      lessons: 10,
      duration: "3 horas"
    },
    {
      title: "DeFi y Finanzas Descentralizadas",
      description: "Protocolos DeFi, yield farming, lending y staking",
      lessons: 8,
      duration: "2 horas"
    },
    {
      title: "NFTs y Tokens",
      description: "Tokens no fungibles, creación y mercados de NFTs",
      lessons: 6,
      duration: "1.5 horas"
    },
    {
      title: "Regulación y Aspectos Legales",
      description: "Marco regulatorio, impuestos y cumplimiento normativo",
      lessons: 4,
      duration: "1 hora"
    }
  ]

  return (
    <section id="contenido" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contenido del Curso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un programa completo diseñado para llevarte desde principiante hasta un nivel intermedio-avanzado 
            en el mundo de las criptomonedas y blockchain.
          </p>
        </div>

        {/* Course Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
            <div className="text-gray-600 text-sm">Módulos Principales</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-green-600 mb-2">63</div>
            <div className="text-gray-600 text-sm">Lecciones Totales</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">16</div>
            <div className="text-gray-600 text-sm">Horas de Contenido</div>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm border border-gray-200">
            <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
            <div className="text-gray-600 text-sm">Acceso de por Vida</div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-gray-300 group"
            >
              {/* Module Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {index + 1}
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">{module.lessons} lecciones</div>
                  <div className="text-sm text-gray-500">{module.duration}</div>
                </div>
              </div>

              {/* Module Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {module.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {module.description}
              </p>

              {/* Progress Indicator */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Progreso</span>
                  <span className="text-blue-600 font-medium">Disponible</span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Tu Ruta de Aprendizaje
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fundamentos</h4>
              <p className="text-gray-600 text-sm">
                Aprende los conceptos básicos y la tecnología detrás de las criptomonedas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Práctica</h4>
              <p className="text-gray-600 text-sm">
                Aplica tus conocimientos con ejercicios prácticos y casos reales
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Especialización</h4>
              <p className="text-gray-600 text-sm">
                Domina estrategias avanzadas y conviértete en un experto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

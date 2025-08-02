'use client'

import { useState } from 'react'

export default function CryptoSegments() {
  const [activeTab, setActiveTab] = useState('principales')

  const principalesCryptos = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      description: "La primera y más conocida criptomoneda. Reserva de valor digital y oro digital del siglo XXI.",
      marketCap: "$800B+",
      yearCreated: "2009",
      keyFeatures: ["Descentralizada", "Reserva de valor", "Escasez digital", "Red más segura"],
      useCase: "Reserva de valor, pagos internacionales, hedge contra inflación",
      color: "from-orange-400 to-yellow-500"
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      description: "Plataforma blockchain para contratos inteligentes y aplicaciones descentralizadas (DApps).",
      marketCap: "$400B+",
      yearCreated: "2015",
      keyFeatures: ["Contratos inteligentes", "DApps", "DeFi", "NFTs"],
      useCase: "Plataforma para aplicaciones descentralizadas, DeFi, NFTs",
      color: "from-blue-400 to-purple-500"
    },
    {
      name: "Binance Coin",
      symbol: "BNB",
      description: "Token nativo del ecosistema Binance, el exchange de criptomonedas más grande del mundo.",
      marketCap: "$90B+",
      yearCreated: "2017",
      keyFeatures: ["Descuentos en trading", "BSC", "Quema de tokens", "Utilidad"],
      useCase: "Descuentos en fees, pagos, DeFi en Binance Smart Chain",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Cardano",
      symbol: "ADA",
      description: "Blockchain de tercera generación enfocada en sostenibilidad y investigación académica.",
      marketCap: "$35B+",
      yearCreated: "2017",
      keyFeatures: ["Proof of Stake", "Sostenible", "Académico", "Escalable"],
      useCase: "Contratos inteligentes eficientes, identidad digital, votación",
      color: "from-blue-500 to-teal-500"
    },
    {
      name: "Solana",
      symbol: "SOL",
      description: "Blockchain de alta velocidad diseñada para aplicaciones descentralizadas y DeFi.",
      marketCap: "$45B+",
      yearCreated: "2020",
      keyFeatures: ["Alta velocidad", "Bajas comisiones", "Escalable", "Web3"],
      useCase: "DeFi de alta velocidad, NFTs, aplicaciones Web3",
      color: "from-purple-400 to-pink-500"
    },
    {
      name: "Polkadot",
      symbol: "DOT",
      description: "Protocolo que permite la interoperabilidad entre diferentes blockchains.",
      marketCap: "$25B+",
      yearCreated: "2020",
      keyFeatures: ["Interoperabilidad", "Parachains", "Escalabilidad", "Seguridad"],
      useCase: "Conectar diferentes blockchains, aplicaciones multi-chain",
      color: "from-pink-400 to-red-500"
    }
  ]

  const emergentes = [
    {
      name: "Chainlink",
      symbol: "LINK",
      description: "Red de oráculos descentralizada que conecta blockchains con datos del mundo real.",
      marketCap: "$15B+",
      yearCreated: "2017",
      keyFeatures: ["Oráculos", "Datos externos", "Híbrido", "Conectividad"],
      useCase: "Alimentar contratos inteligentes con datos externos",
      color: "from-blue-400 to-cyan-500"
    },
    {
      name: "Polygon",
      symbol: "MATIC",
      description: "Solución de escalabilidad para Ethereum que reduce costos y aumenta velocidad.",
      marketCap: "$10B+",
      yearCreated: "2017",
      keyFeatures: ["Layer 2", "Escalabilidad", "Bajas comisiones", "Ethereum"],
      useCase: "Escalabilidad para Ethereum, DeFi accesible",
      color: "from-purple-400 to-indigo-500"
    },
    {
      name: "Avalanche",
      symbol: "AVAX",
      description: "Plataforma blockchain rápida y escalable para aplicaciones descentralizadas.",
      marketCap: "$12B+",
      yearCreated: "2020",
      keyFeatures: ["Subredes", "Velocidad", "Escalabilidad", "EVM compatible"],
      useCase: "DeFi, enterprise blockchain, aplicaciones personalizadas",
      color: "from-red-400 to-pink-500"
    },
    {
      name: "The Graph",
      symbol: "GRT",
      description: "Protocolo de indexación para consultar datos de blockchains como Ethereum.",
      marketCap: "$3B+",
      yearCreated: "2020",
      keyFeatures: ["Indexación", "Consultas", "Descentralizado", "APIs"],
      useCase: "Indexar y consultar datos blockchain para DApps",
      color: "from-indigo-400 to-purple-500"
    }
  ]

  const stablecoins = [
    {
      name: "Tether",
      symbol: "USDT",
      description: "La stablecoin más utilizada, respaldada por reservas en dólares estadounidenses.",
      marketCap: "$80B+",
      yearCreated: "2014",
      keyFeatures: ["Estabilidad", "Liquidez", "Respaldada", "Amplia adopción"],
      useCase: "Trading, reserva de valor estable, pagos",
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      description: "Stablecoin regulada y auditada, respaldada completamente por dólares estadounidenses.",
      marketCap: "$50B+",
      yearCreated: "2018",
      keyFeatures: ["Regulada", "Auditada", "Transparente", "Confiable"],
      useCase: "DeFi, pagos institucionales, trading",
      color: "from-blue-400 to-green-500"
    },
    {
      name: "DAI",
      symbol: "DAI",
      description: "Stablecoin descentralizada generada por el protocolo MakerDAO.",
      marketCap: "$8B+",
      yearCreated: "2017",
      keyFeatures: ["Descentralizada", "Colateralizada", "Algorítmica", "DeFi"],
      useCase: "DeFi descentralizado, préstamos, ahorros",
      color: "from-yellow-400 to-green-500"
    }
  ]

  const getCurrentCryptos = () => {
    switch (activeTab) {
      case 'principales':
        return principalesCryptos
      case 'emergentes':
        return emergentes
      case 'stablecoins':
        return stablecoins
      default:
        return principalesCryptos
    }
  }

  return (
    <section id="segmentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Criptomonedas Principales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explora las criptomonedas más importantes del mercado. Aprende sobre sus características únicas, 
            casos de uso y por qué son relevantes en el ecosistema blockchain.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex flex-wrap gap-1">
            <button
              onClick={() => setActiveTab('principales')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'principales'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Principales
            </button>
            <button
              onClick={() => setActiveTab('emergentes')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'emergentes'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Emergentes
            </button>
            <button
              onClick={() => setActiveTab('stablecoins')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                activeTab === 'stablecoins'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Stablecoins
            </button>
          </div>
        </div>

        {/* Crypto Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentCryptos().map((crypto) => (
            <div
              key={crypto.symbol}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-gray-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${crypto.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {crypto.symbol.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{crypto.name}</h3>
                    <p className="text-gray-500 text-sm">{crypto.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Market Cap</div>
                  <div className="font-semibold text-gray-900">{crypto.marketCap}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {crypto.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Características Clave</h4>
                <div className="flex flex-wrap gap-2">
                  {crypto.keyFeatures.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Use Case */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Casos de Uso</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {crypto.useCase}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="text-sm text-gray-500">
                  Creado en {crypto.yearCreated}
                </div>
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${crypto.color} group-hover:scale-110 transition-transform duration-300`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Market Overview */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Panorama del Mercado Cripto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$2.5T+</div>
              <div className="text-gray-600 text-sm">Capitalización Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">20,000+</div>
              <div className="text-gray-600 text-sm">Criptomonedas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">500M+</div>
              <div className="text-gray-600 text-sm">Usuarios Globales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Mercado Abierto</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

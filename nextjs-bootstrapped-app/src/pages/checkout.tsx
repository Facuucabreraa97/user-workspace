'use client'

import { useEffect, useState } from 'react'
import { useSession, signIn } from 'next-auth/react'
import QRCode from 'qrcode.react'

interface Wallet {
  id: string
  coin: string
  network: string
  address: string
  active: boolean
}

interface Payment {
  id: string
  status: string
}

export default function CheckoutPage() {
  const { data: session, status } = useSession()
  const [wallets, setWallets] = useState<Wallet[]>([])
  const [selectedCoin, setSelectedCoin] = useState('')
  const [selectedNetwork, setSelectedNetwork] = useState('')
  const [filteredNetworks, setFilteredNetworks] = useState<string[]>([])
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null)
  const [latestPayment, setLatestPayment] = useState<Payment | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn()
    }
  }, [status])

  useEffect(() => {
    async function fetchWallets() {
      const res = await fetch('/api/admin/wallets')
      const data = await res.json()
      const activeWallets = data.filter((w: Wallet) => w.active)
      setWallets(activeWallets)
    }
    fetchWallets()
  }, [])

  useEffect(() => {
    if (selectedCoin) {
      const networks = wallets
        .filter((w) => w.coin === selectedCoin)
        .map((w) => w.network)
      setFilteredNetworks(Array.from(new Set(networks)))
      setSelectedNetwork('')
      setSelectedWallet(null)
    }
  }, [selectedCoin, wallets])

  useEffect(() => {
    if (selectedCoin && selectedNetwork) {
      const wallet = wallets.find(
        (w) => w.coin === selectedCoin && w.network === selectedNetwork
      )
      setSelectedWallet(wallet || null)
    }
  }, [selectedCoin, selectedNetwork, wallets])

  useEffect(() => {
    async function fetchLatestPayment() {
      if (!session?.user?.email) return
      const res = await fetch(`/api/payments/latest?email=${session.user.email}`)
      if (res.ok) {
        const data = await res.json()
        setLatestPayment(data)
      }
    }
    fetchLatestPayment()
  }, [session])

  if (status === 'loading') {
    return <div className="text-white text-center mt-20">Cargando...</div>
  }

  if (!session) {
    return null
  }

  const renderPaymentStatus = () => {
    if (!latestPayment) return null
    switch (latestPayment.status) {
      case 'pending':
        return (
          <div className="mb-6 flex items-center space-x-2 text-yellow-400">
            <span>⏳</span>
            <span>Tu pago está siendo procesado…</span>
          </div>
        )
      case 'confirmed':
        return (
          <div className="mb-6 flex items-center space-x-2 text-green-400">
            <span>✅</span>
            <span>¡Tu suscripción premium está activa!</span>
          </div>
        )
      case 'rejected':
        return (
          <div className="mb-6 flex items-center space-x-2 text-red-500">
            <span>❌</span>
            <span>Tu pago fue rechazado. Por favor intenta nuevamente.</span>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] text-white px-4">
      <h1 className="text-4xl font-extrabold mb-8 drop-shadow-[0_0_10px_#00ffcc]">Checkout de Pago con Criptomonedas</h1>

      {renderPaymentStatus()}

      <div className="bg-[#1b1b1b] p-8 rounded-lg shadow-[0_0_15px_#00ffcc] max-w-md w-full">
        <label className="block mb-2 font-semibold text-[#00ffcc]">Criptomoneda</label>
        <select
          value={selectedCoin}
          onChange={(e) => setSelectedCoin(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded bg-[#0f0f0f] border border-[#00ffcc] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
        >
          <option value="">Selecciona una criptomoneda</option>
          {Array.from(new Set(wallets.map((w) => w.coin))).map((coin) => (
            <option key={coin} value={coin}>
              {coin}
            </option>
          ))}
        </select>

        <label className="block mb-2 font-semibold text-[#ff00cc]">Red Compatible</label>
        <select
          value={selectedNetwork}
          onChange={(e) => setSelectedNetwork(e.target.value)}
          disabled={!selectedCoin}
          className="w-full mb-6 px-4 py-2 rounded bg-[#0f0f0f] border border-[#ff00cc] text-white focus:outline-none focus:ring-2 focus:ring-[#ff00cc]"
        >
          <option value="">Selecciona una red</option>
          {filteredNetworks.map((network) => (
            <option key={network} value={network}>
              {network}
            </option>
          ))}
        </select>

        {selectedWallet && (
          <div className="mt-6 text-center">
            <p className="mb-2 font-semibold text-white">Dirección de pago:</p>
            <p className="mb-4 break-all text-[#00ffcc]">{selectedWallet.address}</p>
            <div className="flex justify-center mb-4">
              <QRCode value={selectedWallet.address} size={160} bgColor="#0f0f0f" fgColor="#00ffcc" />
            </div>
            <p className="mb-4 text-white font-semibold">Monto a pagar: 10 {selectedWallet.coin}</p>
            <button
              className="bg-[#ff00cc] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e600b8] transition-all duration-300 transform hover:scale-105 drop-shadow-[0_0_10px_#ff00cc]"
              onClick={() => alert('Pago confirmado. Gracias!')}
            >
              Ya pagué
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

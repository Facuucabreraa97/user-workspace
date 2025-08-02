'use client'

import { useState, useEffect } from 'react'

interface Wallet {
  id: string
  coin: string
  network: string
  address: string
  active: boolean
}

export default function WalletsPage() {
  const [wallets, setWallets] = useState<Wallet[]>([])
  const [newWallet, setNewWallet] = useState({ coin: '', network: '', address: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchWallets()
  }, [])

  const fetchWallets = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/wallets')
      const data = await res.json()
      setWallets(data)
    } catch (err) {
      setError('Error fetching wallets')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewWallet({ ...newWallet, [e.target.name]: e.target.value })
  }

  const addWallet = async () => {
    if (!newWallet.coin || !newWallet.network || !newWallet.address) {
      setError('All fields are required')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/admin/wallets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWallet),
      })
      if (!res.ok) throw new Error('Failed to add wallet')
      setNewWallet({ coin: '', network: '', address: '' })
      fetchWallets()
    } catch (err) {
      setError('Error adding wallet')
    } finally {
      setLoading(false)
    }
  }

  const toggleActive = async (id: string, active: boolean) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/wallets/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ active: !active }),
      })
      if (!res.ok) throw new Error('Failed to update wallet')
      fetchWallets()
    } catch (err) {
      setError('Error updating wallet')
    } finally {
      setLoading(false)
    }
  }

  const updateAddress = async (id: string, address: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/wallets/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      })
      if (!res.ok) throw new Error('Failed to update address')
      fetchWallets()
    } catch (err) {
      setError('Error updating address')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="text-white">
      <h2 className="text-3xl font-extrabold mb-6 text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc]">Gestión de Wallets</h2>

      {error && <p className="mb-4 text-red-500">{error}</p>}

      <div className="mb-6 bg-[#1b1b1b] p-4 rounded-lg shadow-[0_0_10px_#00ffcc]">
        <h3 className="text-xl font-semibold mb-4">Agregar Nueva Wallet</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="coin"
            placeholder="Moneda"
            value={newWallet.coin}
            onChange={handleInputChange}
            className="flex-1 px-3 py-2 rounded bg-[#0f0f0f] border border-[#00ffcc] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
          />
          <input
            type="text"
            name="network"
            placeholder="Red"
            value={newWallet.network}
            onChange={handleInputChange}
            className="flex-1 px-3 py-2 rounded bg-[#0f0f0f] border border-[#00ffcc] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={newWallet.address}
            onChange={handleInputChange}
            className="flex-1 px-3 py-2 rounded bg-[#0f0f0f] border border-[#00ffcc] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
          />
          <button
            onClick={addWallet}
            disabled={loading}
            className="bg-[#00ffcc] text-black px-6 py-2 rounded font-semibold hover:bg-[#00e6b8] transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-[#1b1b1b] rounded-lg shadow-[0_0_10px_#00ffcc]">
        <table className="min-w-full divide-y divide-[#00ffcc]">
          <thead className="bg-[#0f0f0f]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Moneda</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Red</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Dirección</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Estado</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#00ffcc]">
            {wallets.map((wallet) => (
              <tr key={wallet.id}>
                <td className="px-6 py-4 whitespace-nowrap">{wallet.coin}</td>
                <td className="px-6 py-4 whitespace-nowrap">{wallet.network}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="text"
                    defaultValue={wallet.address}
                    onBlur={(e) => updateAddress(wallet.id, e.target.value)}
                    className="w-full bg-[#0f0f0f] border border-[#00ffcc] rounded px-2 py-1 text-white focus:outline-none focus:ring-2 focus:ring-[#00ffcc]"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => toggleActive(wallet.id, wallet.active)}
                    className={`px-3 py-1 rounded font-semibold ${
                      wallet.active ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                    } transition-colors`}
                  >
                    {wallet.active ? 'Activo' : 'Inactivo'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {/* Future actions can be added here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

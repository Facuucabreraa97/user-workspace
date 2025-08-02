'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

interface Payment {
  id: string
  userId: string
  coin: string
  network: string
  status: string
  amount: number
  createdAt: string
}

export default function PaymentsPage() {
  const { data: session } = useSession()
  const [payments, setPayments] = useState<Payment[]>([])
  const [loadingIds, setLoadingIds] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPayments()
  }, [])

  const fetchPayments = async () => {
    try {
      const res = await fetch('/api/admin/payments')
      const data = await res.json()
      setPayments(data)
    } catch (err) {
      setError('Error fetching payments')
    }
  }

  const handleAction = async (paymentId: string, action: 'confirm' | 'reject') => {
    setError(null)
    setLoadingIds((prev) => [...prev, paymentId])
    try {
      const res = await fetch(`/api/payments/${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentId }),
      })
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.message || 'Error processing request')
      }
      // Update payment status locally
      setPayments((prev) =>
        prev.map((p) =>
          p.id === paymentId
            ? { ...p, status: action === 'confirm' ? 'confirmed' : 'rejected' }
            : p
        )
      )
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoadingIds((prev) => prev.filter((id) => id !== paymentId))
    }
  }

  if (!session || !session.user || (session.user as any).role !== 'admin') {
    return <div className="text-white p-4">Access denied. Admins only.</div>
  }

  return (
    <div className="p-6 bg-[#0f0f0f] min-h-screen text-white">
      <h1 className="text-3xl font-extrabold mb-6 text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc]">Gestión de Pagos</h1>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <div className="overflow-x-auto bg-[#1b1b1b] rounded-lg shadow-[0_0_10px_#00ffcc]">
        <table className="min-w-full divide-y divide-[#00ffcc]">
          <thead className="bg-[#0f0f0f]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Usuario</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Moneda</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Red</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Monto</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Estado</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#00ffcc]">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#00ffcc]">
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-6 py-4 whitespace-nowrap">{payment.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.userId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.coin}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.network}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">{payment.status}</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  {payment.status === 'pending' && (
                    <>
                      <button
                        disabled={loadingIds.includes(payment.id)}
                        onClick={() => handleAction(payment.id, 'confirm')}
                        className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-3 py-1 rounded inline-flex items-center space-x-1 drop-shadow-[0_0_5px_#00ff00]"
                      >
                        <span>✅</span>
                        <span>Aceptar</span>
                      </button>
                      <button
                        disabled={loadingIds.includes(payment.id)}
                        onClick={() => handleAction(payment.id, 'reject')}
                        className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white px-3 py-1 rounded inline-flex items-center space-x-1 drop-shadow-[0_0_5px_#ff0000]"
                      >
                        <span>❌</span>
                        <span>Rechazar</span>
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

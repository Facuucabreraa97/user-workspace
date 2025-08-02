'use client'

import { useEffect, useState } from 'react'
import { useSession, signIn } from 'next-auth/react'

interface Subscription {
  tier: string
  startDate: string
  active: boolean
}

interface Payment {
  coin: string
  network: string
  amount: number
  status: string
  createdAt: string
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [subscription, setSubscription] = useState<Subscription | null>(null)
  const [lastPayment, setLastPayment] = useState<Payment | null>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      signIn()
    }
  }, [status])

  useEffect(() => {
    async function fetchData() {
      if (!session?.user?.email) return
      const resSub = await fetch(`/api/subscription/latest?email=${session.user.email}`)
      if (resSub.ok) {
        const data = await resSub.json()
        setSubscription(data)
      }
      const resPay = await fetch(`/api/payments/latest?email=${session.user.email}`)
      if (resPay.ok) {
        const data = await resPay.json()
        setLastPayment(data)
      }
    }
    fetchData()
  }, [session])

  if (status === 'loading') {
    return <div className="text-white text-center mt-20">Cargando...</div>
  }

  if (!session) {
    return null
  }

  const userRole = (session.user && (session.user as any).role) || 'user'

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-6 text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc]">Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Perfil</h2>
        <p><strong>Nombre:</strong> {session.user?.name || 'N/A'}</p>
        <p><strong>Email:</strong> {session.user?.email}</p>
        <p><strong>Rol:</strong> {userRole}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Estado de Suscripción</h2>
        {subscription && subscription.active && subscription.tier === 'premium' ? (
          <p className="text-green-400 flex items-center space-x-2">
            <span>✅</span>
            <span>Tu suscripción está activa</span>
          </p>
        ) : (
          <p className="text-red-500 flex items-center space-x-2">
            <span>❌</span>
            <span>No tenés suscripción activa</span>
          </p>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Último Pago</h2>
        {lastPayment ? (
          <div>
            <p><strong>Moneda:</strong> {lastPayment.coin}</p>
            <p><strong>Red:</strong> {lastPayment.network}</p>
            <p><strong>Monto:</strong> {lastPayment.amount}</p>
            <p><strong>Estado:</strong> {lastPayment.status}</p>
            <p><strong>Fecha:</strong> {new Date(lastPayment.createdAt).toLocaleString()}</p>
          </div>
        ) : (
          <p>No hay pagos registrados.</p>
        )}
      </section>

      <section>
        {subscription && subscription.active && subscription.tier === 'premium' ? (
          <button className="bg-[#00ffcc] text-black px-6 py-3 rounded font-semibold hover:bg-[#00e6b8] transition-all drop-shadow-[0_0_10px_#00ffcc]">
            Explorar Módulos
          </button>
        ) : (
          <button
            onClick={() => window.location.href = '/checkout'}
            className="bg-[#ff00cc] text-white px-6 py-3 rounded font-semibold hover:bg-[#e600b8] transition-all drop-shadow-[0_0_10px_#ff00cc]"
          >
            Mejorar Plan
          </button>
        )}
      </section>
    </div>
  )
}

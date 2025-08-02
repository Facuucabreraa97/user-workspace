import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/auth/AuthContext'
import SubscriptionPopup from '@/components/modules/SubscriptionPopup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChainDojo - Trading de Criptomonedas',
  description: 'Domina el trading de criptomonedas con nuestros cursos especializados y contenido exclusivo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <SubscriptionPopup />
        </AuthProvider>
      </body>
    </html>
  )
}

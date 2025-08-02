'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'

interface AdminLayoutProps {
  children: ReactNode
}

const navItems = [
  { name: 'Wallets', href: '/admin/wallets' },
  { name: 'Users', href: '/admin/users' },
  { name: 'Configuración', href: '/admin/settings' },
]

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [active, setActive] = useState('/admin/wallets')

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1b1b1b] border-r border-[#00ffcc] flex flex-col">
        <div className="px-6 py-4 text-2xl font-extrabold text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc]">
          Admin Panel
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActive(item.href)}
              className={`block px-4 py-3 rounded-md font-semibold transition-colors duration-300 ${
                active === item.href
                  ? 'bg-[#00ffcc] text-black shadow-[0_0_10px_#00ffcc]'
                  : 'text-white hover:bg-[#00ffcc]/20 hover:text-[#00ffcc]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-6 bg-[#0f0f0f]">
        {children}
      </main>
    </div>
  )
}

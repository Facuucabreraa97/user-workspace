'use client'

import { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  subscription: {
    tier: string;
    startDate: string;
    endDate: string | null;
  } | null;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <a href="/admin" className="text-gray-700 hover:text-black font-semibold">Usuarios</a>
          {/* Add more menu items here */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-bold mb-4">Usuarios Registrados</h1>
        {loading ? (
          <p>Cargando usuarios...</p>
        ) : (
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Suscripción</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Inicio Suscripción</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Fin Suscripción</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.subscription?.tier || 'N/A'}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.subscription?.startDate ? new Date(user.subscription.startDate).toLocaleDateString() : 'N/A'}</td>
                  <td className="border border-gray-300 px-4 py-2">{user.subscription?.endDate ? new Date(user.subscription.endDate).toLocaleDateString() : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

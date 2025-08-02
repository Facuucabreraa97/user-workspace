"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (!session) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Por favor, inicia sesión para continuar</h2>
        <button onClick={() => signIn("google")}>Iniciar sesión con Google</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Hola, {session.user.name} 👋</h1>
      <p>Bienvenido a tu aplicación segura.</p>
      <button onClick={() => signOut()}>Cerrar sesión</button>

      <section>
        <h3>Contenido exclusivo para usuarios autenticados</h3>
        <p>Aquí podés poner lo que quieras mostrar.</p>
      </section>
    </div>
  );
}


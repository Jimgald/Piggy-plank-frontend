import { useState } from "react";
import { ArrowRight, Lock, Mail, User as UserIcon } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="relative flex h-screen w-full max-w-md flex-col justify-center bg-gray-50 px-6 shadow-xl">
        {/* Logo/Icono del Cerdito */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 shadow-lg shadow-orange-500/40 ring-4 ring-white">
          <span className="text-5xl">🐷</span>
        </div>

        {/* Textos de Cabecera */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Piggy Plank</h1>
          <p className="text-sm font-medium text-gray-500 mt-2">
            {isLogin ? "Inicia sesión para continuar" : "Únete a la comunidad de atletas"}
          </p>
        </div>

        {/* Formulario */}
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <div className="relative">
              <UserIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Nombre de usuario"
                className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm"
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              placeholder="Contraseña"
              className="h-14 w-full rounded-2xl border border-gray-200 bg-white pl-12 pr-4 text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-sm"
            />
          </div>

          <button
            type="button"
            className="mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-4 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-95"
          >
            {isLogin ? "Entrar a mi cuenta" : "Crear mi perfil"}
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>

        {/* Botón para alternar Login/Registro */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-bold text-gray-500 transition-colors hover:text-orange-500 focus:outline-none"
          >
            {isLogin ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya eres miembro? Inicia sesión"}
          </button>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import { HandCoins } from "lucide-react";

/**
 * Login page component. Handles user authentication by calling the provided
 * onLogin callback with a dummy user after a brief simulated delay.
 * Extracted from App.jsx to declutter the main entry file.
 *
 * Props:
 * - onLogin: function called with a user object when login succeeds
 */
const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      // Simulate authentication and pass a dummy user back to the parent
      onLogin({ name: "Admin Usuario", role: "Administrador" });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <div className="flex justify-center mb-6 text-blue-600">
          <div className="p-3 bg-blue-100 rounded-2xl">
            <HandCoins size={40} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          PrestaIzy
        </h2>
        <p className="text-center text-gray-500 mb-8 font-medium">
          Sistema de Gestión de Préstamos
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Usuario o Correo
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="admin@prestafacil.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition transform active:scale-95 flex justify-center items-center"
          >
            {loading ? "Ingresando..." : "Iniciar Sesión"}
          </button>
        </form>
        <button className="w-full text-center mt-6 text-sm text-blue-600 font-semibold hover:underline">
          ¿Olvidaste tu contraseña?
        </button>
      </div>
    </div>
  );
};

export default Login;

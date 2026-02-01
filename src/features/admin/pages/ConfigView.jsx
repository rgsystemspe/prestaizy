import React from "react";
import Card from "../../../components/Card";

/**
 * Configuration page for the admin dashboard. Allows editing of system
 * parameters such as interest rates and grace period. Extracted from
 * App.jsx for better modularity.
 */
const ConfigView = () => (
  <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-2">
    <h2 className="text-2xl font-bold text-gray-900">Configuración del Sistema</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside className="space-y-1">
        {[
          "General",
          "Parámetros",
          "Usuarios",
          "Documentos",
          "Notificaciones",
        ].map((item, i) => (
          <button
            key={i}
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition ${
              i === 1 ? "bg-blue-50 text-blue-600 shadow-sm" : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </aside>
      <main className="md:col-span-3 space-y-6">
        <Card title="Tasas y Mora Predeterminadas">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tasa de Interés Base (%)
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  defaultValue="10"
                  className="w-full px-4 py-2 rounded-lg border border-gray-200"
                />
                <select className="px-3 rounded-lg border border-gray-200 bg-gray-50 text-sm">
                  <option>Mensual</option>
                  <option>Diario</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mora Diaria Fija (S/)
              </label>
              <input
                type="number"
                defaultValue="5"
                className="w-full px-4 py-2 rounded-lg border border-gray-200"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Días de gracia antes de Mora
              </label>
              <input
                type="number"
                defaultValue="2"
                className="w-full px-4 py-2 rounded-lg border border-gray-200"
              />
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition">
            Guardar Cambios
          </button>
        </Card>
      </main>
    </div>
  </div>
);

export default ConfigView;
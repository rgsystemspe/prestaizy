import React from "react";
import Card from "../../../components/Card";
import Badge from "../../../components/Badge";

/**
 * Vista de gestión de clientes.
 * Muestra un listado de clientes registrados con información básica
 * y permite iniciar acciones como registrar un nuevo cliente.
 */
const ClientesView = () => {
  // Datos de ejemplo; en un sistema real vendrían de una API o estado global
  const clients = [
    {
      id: 1,
      name: "Juan Pérez",
      dni: "12345678",
      loans: 2,
      status: "Activo",
    },
    {
      id: 2,
      name: "María García",
      dni: "87654321",
      loans: 1,
      status: "Inactivo",
    },
    {
      id: 3,
      name: "Carlos López",
      dni: "11223344",
      loans: 3,
      status: "Mora",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Activo":
        return "green";
      case "Inactivo":
        return "gray";
      case "Mora":
        return "red";
      default:
        return "blue";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Clientes</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
          Nuevo Cliente
        </button>
      </div>
      <Card title="Listado de Clientes">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b">
                <th className="pb-3">Nombre</th>
                <th className="pb-3">DNI</th>
                <th className="pb-3">Préstamos</th>
                <th className="pb-3">Estado</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {clients.map((client) => (
                <tr key={client.id} className="group hover:bg-gray-50">
                  <td className="py-4">
                    <div className="font-semibold text-gray-800">{client.name}</div>
                  </td>
                  <td className="py-4 text-sm text-gray-600">{client.dni}</td>
                  <td className="py-4 text-sm text-gray-600">{client.loans}</td>
                  <td className="py-4">
                    <Badge color={statusColor(client.status)}>{client.status}</Badge>
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Ver</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ClientesView;
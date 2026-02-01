import React from "react";
import Card from "../../../components/Card";
import Badge from "../../../components/Badge";

/**
 * Vista de gestión de préstamos.
 * Muestra una tabla con todos los préstamos registrados, sus estados
 * y permite realizar acciones como ver detalles o registrar pagos.
 */
const PrestamosView = ({ onCreateLoan }) => {
  const loans = [
    {
      id: "P-2024-001",
      cliente: "Juan Pérez",
      monto: 1000,
      saldo: 450,
      estado: "Activo",
    },
    {
      id: "P-2024-002",
      cliente: "María García",
      monto: 1200,
      saldo: 0,
      estado: "Pagado",
    },
    {
      id: "P-2024-003",
      cliente: "Carlos López",
      monto: 300,
      saldo: 100,
      estado: "Vencido",
    },
  ];

  const statusColor = (estado) => {
    switch (estado) {
      case "Activo":
        return "blue";
      case "Pagado":
        return "green";
      case "Vencido":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Préstamos</h2>
        <button
          onClick={onCreateLoan}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100"
        >
          Nuevo Préstamo
        </button>
      </div>
      <Card title="Listado de Préstamos">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b">
                <th className="pb-3">Código</th>
                <th className="pb-3">Cliente</th>
                <th className="pb-3 text-right">Monto Inicial</th>
                <th className="pb-3 text-right">Saldo</th>
                <th className="pb-3">Estado</th>
                <th className="pb-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loans.map((loan) => (
                <tr key={loan.id} className="group hover:bg-gray-50">
                  <td className="py-4 font-semibold text-gray-800">{loan.id}</td>
                  <td className="py-4 text-sm text-gray-600">{loan.cliente}</td>
                  <td className="py-4 text-sm text-right text-gray-600">
                    S/ {loan.monto.toFixed(2)}
                  </td>
                  <td className="py-4 text-sm text-right text-gray-600">
                    S/ {loan.saldo.toFixed(2)}
                  </td>
                  <td className="py-4">
                    <Badge color={statusColor(loan.estado)}>{loan.estado}</Badge>
                  </td>
                  <td className="py-4 text-right">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                      Ver
                    </button>
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

export default PrestamosView;
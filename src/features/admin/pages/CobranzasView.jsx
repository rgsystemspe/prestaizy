import React from "react";
import Card from "../../../components/Card";
import Badge from "../../../components/Badge";

/**
 * Vista de cobranzas.
 * Presenta las próximas cuotas y pagos pendientes, permitiendo
 * registrar cobros o enviar recordatorios a los clientes.
 */
const CobranzasView = () => {
  const payments = [
    {
      id: 1,
      cliente: "Juan Pérez",
      fecha: "02/02/2026",
      monto: 150.0,
      estado: "Pendiente",
    },
    {
      id: 2,
      cliente: "María García",
      fecha: "05/02/2026",
      monto: 300.0,
      estado: "Pendiente",
    },
    {
      id: 3,
      cliente: "Carlos López",
      fecha: "01/02/2026",
      monto: 80.0,
      estado: "Retrasado",
    },
  ];

  const statusColor = (estado) => {
    switch (estado) {
      case "Pendiente":
        return "orange";
      case "Retrasado":
        return "red";
      case "Pagado":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
      <h2 className="text-2xl font-bold text-gray-900">Cobranzas</h2>
      <Card title="Pagos Pendientes">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b">
                <th className="pb-3">Cliente</th>
                <th className="pb-3">Fecha de Pago</th>
                <th className="pb-3 text-right">Monto</th>
                <th className="pb-3">Estado</th>
                <th className="pb-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {payments.map((payment) => (
                <tr key={payment.id} className="group hover:bg-gray-50">
                  <td className="py-4 font-semibold text-gray-800">{payment.cliente}</td>
                  <td className="py-4 text-sm text-gray-600">{payment.fecha}</td>
                  <td className="py-4 text-sm text-right text-gray-600">
                    S/ {payment.monto.toFixed(2)}
                  </td>
                  <td className="py-4">
                    <Badge color={statusColor(payment.estado)}>{payment.estado}</Badge>
                  </td>
                  <td className="py-4 text-right">
                    <div className="flex gap-2 justify-end">
                      <button className="text-green-600 hover:text-green-800 font-semibold text-sm">
                        Cobrar
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                        Recordatorio
                      </button>
                    </div>
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

export default CobranzasView;
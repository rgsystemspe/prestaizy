import React from "react";
import {
  HandCoins,
  Wallet,
  AlertTriangle,
  ShieldCheck,
  ArrowUpRight,
  FileText,
  Users,
  Plus,
} from "lucide-react";
import Badge from "../../../components/Badge";
import Card from "../../../components/Card";

/**
 * Dashboard page for the admin. Displays KPI cards, upcoming expirations,
 * critical alerts and quick actions. Uses Badge and Card components.
 * Extracted from App.jsx to reside under features/admin/pages.
 *
 * Props:
 * - setActiveView: function to change the active page in the main app
 */
const Dashboard = ({ setActiveView }) => {
  const kpis = [
    {
      label: "Préstamos Activos",
      value: "128",
      sub: "S/ 450,200",
      icon: HandCoins,
      color: "blue",
    },
    {
      label: "Cobros del Día",
      value: "S/ 12,450",
      sub: "24 pagos hoy",
      icon: Wallet,
      color: "green",
    },
    {
      label: "Préstamos Vencidos",
      value: "14",
      sub: "S/ 24,000",
      icon: AlertTriangle,
      color: "red",
    },
    {
      label: "Garantías Custodia",
      value: "82",
      sub: "Valor est. S/ 1.2M",
      icon: ShieldCheck,
      color: "orange",
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-2 rounded-lg bg-${kpi.color}-50 text-${kpi.color}-600 group-hover:scale-110 transition-transform`}
              >
                <kpi.icon size={24} />
              </div>
              <ArrowUpRight size={18} className="text-gray-400" />
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{kpi.label}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
            <p className="text-sm text-gray-400 mt-1">{kpi.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming expirations table */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="Próximos Vencimientos">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b">
                    <th className="pb-3">Cliente</th>
                    <th className="pb-3">Vence</th>
                    <th className="pb-3 text-right">Monto</th>
                    <th className="pb-3 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      name: "Juan Pérez",
                      date: "31/01/2026",
                      amount: "S/ 450.00",
                      status: "orange",
                    },
                    {
                      name: "María García",
                      date: "01/02/2026",
                      amount: "S/ 1,200.00",
                      status: "blue",
                    },
                    {
                      name: "Carlos López",
                      date: "02/02/2026",
                      amount: "S/ 300.00",
                      status: "blue",
                    },
                  ].map((item, i) => (
                    <tr key={i} className="group hover:bg-gray-50">
                      <td className="py-4">
                        <div className="font-semibold text-gray-800">
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-400">P-2024-001</div>
                      </td>
                      <td className="py-4">
                        <Badge color={item.status}>{item.date}</Badge>
                      </td>
                      <td className="py-4 text-right font-medium text-gray-900">
                        {item.amount}
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                          Cobrar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Side cards: alerts and quick actions */}
        <div className="space-y-6">
          <Card title="Alertas Críticas">
            <div className="space-y-4">
              {[
                {
                  title: "Mora crítica (45 días)",
                  user: "Roberto Sánchez",
                  type: "error",
                },
                {
                  title: "Garantía por vencer",
                  user: "Laura Beltrán",
                  type: "warning",
                },
                {
                  title: "Contrato pendiente",
                  user: "Miguel Angel",
                  type: "info",
                },
              ].map((alert, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 rounded-lg border border-gray-100 bg-gray-50 items-start"
                >
                  <div
                    className={`mt-1 p-1 rounded bg-white shadow-sm ${
                      alert.type === "error"
                        ? "text-red-500"
                        : alert.type === "warning"
                          ? "text-orange-500"
                          : "text-blue-500"
                    }`}
                  >
                    <AlertTriangle size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 leading-tight">
                      {alert.title}
                    </p>
                    <p className="text-xs text-gray-500">{alert.user}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Ver todas las alertas
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

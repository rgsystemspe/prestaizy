import React from "react";
import Card from "../../../components/Card";
import Badge from "../../../components/Badge";

/**
 * Vista de administración de garantías (colaterales).
 * Permite visualizar las garantías asociadas a préstamos y su estado de custodia.
 */
const GarantiasView = () => {
  const collaterals = [
    {
      id: 1,
      tipo: "Vehículo",
      descripcion: "Auto Toyota 2015",
      valor: 20000,
      custodia: true,
    },
    {
      id: 2,
      tipo: "Inmueble",
      descripcion: "Casa en Lima",
      valor: 80000,
      custodia: false,
    },
    {
      id: 3,
      tipo: "Joyas / Oro",
      descripcion: "Collar de oro 18K",
      valor: 5000,
      custodia: true,
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
      <h2 className="text-2xl font-bold text-gray-900">Garantías</h2>
      <Card title="Lista de Garantías">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b">
                <th className="pb-3">Tipo</th>
                <th className="pb-3">Descripción</th>
                <th className="pb-3 text-right">Valor Estimado</th>
                <th className="pb-3">Custodia</th>
                <th className="pb-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {collaterals.map((col) => (
                <tr key={col.id} className="group hover:bg-gray-50">
                  <td className="py-4 font-semibold text-gray-800">{col.tipo}</td>
                  <td className="py-4 text-sm text-gray-600">{col.descripcion}</td>
                  <td className="py-4 text-sm text-right text-gray-600">
                    S/ {col.valor.toLocaleString()}
                  </td>
                  <td className="py-4">
                    <Badge color={col.custodia ? "blue" : "gray"}>
                      {col.custodia ? "En custodia" : "No"}
                    </Badge>
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

export default GarantiasView;
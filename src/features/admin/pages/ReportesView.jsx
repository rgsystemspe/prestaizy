import React from "react";
import Card from "../../../components/Card";

/**
 * Vista de reportes.
 * Proporciona secciones para generar y visualizar reportes operativos y financieros.
 * Actualmente presenta un placeholder en espera de integración con gráficos y API.
 */
const ReportesView = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
      <h2 className="text-2xl font-bold text-gray-900">Reportes</h2>
      <Card title="Panel de Reportes">
        <div className="p-6 flex flex-col items-center justify-center text-gray-500">
          <p className="text-lg font-semibold mb-2">Módulo en construcción</p>
          <p className="text-sm text-center max-w-md">
            Aquí podrás generar reportes de cartera, morosidad, ingresos y otros
            KPIs clave. Además, se integrarán gráficos y filtros para analizar
            tendencias. Por ahora, este apartado sirve como placeholder hasta
            conectar con los servicios de datos.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ReportesView;
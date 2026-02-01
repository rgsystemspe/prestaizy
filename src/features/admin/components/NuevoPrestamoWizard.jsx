import React, { useState, useMemo } from "react";
import {
  X,
  Search,
  Plus,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  AlertTriangle,
  Camera,
  FileText,
} from "lucide-react";
import Card from "../../../components/Card";

/**
 * Multi-step wizard for creating a new loan. Handles client selection,
 * loan parameters, collateral information and document review. Extracted
 * from App.jsx into a reusable component under features/admin/components.
 *
 * Props:
 * - onCancel: callback invoked when the wizard is finished or cancelled
 */
const NuevoPrestamoWizard = ({ onCancel }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    monto: 1000,
    interes: 10,
    plazo: 4,
    frecuencia: "semanal",
    tipoInteres: "Mensual",
  });

  // Simple loan simulation using useMemo to avoid recalculations on every render
  const simulacion = useMemo(() => {
    const totalInteres = formData.monto * (formData.interes / 100);
    const totalPagar = formData.monto + totalInteres;
    const cuotaMonto = totalPagar / formData.plazo;
    return { totalInteres, totalPagar, cuotaMonto };
  }, [formData]);

  const steps = [
    { n: 1, name: "Cliente" },
    { n: 2, name: "Datos" },
    { n: 3, name: "Garantías" },
    { n: 4, name: "Documentos" },
  ];

  return (
    <div className="max-w-5xl mx-auto animate-in zoom-in-95 duration-300">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Crear Nuevo Préstamo
          </h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600"
          >
            <X />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="relative flex justify-between items-center px-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2"></div>
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-blue-600 -z-10 transition-all duration-500 transform -translate-y-1/2"
            style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition duration-300 border-4 ${
                  step >= s.n
                    ? "bg-blue-600 border-blue-100 text-white"
                    : "bg-white border-gray-100 text-gray-400"
                }`}
              >
                {step > s.n ? <CheckCircle2 size={20} /> : s.n}
              </div>
              <span
                className={`text-xs mt-2 font-bold ${
                  step >= s.n ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Seleccionar Cliente
                </h3>
                <div className="relative">
                  <Search
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Buscar por DNI o Nombre..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div className="p-4 border-2 border-dashed border-gray-100 rounded-xl flex flex-col items-center justify-center py-10 bg-gray-50">
                  <p className="text-gray-400 mb-4">
                    ¿El cliente no está registrado?
                  </p>
                  <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-2 rounded-lg font-bold text-gray-700 hover:bg-gray-100 shadow-sm">
                    <Plus size={18} /> Registrar Nuevo Cliente
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Condiciones del Préstamo
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      Monto a Prestar (S/)
                    </label>
                    <input
                      type="number"
                      value={formData.monto}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          monto: Number(e.target.value),
                        })
                      }
                      className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-200 text-xl font-bold text-blue-600"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      Tipo Interés
                    </label>
                    <select className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-200 bg-white">
                      <option>Mensual</option>
                      <option>Diario</option>
                      <option>Semanal</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      Tasa (%)
                    </label>
                    <input
                      type="number"
                      value={formData.interes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          interes: Number(e.target.value),
                        })
                      }
                      className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      Plazo
                    </label>
                    <input
                      type="number"
                      value={formData.plazo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          plazo: Number(e.target.value),
                        })
                      }
                      className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-200"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      Frecuencia
                    </label>
                    <select className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-200 bg-white">
                      <option>Semanal</option>
                      <option>Diario</option>
                      <option>Quincenal</option>
                      <option>Mensual</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800">Garantías</h3>
                  <button className="text-blue-600 text-sm font-bold flex items-center gap-1">
                    <Plus size={16} /> Agregar otra
                  </button>
                </div>
                <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">
                        Tipo de Garantía
                      </label>
                      <select className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-200 bg-white">
                        <option>Vehículo</option>
                        <option>Inmueble</option>
                        <option>Joyas / Oro</option>
                        <option>Electrodomésticos</option>
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="text-xs font-bold text-gray-400 uppercase">
                        Descripción / Detalles
                      </label>
                      <textarea
                        className="w-full px-4 py-2 mt-1 rounded-lg border border-gray-200 h-20"
                        placeholder="Marca, modelo, estado, serie..."
                      ></textarea>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <input
                        type="checkbox"
                        id="custodia"
                        className="rounded text-blue-600"
                      />
                      <label
                        htmlFor="custodia"
                        className="text-sm font-semibold text-gray-700"
                      >
                        En custodia física
                      </label>
                    </div>
                    <div className="col-span-2 border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-gray-50">
                      <Camera className="text-gray-300 mb-2" size={32} />
                      <p className="text-sm font-bold text-gray-500">
                        Subir Fotos
                      </p>
                      <p className="text-xs text-gray-400">
                        Arraste aquí o haga click
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Documentos y Confirmación
                </h3>
                <div className="space-y-3">
                  {[
                    { label: "Contrato de Préstamo", checked: true },
                    { label: "Pagaré a la Vista", checked: true },
                    { label: "Acta de Entrega de Garantía", checked: false },
                  ].map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="text-blue-600" />
                        <span className="font-semibold text-gray-700">
                          {doc.label}
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked={doc.checked}
                        className="w-5 h-5 rounded text-blue-600"
                      />
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <p className="text-sm text-blue-700 font-medium">
                    Al confirmar se generarán los documentos para firma digital
                    o física. Asegúrese de que los datos sean correctos.
                  </p>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                disabled={step === 1}
                onClick={() => setStep(step - 1)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition ${
                  step === 1
                    ? "text-gray-300"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <ChevronLeft size={18} /> Anterior
              </button>
              <button
                onClick={() => (step < 4 ? setStep(step + 1) : onCancel())}
                className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition transform active:scale-95 shadow-lg shadow-blue-200"
              >
                {step === 4 ? "Confirmar Préstamo" : "Siguiente"}
                <ChevronRight size={18} />
              </button>
            </div>
          </Card>
        </div>

        {/* Sidebar with simulation */}
        <div className="space-y-6">
          <Card title="Simulador en Vivo">
            <div className="space-y-6">
              <div className="pb-4 border-b border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">
                  Resumen Financiero
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Monto Principal</span>
                    <span className="font-bold text-gray-800">
                      S/ {formData.monto.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Intereses Totales</span>
                    <span className="font-bold text-green-600">
                      + S/ {simulacion.totalInteres.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg pt-2 border-t border-gray-50">
                    <span className="font-bold text-gray-900">
                      Total a Pagar
                    </span>
                    <span className="font-extrabold text-blue-600">
                      S/ {simulacion.totalPagar.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase mb-3">
                  Cronograma Sugerido
                </p>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                  {Array.from({ length: formData.plazo }).map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-100 text-sm"
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-700">
                          Cuota #{i + 1}
                        </span>
                        <span className="text-xs text-gray-400">
                          Fecha est.{" "}
                          {new Date(
                            Date.now() + (i + 1) * 7 * 24 * 60 * 60 * 1000,
                          ).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="font-bold text-gray-900">
                        S/ {simulacion.cuotaMonto.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NuevoPrestamoWizard;

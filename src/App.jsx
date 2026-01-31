import React, { useState, useMemo, useEffect } from "react";
import {
  LayoutDashboard,
  Users,
  HandCoins,
  ShieldCheck,
  Bell,
  Search,
  Menu,
  X,
  Plus,
  FileText,
  Wallet,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  History,
  Printer,
  Download,
  Eye,
  LogOut,
  User,
  MoreVertical,
  ArrowUpRight,
  TrendingUp,
  CreditCard,
  MessageCircle,
  Phone,
  Camera,
  ChevronLeft,
} from "lucide-react";

// --- COMPONENTES ATÓMICOS ---

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    green: "bg-green-100 text-green-700 border-green-200",
    red: "bg-red-100 text-red-700 border-red-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
  };
  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${colors[color]}`}
    >
      {children}
    </span>
  );
};

const Card = ({ title, children, footer }) => (
  <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden h-full flex flex-col">
    {title && (
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
    )}
    <div className="p-6 flex-grow">{children}</div>
    {footer && (
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
        {footer}
      </div>
    )}
  </div>
);

// --- COMPONENTES DE VISTA (PÁGINAS) ---

// 1. LOGIN
const LoginView = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
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

// 2. DASHBOARD
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
                    className={`mt-1 p-1 rounded bg-white shadow-sm ${alert.type === "error" ? "text-red-500" : alert.type === "warning" ? "text-orange-500" : "text-blue-500"}`}
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

          <Card title="Acciones Rápidas">
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  label: "Nuevo Préstamo",
                  icon: Plus,
                  color: "blue",
                  action: () => setActiveView("nuevo-prestamo"),
                },
                {
                  label: "Registrar Pago",
                  icon: Wallet,
                  color: "green",
                  action: () => {},
                },
                {
                  label: "Nuevo Cliente",
                  icon: Users,
                  color: "purple",
                  action: () => setActiveView("clientes"),
                },
                {
                  label: "Ver Reportes",
                  icon: FileText,
                  color: "orange",
                  action: () => setActiveView("reportes"),
                },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={item.action}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-sm transition gap-2"
                >
                  <item.icon size={20} className={`text-${item.color}-600`} />
                  <span className="text-xs font-bold text-gray-600">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

// 4. NUEVO PRÉSTAMO (WIZARD)
const NuevoPrestamoWizard = ({ onCancel }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    monto: 1000,
    interes: 10,
    plazo: 4,
    frecuencia: "semanal",
    tipoInteres: "Mensual",
  });

  // Simulador Simple
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
                className={`text-xs mt-2 font-bold ${step >= s.n ? "text-blue-600" : "text-gray-400"}`}
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
                {step === 4 ? "Confirmar Préstamo" : "Siguiente"}{" "}
                <ChevronRight size={18} />
              </button>
            </div>
          </Card>
        </div>

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

// 10. CONFIGURACIÓN
const ConfigView = () => (
  <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-2">
    <h2 className="text-2xl font-bold text-gray-900">
      Configuración del Sistema
    </h2>
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
            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold transition ${i === 1 ? "bg-blue-50 text-blue-600 shadow-sm" : "text-gray-500 hover:bg-gray-100"}`}
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

// --- MAIN LAYOUT ---

const MainApp = () => {
  const [user, setUser] = useState(null);
  const [activeView, setActiveView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!user) return <LoginView onLogin={setUser} />;

  const menuItems = [
    { id: "dashboard", label: "Inicio", icon: LayoutDashboard },
    { id: "clientes", label: "Clientes", icon: Users },
    { id: "prestamos", label: "Préstamos", icon: HandCoins },
    { id: "cobranzas", label: "Cobranzas", icon: Wallet },
    { id: "garantias", label: "Garantías", icon: ShieldCheck },
    { id: "reportes", label: "Reportes", icon: FileText },
    { id: "config", label: "Configuración", icon: MoreVertical },
  ];

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard setActiveView={setActiveView} />;
      case "nuevo-prestamo":
        return (
          <NuevoPrestamoWizard onCancel={() => setActiveView("dashboard")} />
        );
      case "config":
        return <ConfigView />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-64 text-gray-400 bg-white rounded-xl border-2 border-dashed border-gray-100">
            <Clock size={48} className="mb-4 opacity-20" />
            <p className="font-bold">Módulo "{activeView}" en desarrollo</p>
            <button
              onClick={() => setActiveView("dashboard")}
              className="mt-4 text-blue-600 font-bold hover:underline"
            >
              Volver al Inicio
            </button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 transform ${isSidebarOpen ? "w-64" : "w-20"} lg:translate-x-0`}
      >
        <div className="p-6 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <HandCoins size={24} />
          </div>
          {isSidebarOpen && (
            <span className="font-black text-xl tracking-tight text-gray-800">
              PRESTA<span className="text-blue-600">FACIL</span>
            </span>
          )}
        </div>

        <nav className="mt-6 px-3 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition duration-200 group ${
                activeView === item.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon
                size={22}
                className={
                  activeView === item.id
                    ? "text-white"
                    : "text-gray-400 group-hover:text-blue-600"
                }
              />
              {isSidebarOpen && (
                <span className="font-bold text-sm tracking-wide">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 w-full px-3">
          <button
            onClick={() => setUser(null)}
            className="w-full flex items-center gap-4 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition font-bold text-sm"
          >
            <LogOut size={22} />
            {isSidebarOpen && <span>Cerrar Sesión</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}
      >
        {/* Topbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
            >
              <Menu size={20} />
            </button>
            <div className="relative hidden md:block w-96">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Buscar clientes, préstamos..."
                className="w-full bg-gray-100 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveView("nuevo-prestamo")}
              className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100"
            >
              <Plus size={18} /> Nuevo Préstamo
            </button>
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">{user.name}</p>
                <p className="text-xs text-blue-600 font-semibold">
                  {user.role}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 border-2 border-white shadow-sm overflow-hidden">
                <User size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-8">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => setActiveView("dashboard")}
            >
              Inicio
            </span>
            <ChevronRight size={14} />
            <span className="text-gray-900">
              {activeView.replace("-", " ")}
            </span>
          </div>

          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return <MainApp />;
}

import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  HandCoins,
  Wallet,
  ShieldCheck,
  FileText,
  MoreVertical,
  Clock,
  Menu,
  Search,
  Plus,
  Bell,
  User as UserIcon,
  LogOut,
  ChevronRight,
} from "lucide-react";

import Login from "../pages/Login";
import Dashboard from "../features/admin/pages/Dashboard";
import NuevoPrestamoWizard from "../features/admin/components/NuevoPrestamoWizard";
import ConfigView from "../features/admin/pages/ConfigView";
// Nuevas páginas para los distintos módulos
import ClientesView from "../features/admin/pages/ClientesView";
import PrestamosView from "../features/admin/pages/PrestamosView";
import CobranzasView from "../features/admin/pages/CobranzasView";
import GarantiasView from "../features/admin/pages/GarantiasView";
import ReportesView from "../features/admin/pages/ReportesView";

/**
 * MainApp layout component. Handles authentication, sidebar navigation,
 * topbar actions and renders the appropriate page based on `activeView`.
 * Extracted from the monolithic App.jsx file for clarity and separation
 * of concerns.
 */
const MainApp = () => {
  const [user, setUser] = useState(null);
  const [activeView, setActiveView] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Render login page until a user is present
  if (!user) return <Login onLogin={setUser} />;

  const menuItems = [
    { id: "dashboard", label: "Inicio", icon: LayoutDashboard },
    { id: "clientes", label: "Clientes", icon: Users },
    { id: "prestamos", label: "Préstamos", icon: HandCoins },
    { id: "cobranzas", label: "Cobranzas", icon: Wallet },
    { id: "garantias", label: "Garantías", icon: ShieldCheck },
    { id: "reportes", label: "Reportes", icon: FileText },
    { id: "config", label: "Configuración", icon: MoreVertical },
  ];

  /**
   * Choose which page/component to render based on the current activeView.
   */
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
      case "clientes":
        return <ClientesView />;
      case "prestamos":
        return (
          <PrestamosView onCreateLoan={() => setActiveView("nuevo-prestamo")} />
        );
      case "cobranzas":
        return <CobranzasView />;
      case "garantias":
        return <GarantiasView />;
      case "reportes":
        return <ReportesView />;
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
        className={`fixed inset-y-0 left-0 z-50 bg-white border-r border-gray-200 transition-all duration-300 transform ${
          isSidebarOpen ? "w-64" : "w-20"
        } lg:translate-x-0`}
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
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
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
                <UserIcon size={20} />
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

export default MainApp;

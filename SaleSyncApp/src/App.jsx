import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";

import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Sales from "./pages/Sales";

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="clientes" element={<Customers />} />
        <Route path="ventas" element={<Sales />} />
        <Route path="productos" element={<Products />} />
        <Route path="pagos" element={<Payments />} />
        <Route path="reportes" element={<Reports />} />
      </Route>
    </Routes>
  );
}

export default App;

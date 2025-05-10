import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/admin/LoginPage";
import AdminDashboard from "../pages/admin/AdminDashboard";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="login"
        element={
            <LoginPage />
        }
      />
      <Route
        path="admin-dashboard"
        element={
            <AdminDashboard />
        }
      />
    </Routes>
  );
}

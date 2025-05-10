import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/user/LoginPage";
import RegisterPage from "../pages/user/RegisterPage";
import Dashboard from "../pages/user/Dashboard";

export default function UserRoutes() {
  return (
    <Routes>
      <Route
        path="login"
        element={
            <LoginPage />
        }
      />
      <Route
        path="register"
        element={
            <RegisterPage />
        }
      />
      <Route
        path="dashboard"
        element={
            <Dashboard />
        }
      />
    </Routes>
  );
}

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../context/auth-store/auth-store";

export default function ProtectedRoute({ children }) {
  const isAuth = useAuthStore((state) => state.isAuthenticated);

  return isAuth ? children : <Navigate to="/login" />;
}

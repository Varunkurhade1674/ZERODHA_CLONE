import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import "../dashboard/index.css";

function DashboardLayout() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="dashboard-layout" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;

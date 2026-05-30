import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";

import NotFound from "./landing_page/NotFound";
import PublicLayout from "./landing_page/PublicLayout";
import DashboardLayout from "./landing_page/DashboardLayout";

// Import migrated Dashboard Entry Component
import DashboardHome from "./dashboard/components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Public Marketing Routes wrapped with marketing Navbar and Footer */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Route>

      {/* Private Secured Trading Dashboard Routes (No public Navbar/Footer) */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard/*" element={<DashboardHome />} />
      </Route>

      {/* General Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);


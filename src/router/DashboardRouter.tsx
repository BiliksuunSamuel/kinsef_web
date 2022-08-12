import React from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboard/frontend";
import { OrdersPage } from "../pages/dashboard/general";

export default function DashboardRouter() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="orders" element={<OrdersPage />} />
      </Route>
    </Routes>
  );
}

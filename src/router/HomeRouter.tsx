import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, ProductsPage } from "../pages/home/frontend";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

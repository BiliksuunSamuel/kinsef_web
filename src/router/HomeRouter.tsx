import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  ProductInfoPage,
  ProductsPage,
} from "../pages/home/frontend";

export default function HomeRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="" element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductInfoPage />} />
      </Route>
    </Routes>
  );
}

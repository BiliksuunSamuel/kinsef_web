import React from "react";
import { Route, Routes } from "react-router-dom";
import { CheckOutPage, StorePage } from "../pages/home/frontend/store/frontend";

export default function StoreRouter() {
  return (
    <Routes>
      <Route path="/store" element={<StorePage />}>
        <Route path="checkout" element={<CheckOutPage />} />
      </Route>
    </Routes>
  );
}

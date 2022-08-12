import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage, LoginPage, RegisterPage } from "../pages/auth/frontend";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/account" element={<AuthPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

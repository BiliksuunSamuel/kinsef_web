import { ThemeProvider } from "@mui/material";
import React from "react";
import themeConfiguration from "./configuration/themeConfiguration";
import Router from "./router/Router";

export default function App() {
  return (
    <ThemeProvider theme={themeConfiguration}>
      <Router />
    </ThemeProvider>
  );
}

import React from "react";
import PageRouter from "../router";
import ThemeProvider from "./theme";
const AppProvider = () => {
  return (
      <ThemeProvider>
        <PageRouter />
      </ThemeProvider>
  )
};

export default AppProvider;

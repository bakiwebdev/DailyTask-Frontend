import React from "react";
import PageRouter from "../router";
import LocalData from "./Local";
import ThemeProvider from "./theme";
const AppProvider = () => {
  return (
    <ThemeProvider>
      <LocalData>
        <PageRouter />
      </LocalData>
    </ThemeProvider>
  );
};

export default AppProvider;

import React from "react";
import PageRouter from "../router";
import LocalData from "./Local";
import ThemeProvider from "./theme";
import UserProvider from "./User";
const AppProvider = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <LocalData>
          <PageRouter />
        </LocalData>
      </ThemeProvider>
    </UserProvider>
  );
};

export default AppProvider;

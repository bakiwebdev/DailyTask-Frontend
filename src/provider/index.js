import React from "react";
import PageRouter from "../router";
import TaskProvider from "./Task";
import ThemeProvider from "./theme";
import UserProvider from "./User";
const AppProvider = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <TaskProvider>
          <PageRouter />
        </TaskProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default AppProvider;

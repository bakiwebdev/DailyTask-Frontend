import React from "react";
import PageRouter from "../router";
import TaskProvider from "./Task";
import UserProvider from "./User";
import GlobalMessageProvider from "./Message";
const AppProvider = () => {
  return (
    <UserProvider>
      <GlobalMessageProvider>
        <TaskProvider>
          <PageRouter />
        </TaskProvider>
      </GlobalMessageProvider>
    </UserProvider>
  );
};

export default AppProvider;

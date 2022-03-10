import React from "react";
import PageRouter from "../router";
import TaskProvider from "./task";
import UserProvider from "./user";
import GlobalMessageProvider from "./message";
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

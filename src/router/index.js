import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import PageHeader from "../components/header/header";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import AddTaskPage from "../pages/AddTaskPage";
import NotFoundPage from "../pages/NotFound";
import Detail from "../pages/Detail";
// Detail
const PageRouter = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;

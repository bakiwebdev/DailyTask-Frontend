import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import PageHeader from "../components/header/header";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import AddTaskPage from "../pages/add_task_page";
import NotFoundPage from "../pages/not_found";
import Detail from "../pages/detail";
import EditPage from "../pages/edit";
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
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;

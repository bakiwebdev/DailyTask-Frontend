import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/index";
import Today from "../pages/today/index";
import Message from "../pages/message/index";
import Notification from "../pages/notification/index";
import Team from "../pages/team/index";
import Account from "../pages/account/index";
import Setting from "../pages/setting/index";
import NavBar from "../components/nav_bar";
const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="today" element={<Today />} />
          <Route path="message" element={<Message />} />
          <Route path="notification" element={<Notification />} />
          <Route path="team" element={<Team />} />
          <Route path="account" element={<Account />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;

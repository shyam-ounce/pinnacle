import React from "react";
import "./style.css";
import { Outlet } from "react-router-dom";
const LeftBar = React.lazy(() => import("../components/leftbar"));
const Topbar = React.lazy(() => import("../components/topbar"));

const MainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

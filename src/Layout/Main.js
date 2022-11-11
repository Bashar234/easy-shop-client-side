import React from "react";
import Navbar from "../Component/Header/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;

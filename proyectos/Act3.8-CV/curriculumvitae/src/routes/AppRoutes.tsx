import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes: React.FC= () => {
  return (
    <Routes>
      <Route path={RoutePaths.Home} element={<Home />} />
      <Route path={RoutePaths.About} element={<About />} />
      <Route path={RoutePaths.Contact} element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;

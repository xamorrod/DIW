import React from "react";
import { Routes, Route } from "react-router-dom";
import RoutePaths from "./RoutePaths";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.ABOUT} element={<About />} />
      <Route path={RoutePaths.CONTACT} element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Default/Home";
import About from "./Pages/Default/About";
import AdminPortal from "./Pages/Portal/Portal";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminPortal" element={<AdminPortal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

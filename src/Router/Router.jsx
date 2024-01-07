import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/navbar/Header";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

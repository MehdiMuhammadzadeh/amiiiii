import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/navbar/Header";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ShowHeader from "../components/navbar/ShowHeader";
const Router = () => {

  return (
    <BrowserRouter>
      <ShowHeader>
        <Header />
      </ShowHeader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};



export default Router;

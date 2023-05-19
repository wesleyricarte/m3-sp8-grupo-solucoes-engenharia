import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import { LoginPage } from "../pages/Login";
import { DashBoard } from "../pages/Dashboard";
import Home from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Providers } from "../provider/Providers";
export const RoutesMain = () => {
  return (
    <Providers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Providers>
  );
};

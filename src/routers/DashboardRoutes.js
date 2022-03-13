import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import MainProduct from "../Components/MainProduct";
import Cart from "../Components/Cart";
import Footer from "../Components/Footer";
import Principal from "../Components/Principal";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/principal" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/product" element={<MainProduct/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

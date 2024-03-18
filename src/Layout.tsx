import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

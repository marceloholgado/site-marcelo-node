import React from "react";
import ThreeScene from "./animate3D";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <ThreeScene />
      <Nav className="fixed top-0 left-0 w-full z-20" />
      <main className="relative z-10 pt-16">
        <Outlet />
      </main>
      <Footer className="fixed bottom-0 left-0 w-full z-20" />
    </>
  );
}

export default Layout;

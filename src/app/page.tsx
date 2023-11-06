import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { Navbar } from "@nextui-org/react";
import Nav from "./Navbar";

const Container = () => {
  return (
    <div className="flex flex-col sm:flex-row md:container md:mx-auto">
      <div className="block sm:hidden">
        <Nav />
      </div>
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <Home />
    </div>
  );
};

export default Container;

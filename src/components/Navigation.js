import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="aboutus">
          About Us
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Navigation;

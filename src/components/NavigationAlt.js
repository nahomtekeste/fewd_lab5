import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import "./NavigationAlt.css";

const NavigationAlt = ({ scrollToWhoWeAre }) => {
  return (
    <>
      <nav className="navigation">
        <div className="logo">TechCon</div>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>Home</a>
          </li>
          
          <li>
            {/* Add onClick to call scrollToWhoWeAre */}
            <a href="#whoWeAres" onClick={(e) => { e.preventDefault(); scrollToWhoWeAre(); }}>
              About Us
            </a>
          </li>
          <li>
            {/* Add onClick to call scrollToWhoWeAre */}
            <a href="#conferences-section" onClick={(e) => { e.preventDefault(); scrollToWhoWeAre(); }}>
              Conference
            </a>
          </li>
          <li>
            <a href="/#" onClick={(e) => e.preventDefault()}>Sign Up</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavigationAlt;

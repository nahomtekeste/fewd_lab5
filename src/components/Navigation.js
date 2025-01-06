import React from "react";
import { Link } from "react-router-dom";
import "./NavigationAlt.css";

const Navigation = ({ scrollToWhoWeAre }) => {
  return (
    <nav className="navigation">
      <div className="logo">TechCon</div>
      <ul className="nav-links">
        <li>
          <Link to="/" onClick={scrollToWhoWeAre}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

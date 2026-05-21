import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">T SHOP</div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <button>Explore</button>
      </div>
    </nav>
  );
};

export default Navbar;

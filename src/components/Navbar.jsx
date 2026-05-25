import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logged out successfully");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">T SHOP</div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/product">Products</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>


        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
        </Link>

        {user ? (
          <>
            <Link to="/profile" className="nav-btn">
              {user.name}
            </Link>

            <button onClick={handleLogout} className="nav-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-btn">
              Login
            </Link>

            <Link to="/register" className="nav-btn">
              Sign Up
            </Link>
            <Link to="/orders" className="nav-btn">
             Orders
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
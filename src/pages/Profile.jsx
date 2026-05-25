import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Please Login First</h2>

          <button
            className="auth-btn"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>My Profile</h2>

        <p>
          <strong>Name:</strong> {user.name}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Address:</strong> {user.address}
        </p>

        <br />

        <button
          className="auth-btn"
          onClick={() => navigate("/cart")}
        >
          Go To Cart
        </button>

        <br />
        <br />

        <button
          className="auth-btn"
          onClick={() => navigate("/orders")}
        >
          My Orders
        </button>
      </div>
    </div>
  );
};

export default Profile;
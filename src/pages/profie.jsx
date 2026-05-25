import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Please Login First</h2>
          <button className="auth-btn" onClick={() => navigate("/login")}>
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

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>

        <button className="auth-btn" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default Profile;
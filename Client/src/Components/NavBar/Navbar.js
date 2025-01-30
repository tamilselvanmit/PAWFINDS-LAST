import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import "./Navbar.css";

const Navbar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Clear user authentication details
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/pets">Pets</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <button className="Navbar-button logout-button" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="Navbar-button login-button">
              Login
            </Link>
            <Link to="/signup" className="Navbar-button signup-button">
              Sign Up
            </Link>
          </>
        )}
        <Link to="/services">
          <button className="Navbar-button">Give a Pet</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import "./Header.css"; // Create this CSS file

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" style={{ width: "20vmax" }} />
        </Link>

        {/* Mobile menu toggle */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <MdClose size={25} /> : <HiOutlineMenuAlt3 size={25} />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              style={{ color: "rgba(35, 35, 35,0.8)", fontSize: "1.3vmax" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-link"
              style={{ color: "rgba(35, 35, 35,0.8)", fontSize: "1.3vmax" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link"
              style={{ color: "rgba(35, 35, 35,0.8)", fontSize: "1.3vmax" }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              style={{ color: "rgba(35, 35, 35,0.8)", fontSize: "1.3vmax" }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="nav-icons">
          <Link to="/login" className="nav-icon">
            <FaUser
              size={20}
              color="rgba(35, 35, 35,0.8)"
              className="icon-hover"
            />
          </Link>
          <div className="nav-icon">
            <FaSearch
              size={20}
              color="rgba(35, 35, 35,0.8)"
              className="icon-hover"
            />
          </div>
          <div className="nav-icon">
            <FaShoppingCart
              size={20}
              color="rgba(35, 35, 35,0.8)"
              className="icon-hover"
              style={{ margin: "0 1vmax" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
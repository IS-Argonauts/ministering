import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Ensure your CSS file is imported

interface NavBarProps {
  setIsAuthenticated: (value: boolean) => void;
}

function NavBar({ setIsAuthenticated }: NavBarProps) {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Track the state of the menu

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("loginTime");
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="header">
      <input
        className="menu-btn"
        type="checkbox"
        id="menu-btn"
        checked={menuOpen} // This controls the state of the checkbox
        onChange={() => setMenuOpen(!menuOpen)} // Toggle menu state on checkbox change
      />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        <li>
          <a href="#" onClick={() => handleNavigation("/Home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNavigation("/IdeaGenerator")}>
            Idea Generator
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNavigation("/ServiceRequest")}>
            Service Request
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNavigation("/PastEvents")}>
            Past Events
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNavigation("/Admin")}>
            Admin
          </a>
        </li>
      </ul>

      {/* Profile Icon and Dropdown */}
      <div
        className="profile-icon"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <FiUser />
      </div>

      <div className={`profile-dropdown ${isDropdownOpen ? "active" : ""}`}>
        <h4>Profile</h4>
        <label>
          Make Phone Number Public
          <input type="checkbox" />
        </label>
        <label>
          Make Personality Profile Public
          <input type="checkbox" />
        </label>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </header>
  );
}

export default NavBar;

import "./App.css";
import {
  FiHome,
  FiCompass,
  FiUsers,
  FiUserPlus,
  FiClock,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  setIsAuthenticated: (value: boolean) => void;
}

function NavBar({ setIsAuthenticated }: NavBarProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated"); // Clear localStorage
    localStorage.removeItem("loginTime"); // Clear login time
    setIsAuthenticated(false); // Update state
    navigate("/"); // Redirect to login page
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="header">
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        <li>
          <a href="#" onClick={() => handleNavigation("/Home")}>
            <FiHome /> Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNavigation("/IdeaGenerator")}>
            <FiCompass /> Idea Generator
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNavigation("/ServiceRequest")}>
            <FiUsers /> Service Request
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNavigation("/PastEvents")}>
            <FiClock /> Past Events
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNavigation("/Admin")}>
            <FiUserPlus /> Admin
          </a>
        </li>
      </ul>

      <div className="menu profile-icon">
        <FiUser />
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </header>
  );
}

export default NavBar;

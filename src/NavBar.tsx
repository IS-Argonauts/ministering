import "./App.css";
import { FiHome, FiCompass, FiUsers, FiUserPlus, FiClock } from "react-icons/fi";
function NavBar() {

  return (
    <>
    <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><a href="#home"><FiHome/> Home</a></li>
            <li><a href="#ideagenerator"><FiCompass/> Idea Generator</a></li>
            <li><a href="#servicerequest"><FiUsers/> Service Request</a></li>
            <li><a href="#pastevents"><FiClock /> Past Events</a></li>
            <li><a href="#admin"><FiUserPlus/> Admin</a></li>
        </ul>
    </header>
    </>
  )
}

export default NavBar;

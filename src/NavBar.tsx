import "./App.css";
import { FiHome, FiCompass, FiUsers, FiUserPlus, FiClock, FiUser } from "react-icons/fi";
function NavBar() {

  return (
    <>
    <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><a href="/Home"><FiHome/> Home</a></li>
            <li><a href="/IdeaGenerator"><FiCompass/> Idea Generator</a></li>
            <li><a href="/ServiceRequest"><FiUsers/> Service Request</a></li>
            <li><a href="/PastEvents"><FiClock /> Past Events</a></li>
            <li><a href="/Admin"><FiUserPlus/> Admin</a></li>
        </ul>
        <div className="menu, profile-icon">
          <FiUser/>
        </div>
        {/* some <FiUser/> here */}
    </header>
    </>
  )
}

export default NavBar;

import "./App.css";

function NavBar() {

  return (
    <>
    <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#ideagenerator">Idea Generator</a></li>
            <li><a href="#servicerequest">Service Request</a></li>
            <li><a href="#pastevents">Past Events</a></li>
            <li><a href="#admin">Admin</a></li>
        </ul>
    </header>
    </>
  )
}

export default NavBar;

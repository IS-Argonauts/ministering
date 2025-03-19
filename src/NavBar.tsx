import "./App.css";

function NavBar() {

  return (
    <>
    <header className="header">
        {/* <a href="" className="logo">CSS Nav</a> */}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
            <li><a href="#work">Our Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </header>
    </>
  )
}

export default NavBar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
function Header() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      
      <li className="nav-item active">
        <Link
          to="/"
          className={
            location.pathname === "/" || location.pathname === "/about"
              ? "nav-link active"
              : "nav-link"
          }
        >
          <h3>About</h3>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" ? "nav-link active" : "nav-link"
          }
        >
          <h3>Projects</h3>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={
            location.pathname === "/resume" ? "nav-link active" : "nav-link"
          }
        >
          <h3>Resume</h3>
        </Link>
      </li>
    </ul>
    //     <header>
    //       {/* <nav className="navbar navbar-dark bg-dark">
    //   <!-- Navbar content -->
    // </nav> */}

    //       <nav className="navbar navbar-expand-lg navbar-light bg-light">

    //         <div className="" id="navbarNav">

    //         </div>
    //       </nav>
    //     </header>
  );
}

export default Header;

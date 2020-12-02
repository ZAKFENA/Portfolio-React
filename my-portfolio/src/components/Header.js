import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
function Header() {
  return (
    <header>
      {/* <nav className="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img className="logo" src="/my-logo.png" alt="logo" />

        <div className="" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                <h3>About</h3>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/project"
                className={
                  window.location.pathname === "/project"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
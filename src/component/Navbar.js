import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "../img/avatar2.jpg";

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/About" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Portfolios" exact activeClassName="active">
              Portfolios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Blog" exact activeClassName="active">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">
          <p>@2021 MuhammedJawwad</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;

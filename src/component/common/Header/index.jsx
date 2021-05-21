import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light underBorder">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Admin Page
          </NavLink>
          <i className="fas fa-user icon iconUser"></i>
        </div>
      </nav>
    );
  }
}

export default Header;

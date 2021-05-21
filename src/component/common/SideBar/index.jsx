import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }
  handleClick = (num) => {
    this.setState({ num });
  };
  render() {
    const { num } = this.state;
    return (
      <nav className=" bg-light sidebar ">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <NavLink
              to="/"
              className="nav-link sidebar__link"
              onClick={() => this.handleClick(1)}
            >
              <li
                className={
                  "nav-item editNavItem " +
                  (num === 1 ? "highlight" : "nohightlight")
                }
              >
                <i className="fas fa-columns"></i>
                <p>Dashboard</p>
              </li>
            </NavLink>
            <NavLink
              className="nav-link sidebar__link"
              to="/oders"
              onClick={() => this.handleClick(2)}
            >
              <li
                className={
                  "nav-item editNavItem " +
                  (num === 2 ? "highlight" : "nohightlight")
                }
              >
                <i className="fas fa-shopping-cart"></i>
                <p>Orders</p>
              </li>
            </NavLink>
            <NavLink
              className="nav-link sidebar__link"
              to="/products"
              onClick={() => this.handleClick(3)}
            >
              <li
                className={
                  "nav-item editNavItem " +
                  (num === 3 ? "highlight" : "nohightlight")
                }
              >
                <i className="fas fa-file-invoice-dollar"></i>
                <p>Products</p>
              </li>
            </NavLink>
            <NavLink
              className="nav-link sidebar__link"
              to="/category"
              onClick={() => this.handleClick(4)}
            >
              <li
                className={
                  "nav-item editNavItem " +
                  (num === 4 ? "highlight" : "nohightlight")
                }
              >
                <i className="fas fa-cube"></i>
                <p>Categories</p>
              </li>
            </NavLink>

            <NavLink
              className="nav-link sidebar__link"
              to="/users"
              onClick={() => this.handleClick(5)}
            >
              <li
                className={
                  "nav-item editNavItem " +
                  (num === 5 ? "highlight" : "nohightlight")
                }
              >
                <i className="fas fa-users"></i>
                <p>Users</p>
              </li>
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default SideBar;

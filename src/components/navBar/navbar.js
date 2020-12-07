import React, { Component } from "react";
import NavBarContainer from "./navbar.style";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <NavBarContainer>
        <nav className="navbar navbar-expand-xl navbar-light bg-light sticky-top">
          <Link to="#" className="navbar-brand">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="#" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="#" className="dropdown-item">
                    Action
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Another Action
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="#" className="dropdown-item">
                    Something else
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </NavBarContainer>
    );
  }
}

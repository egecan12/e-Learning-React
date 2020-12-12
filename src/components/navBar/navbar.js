import React, { Component } from "react";
import NavBarContainer from "./navbar.style";
import { Link } from "react-router-dom";

export default class navbar extends Component {
  render() {
    return (
      <NavBarContainer>
        <nav className="navbar navbar-expand-xl navbar-dark sticky-top">
          <Link to="/" className="navbar-brand">
            Logo
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
                <Link to="/" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  Become an instructor
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
                  Pricing
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="#" className="dropdown-item">
                    Premium
                  </Link>
                  <Link to="#" className="dropdown-item">
                    Free account
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link to="#" className="dropdown-item">
                    Instructor account
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/userprofile">
                  User Porfile Settings
                </Link>
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

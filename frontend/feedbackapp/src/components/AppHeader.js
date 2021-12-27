import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class AppHeader extends Component {
  constructor() {
    super();
    const click = false;
  }

  setClick(value) {
    this.click = value;
  }

  render() {
    const handleClick = () => this.setClick(!this.click);
    const closeMobileMenu = () => this.setClick(false);

    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Feedloo<i className="fas fa-bullhorn"></i>
          </Link>
          {this.props.isAuthenticated ? (
            <>
              <div className="menu-icon" onClick={handleClick}>
                <i className={this.click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={this.click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/polls"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Active Polls
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            ""
          )}
        </div>
      </nav>
    );
  }
}

export default AppHeader;

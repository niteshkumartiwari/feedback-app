import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";


function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Feedloo<i className="fas fa-bullhorn"></i>
          </Link>
          {props.authenticated
            ? (<div className="menu-icon" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>)(
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-links"
                      onClick={closeMobileMenu}
                    >
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
              )
            : ""}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

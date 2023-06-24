import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
  useEffect(() => {
    // Initialize Bootstrap Navbar Collapse
    const navbar = document.querySelector("#mainNavigation .navbar-collapse");
    const toggleBtn = document.querySelector(
      "#mainNavigation .navbar-toggler"
    );

    const showCollapse = () => {
      navbar.classList.add("show");
    };

    const hideCollapse = () => {
      navbar.classList.remove("show");
    };

    toggleBtn.addEventListener("click", () => {
      if (navbar.classList.contains("show")) {
        hideCollapse();
      } else {
        showCollapse();
      }
    });

    return () => {
      // Clean up event listener
      toggleBtn.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <>
      <div id="mainNavigation">
        <nav className="navbar navbar-expand-md navbar-dark" role="navigation">
          <div className="py-3 text-center border-bottom">
            <img src="..\images\logo.png" alt="" className="invert logo" />
          </div>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon f-dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active f-green" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link f-green" href="/">
                  Book Hotel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link f-green" href="/">
                  Destinations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link f-green" href="/">
                  Policy
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle f-green"
                  href="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      About Us
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
const Navbar = () => {
  const [user, setUser] = useState("");
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <ul className="navbar-inner me-auto mb-2 mb-lg-0 gx-5 row">
            <li className=" col">
              <NavLink to={"/"} className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            {user ? (
              <>
                <li className=" col">
                  <span>Hi! {user}</span>
                </li>
                <li className=" col">
                  <NavLink to={"/logout"} className="nav-link">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className=" col">
                  <NavLink to={"/login"} className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className=" col">
                  <NavLink to={"/register"} className="nav-link">
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

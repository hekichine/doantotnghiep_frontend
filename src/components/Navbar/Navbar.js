import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../minh-sang-store.png";
const Navbar = () => {
  const user = useSelector((state) => state.auth.login.currentData);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <ul className="navbar-inner me-auto mb-2 mb-lg-0 gx-5 row">
            <li className=" col">
              <NavLink to={"/"} className="nav-link" aria-current="page">
                <img className="logo-store" src={logo} alt="logo-store" />
              </NavLink>
            </li>
            {user ? (
              <>
                <li className=" col">
                  <span>Hi! {user.payload.username}</span>
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

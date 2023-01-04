import React from "react";

import { NavLink } from "react-router-dom";
import "./header.scss";

import logo from "../../minh-sang-store.png";
import { FiAlignLeft, FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <div className="ms-header">
        <div className="container-fluid ms-container-fuild">
          <div className="row ms-header-inner ms-gx-30">
            <div className="ms-col-item col-lg-4 col-md-4 col-2">
              <div className="ms-col-inner">
                <div className="ms-menu-bar d-block d-md-none">
                  <FiAlignLeft />
                </div>
                <ul className="ms-menu-nav d-none d-md-flex">
                  <li>
                    <NavLink to={"/"} className="ms-nav-item">
                      Trang chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/categories"} className="ms-nav-item">
                      Thể loại
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to={"/blogs"} className="ms-nav-item">
                      Blog
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="ms-col-item col-lg-4 col-md-4 col-8">
              <div className="ms-col-inner text-center ms-logo-store">
                <NavLink to={"/"} className="ms-logo-app">
                  <img className="" src={logo} alt="logo-store" />
                </NavLink>
              </div>
            </div>
            <div className="ms-col-item col-lg-4 col-md-4 col-2">
              <div className="ms-col-inner text-end">
                <div className="ms-header-icon d-inline-flex">
                  <FiSearch />
                </div>
                <div className="ms-header-icon d-inline-flex">
                  <FiUser />
                </div>
                <div className="ms-header-icon d-inline-flex">
                  <FiShoppingBag />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* header top */}
      <div className="headerTop">
        <div className="headerTopLinks">
          <Link to="/account">Account: Guest</Link>
          <Link to="/cart">Your Cart(1)</Link>
          <Link to="/login">Login / Register</Link>
        </div>
      </div>

      {/* header bottom */}
      <div className="headerBottom">
        <div className="headerLogo">
          <NavLink to="/" className="headerLogoLink">
            <h2 className="headerLogoTitle">Mohamed</h2>
            <h4 className="headerLogoTitle">online shopping</h4>
          </NavLink>
        </div>
        <div className="headerNav">
          <ul>
            <li>
              <NavLink to="/" className="headerNavLink">
                Home
              </NavLink>
            </li>
            <li>
              <a href="/#men" className="headerNavLink">
                Apple
              </a>
            </li>
            <li>
              <a href="/#women" className="headerNavLink">
                Redmi
              </a>
            </li>
            <li>
              <a href="/#kids" className="headerNavLink">
                Sumsung
              </a>
            </li>
            <li>
              <NavLink to="/products" className="headerNavLink">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="headerNavLink">
                Explore
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

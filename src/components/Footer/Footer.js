import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerDiv">
          <div className="footerLogo">
            <NavLink to="/" className="footerLogoLink">
              <h2 className="footerLogoTitle">Mohmaed</h2>
            </NavLink>
          </div>
          <div className="footerLinks">
            <Link to="/">Kinniya, Srilanka</Link>
            <Link to="/">abce@gmail.com</Link>
            <Link to="/">+123 01234567</Link>
          </div>
        </div>
        <div className="footerDiv">
          <div className="footerTitle">
            <h4>Shopping & Categories</h4>
          </div>
          <div className="footerLinks">
            <Link to="/">Apple</Link>
            <Link to="/">Sumsung</Link>
            <Link to="/">Redmi</Link>
          </div>
        </div>
        <div className="footerDiv">
          <div className="footerTitle">
            <h4>Useful Links</h4>
          </div>
          <div className="footerLinks">
            <Link to="/">Homepage</Link>
            <Link to="/about">About Us</Link>
            <Link to="/">Help</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="footerDiv">
          <div className="footerTitle">
            <h4>Help & Information</h4>
          </div>
          <div className="footerLinks">
            <Link to="/">Helps</Link>
            <Link to="/">FAQ's</Link>
            <Link to="/">Shipping</Link>
            <Link to="/">Tracking ID</Link>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomCopyright">
          <p className="footerBottomText">
            Copyright &copy; MHD. All Rights Reserved.
          </p>
          {/* <p className="footerBottomText">
            Design: <Link to="/">MHD</Link>
          </p>
          <p className="footerBottomText">
            Distributed By: <Link to="/">MHD</Link>
          </p> */}
          <div className="footerBottomSocials">
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaYoutube />
            </Link>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

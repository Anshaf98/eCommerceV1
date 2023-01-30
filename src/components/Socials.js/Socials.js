import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <div className="socialsDiv">
        <div className="socialsTop">
          <h2>Social Media</h2>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="socialsBottom">
          <div className="socialsBottomImages">
            <div className="socialsBottomImg">
              <img
                src="https://images.pexels.com/photos/1202575/pexels-photo-1202575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="socialsHover">
                <Link to="/">Fashion</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img
                src="https://images.pexels.com/photos/805922/pexels-photo-805922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="socialsHover">
                <Link to="/">New</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img
                src="https://images.pexels.com/photos/1202575/pexels-photo-1202575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="socialsHover">
                <Link to="/">Brand</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img
                src="https://images.pexels.com/photos/805922/pexels-photo-805922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="socialsHover">
                <Link to="/">Best</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img
                src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="socialsHover">
                <Link to="/">New Style</Link>
                <FaInstagram />
              </div>
            </div>
            <div className="socialsBottomImg">
              <img
                src="https://images.pexels.com/photos/805922/pexels-photo-805922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="socialsHover">
                <Link to="/">Ultra</Link>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;

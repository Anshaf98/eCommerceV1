import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="intro">
      <div className="introLeft">
        <div className="introLeftDiv">
          <div className="introLeftContent">
            <h2 className="introTitle">We are Mohamed</h2>
            <Link to="/products" className="introLink">
              Purchase Now!
            </Link>
          </div>
          <img
            src="https://images.pexels.com/photos/1038628/pexels-photo-1038628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="introRight">
        <div className="introRightDiv">
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Apple</h3>
                <p className="introRightDesc">Best & New Trend</p>
              </div>
              <img
                src="https://images.pexels.com/photos/347696/pexels-photo-347696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Apple</h3>
                <p className="introRightTextDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link to="/" className="introRightLink">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Redmi</h3>
                <p className="introRightDesc">Best & New</p>
              </div>
              <img
                src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Redmi</h3>
                <p className="introRightTextDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link to="/" className="introRightLink">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Sumsung</h3>
                <p className="introRightDesc">Best One</p>
              </div>
              <img
                src="https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Sumsung</h3>
                <p className="introRightTextDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link to="/" className="introRightLink">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
          <div className="introRightContent">
            <div className="introRightInner">
              <div className="introRightTexts">
                <h3 className="introRightTitle">Accessories</h3>
                <p className="introRightDesc">Best Trend for Accessories</p>
              </div>
              <img
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="introRightHover">
              <div className="introRightHoverTexts">
                <h3 className="introRightTextTitle">Accessories</h3>
                <p className="introRightTextDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <Link to="/" className="introRightLink">
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

const Order = () => {
  return (
    <div className="order">
      <h2 className="orderTitle">Order ID: </h2>
      <div className="orderDiv">
        <div className="orderLeft">
          <h4 className="orderInfoTitle">Product Image</h4>
          <div className="cartItemsDiv orderDiv">
            <div className="cartItemsTop product orderProduct">
              <div className="cartItemsTopInner orderImageDiv">
                <img src="" alt="" className="sliderImage" />
              </div>
              <div className="cartItemsTopHover orderHover">
                <Link to={`/product/`} className="cartItemsLink">
                  <FaEye />
                </Link>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className="orderMiddle">
          <h4 className="orderInfoTitle">User Info</h4>
          <div className="orderInfo">
            <p className="orderText">
              Full Name: <span></span>
            </p>
            <p className="orderText">
              E-mail: <span></span>
            </p>
            <p className="orderText">
              Country: <span></span>
            </p>
            <p className="orderText">
              City: <span></span>
            </p>
            <p className="orderText">
              Address: <span></span>
            </p>
            <p className="orderText">
              Phone: <span></span>
            </p>
            <p className="orderText">
              Number of Products: <span></span>
            </p>
            <p className="orderText">
              Price: <span>$</span>
            </p>
            <p className="orderText">
              Date: <span></span>
            </p>
          </div>
        </div>
        <div className="orderRight">
          <h4 className="orderInfoTitle">Others Info</h4>
          <div className="orderInfo">
            <p className="orderText">
              Paid At: <span>Not Paid</span>
            </p>
            <p className="orderText">
              Delivery At: <span>Not Delivery</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

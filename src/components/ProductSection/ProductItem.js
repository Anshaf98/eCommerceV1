import React from "react";
import { FaEye, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = () => {
  return (
    <div className="sliderImgDiv">
      <div className="sliderImgTop">
        <div className="sliderImgTopInner">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_873385-MLM51559384419_092022-O.jpg"
            alt=""
            className="sliderImage"
          />
        </div>
        <div className="sliderImgTopHover">
          <Link to="/product/3423" className="sliderImgLink">
            <FaEye />
          </Link>
          <Link to="/" className="sliderImgLink">
            <FaStar />
          </Link>
          <Link to="/" className="sliderImgLink">
            <FaShoppingCart />
          </Link>
        </div>
      </div>
      <div className="sliderImgBottom">
        <div className="sliderImgBottomTop">
          <h3 className="sliderImgTitle">I11</h3>
          <span className="sliderImgStar">
            5 <FaStar />
          </span>
        </div>
        <div className="sliderImgBottomBottom">
          <h4 className="sliderImgPrice">$1200000.00</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import React from "react";
import Slider from "react-slick";
import { FaEye, FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Latest.css";

const AppleLatest = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="latestContainer" id="men">
      <div className="latestDiv">
        <div className="latestTetxs">
          <h3 className="latestTitle">Apple's Latest</h3>
          <p className="latestDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="latestDivImg">
          <div className="latestDivContent">
            <Slider {...settings} className="contentSlide">
              <div className="sliderImgDiv">
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img
                      src="https://images.biggeek.ru/1/435/3950/18504-15Gold.jpg"
                      alt=""
                      className="sliderImage"
                    />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to="/" className="sliderImgLink">
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
                    <h3 className="sliderImgTitle">I7</h3>
                    <span className="sliderImgStar">
                      5 <FaStar />
                    </span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$15000.00</h4>
                  </div>
                </div>
              </div>
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
              <div className="sliderImgDiv">
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img
                      src="https://images.biggeek.ru/1/435/3950/18504-15Gold.jpg"
                      alt=""
                      className="sliderImage"
                    />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to="/" className="sliderImgLink">
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
                    <h3 className="sliderImgTitle">I7 Pro</h3>
                    <span className="sliderImgStar">
                      5 <FaStar />
                    </span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$90000.00</h4>
                  </div>
                </div>
              </div>
              <div className="sliderImgDiv">
                <div className="sliderImgTop">
                  <div className="sliderImgTopInner">
                    <img
                      src="https://images.biggeek.ru/1/435/3950/18504-15Gold.jpg"
                      alt=""
                      className="sliderImage"
                    />
                  </div>
                  <div className="sliderImgTopHover">
                    <Link to="/" className="sliderImgLink">
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
                    <h3 className="sliderImgTitle">I5</h3>
                    <span className="sliderImgStar">
                      5 <FaStar />
                    </span>
                  </div>
                  <div className="sliderImgBottomBottom">
                    <h4 className="sliderImgPrice">$120000.00</h4>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleLatest;

import React from "react";
import { FaStar } from "react-icons/fa";
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <div className="productDetails">
      <div className="productDetailsDiv">
        <div className="productDetailsTop">
          <img
            src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="productDetailsTexts">
            <h2>Single Product Page</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
        <div className="productDetailsBottom">
          <div className="productDetailsBottomLeft">
            <div className="productDetailsBottomImg">
              <img
                src="https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_green_1_1_1.jpg"
                alt=""
              />
            </div>
            <div className="productDetailsBottomImg">
              <img
                src="https://cdn.eraspace.com/pub/media/catalog/product/i/p/iphone_13_green_1_1_1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="productDetailsBottomRight">
            <div className="productDetailsBottomTexts">
              <div className="productDetailsBottomContent">
                <h4>AAA</h4>
                <span>
                  5 <FaStar />
                </span>
              </div>
              <span className="productPrice">$100000</span>

              <span className="productDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore tempore necessitatibus illo a consectetur eveniet
                minus ex reprehenderit temporibus, voluptates alias maxime
                voluptatibus ipsum animi, iure similique quaerat, natus rem!
              </span>
            </div>
            <div className="productDetailsBottomSocials">
              <div className="productQuantity">
                <div className="productQuantityLeft">
                  <h6>No. of Orders</h6>
                </div>
                <div className="productQuantityRight">
                  <input
                    type="button"
                    // onClick={() => handleQuantity("dec")}
                    value="-"
                    className="minus"
                  />
                  <input
                    type="number"
                    min="1"
                    step="1"
                    // value={quantity}
                    className="value"
                  />
                  <input
                    type="button"
                    // onClick={() => handleQuantity("inc")}
                    value="+"
                    className="plus"
                  />
                </div>
              </div>
            </div>
            <div className="productDetailsBottomSocials total">
              <div className="productTotal">
                <h4>Total: $2000000</h4>
                <button
                // onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

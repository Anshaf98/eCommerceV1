import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CartItems.css";

const CartItems = () => {
  return (
    <div className="cartItems">
      <div className="cartItemsDiv">
        <h3 className="cartItesmsTitle">Your Cart</h3>
        <div className="cartItemsGroups">
          <div className="cartItemsLeft">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>SubTotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="cartItemsDelete">x</span>
                  </td>
                  <td>
                    <div className="cartItemsDiv">
                      <div className="cartItemsTop product">
                        <div className="cartItemsTopInner">
                          <img
                            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-purple-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202738000"
                            alt=""
                            className="sliderImage"
                          />
                        </div>
                        <div className="cartItemsTopHover">
                          <Link to="/product/23234" className="cartItemsLink">
                            <FaEye />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <h3 className="cartItemsName">AAA</h3>
                  </td>
                  <td>
                    <span className="cartItemsPrice">$210000</span>
                  </td>
                  <td>
                    <div className="cartItemsQuantity">
                      <div className="productQuantityRight">
                        <input type="button" value="-" className="minus" />
                        <input
                          type="number"
                          min="1"
                          step="1"
                          className="value"
                        />
                        <input type="button" value="+" className="plus" />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h4 className="cartItemsPriceSubTotal">$250000</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="cartItemsRight">
            <div className="cartItemsRightDiv">
              <h3 className="cartItemsRightTitle">Cart Totals</h3>
              <div className="cartItemsRightContent">
                <div className="cartItemsRightContentLeft">
                  <span>SubTotal:</span>
                </div>
                <div className="cartItemsRightContentRight">
                  <span>$150000</span>
                </div>
              </div>
              <div className="cartItemsRightContent">
                <div className="cartItemsRightContentLeft">
                  <span>Shipping 10%:</span>
                </div>
                <div className="cartItemsRightContentRight">
                  <span>$20000</span>
                </div>
              </div>
              <div className="cartItemsRightContent">
                <div className="cartItemsRightContentLeft">
                  <span className="total">Total:</span>
                </div>
                <div className="cartItemsRightContentRight">
                  <span className="totalPrice">$100000</span>
                </div>
              </div>
              <button className="checkout">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

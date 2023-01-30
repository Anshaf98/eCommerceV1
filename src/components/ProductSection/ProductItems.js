import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import "./ProductItems.css";

const ProductItems = () => {
  //   const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios.get("/api/product/all");
  //       setProducts(result.data);
  //       //console.log(result.data);
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div className="productsItems">
      <div className="productsItemsDiv">
        <div className="productsItemsTop">
          <img
            src="https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="productsItemsTexts">
            <h2>Check Our Products</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </div>
        </div>
      </div>
      <div className="productsItemsOthers">
        <div className="productsItemsContent">
          <h2>Our Latest Products</h2>
          <span>Check out all of our products.</span>
        </div>
        <div className="productsItemsImages">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        {/* {products.length === 0 ? (
          <h4 className="noProducts">There are currently no products!</h4>
        ) : (
          <div className="productsItemsImages">
            {products.map((product) => (
              <ProductItem product={product} 
              key={product._id} />
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default ProductItems;

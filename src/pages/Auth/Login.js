import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const Login = () => {
  return (
    <div className="formSign">
      <div className="formSignDiv">
        <form>
          <h3 className="formSignTitle">Login</h3>
          <p className="loginPtag">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="formSignGroups">
            <div className="">
              <label htmlFor="">Username</label>
              <input type="text" placeholder="Ex. anshaf" required />
            </div>
            <div className="">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="*******" required />
            </div>
          </div>
          <button>Login</button>
          <p>
            Don't Have an Account?
            <Link to="/register"> Register Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

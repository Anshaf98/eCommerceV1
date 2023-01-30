import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="formSign">
      <div className="formSignDiv">
        <form>
          <h3 className="formSignTitle">Register</h3>
          <div className="formSignGroups">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Your Username" required />
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Your Email" required />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Your Password" required />
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              required
            />
          </div>
          <button>Register</button>
          <p>
            Have an Account Already? <Link to="/login"> Login Here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

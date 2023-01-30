import React from "react";

function ChangePassword() {
  return (
    <form>
      <div className="formSignGroups">
        <input type="password" placeholder="Your Old Password" required />
        <input type="password" placeholder="Your New Password" required />
        <input
          type="password"
          placeholder="Confirm Your New Password"
          required
        />
      </div>
      <button>Update Password</button>
    </form>
  );
}

export default ChangePassword;

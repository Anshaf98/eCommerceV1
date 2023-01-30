import React from "react";

const ChangeInfo = () => {
  return (
    <form>
      <div className="formSignGroups">
        <input type="text" placeholder="Your Username" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Your Country" required />
        <input type="text" placeholder="Your City" required />
        <input type="text" placeholder="Your Address" required />
        <input type="text" placeholder="Your Phone" required />
      </div>
      <button>Update Info</button>
    </form>
  );
};

export default ChangeInfo;

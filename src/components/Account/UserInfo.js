import React from "react";

const UserInfo = () => {
  return (
    <>
      <div className="accountContentGroupsLeft">
        <div className="accountContentGroup">
          <span className="accountLight">Username: </span>
          <span className="accountBold"> </span>
        </div>
        <div className="accountContentGroup">
          <span className="accountLight">Email: </span>
          <span className="accountBold"> </span>
        </div>
        <div className="accountContentGroup">
          <span className="accountLight">Country: </span>
          <span className="accountBold"> </span>
        </div>
        <div className="accountContentGroup">
          <span className="accountLight">City: </span>
          <span className="accountBold"> </span>
        </div>
        <div className="accountContentGroup">
          <span className="accountLight">Address: </span>
          <span className="accountBold"> </span>
        </div>
        <div className="accountContentGroup">
          <span className="accountLight">Phone: </span>
          <span className="accountBold"> </span>
        </div>
      </div>
      <div className="accountContentGroupsRight">
        <img src="" alt="" />
      </div>
    </>
  );
};

export default UserInfo;

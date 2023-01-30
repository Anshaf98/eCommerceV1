import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ChangeImage from "../components/Account/ChangeImage";
import ChangeInfo from "../components/Account/ChangeInfo";
import ChangePassword from "../components/Account/ChangePassword";
import CloseAccount from "../components/Account/CloseAccount";
import Orders from "../components/Account/Orders/Orders";
import UserInfo from "../components/Account/UserInfo";

const Account = () => {
  return (
    <div className="account">
      <h3 className="accountTitle">My Account</h3>
      <p className="accountSubTitle">Welcome back Name</p>
      <Tabs>
        <TabList>
          <Tab>Info</Tab>
          <Tab>My Orders</Tab>
          <Tab>Change Info</Tab>
          <Tab>Change Password</Tab>
          <Tab>No Entry</Tab>
        </TabList>

        <TabPanel>
          <h3 className="accountContentTitle">Info</h3>
          <div className="accountContentGroups">
            <UserInfo />
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="accountContentTitle">My Orders</h3>
          <div className="ordersDiv">
            <Orders />
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="accountContentTitle">Change Info</h3>
          <div className="accountContentGroups">
            <div className="formSignDiv updateInfo">
              <ChangeInfo />
            </div>
            <div className="formSignDiv updateImage">
              <ChangeImage />
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="accountContentTitle">Change Passwords</h3>
          <div className="formSignDiv updatePassword">
            <ChangePassword />
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="accountContentTitle">Close account</h3>
          <div className="accountContentGroups">
            <CloseAccount />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Account;

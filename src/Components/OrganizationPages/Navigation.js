import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const Navigation = () => {
  return (
    <ul className={styles["organizations-page-navigation"]}>
      <li >
        <NavLink to="/organizations/account-information" activeClassName={styles["active-organization-tab"]}>Account Informaton</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles["active-organization-tab"]} to="/organizations/social-projects">Social Projects</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles["active-organization-tab"]} to="/organizations/products">My Products</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles["active-organization-tab"]} to="/organizations/sold">Sold</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles["active-organization-tab"]} to="/organizations/my-orders">My Orders</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles["active-organization-tab"]} to="/organizations/delivery-address">
          Delivery Addresses
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles["active-organization-tab"]} to="/organizations/messages">Messages</NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles["active-organization-tab"]} to="/organizations/change-password">Change Password</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;

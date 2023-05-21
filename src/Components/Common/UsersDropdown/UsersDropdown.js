import React, { useState } from "react";
import styles from "./UsersDropdown.module.css";
import userIcon from "../../../images/icons/account.svg";
import down from "../../../images/icons/dropdown.svg";
import us from "../../../images/icons/eng.svg";
import geo from "../../../images/icons/geo.svg";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const UsersDropdown = ({ showSignIn, showRegistration }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  return (
    <>
      <div className={styles["account-controler-header"]}>
        <div
          className={styles["users-dropdown-button"]}
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className={styles["button-image"]}>
              <img src={userIcon} alt="user" />
            </div>
            <div className={styles["account-info"]}>
              <span className={styles["welcome-text"]}>Your account</span>
              <span className={styles["user-name"]}>Sign in</span>
            </div>
          </div>
          <img src={down} className={styles["down"]} alt="down" />
        </div>

        {showProfileDropdown && (
          <OutsideClickHandler
            onOutsideClick={() => setShowProfileDropdown(false)}
          >
            <div
              className={`${styles["account-controller-dropdown-unauthorized"]}`}
            >
              <div className={styles["account-controller-dropdown-btns"]}>
                <button
                  className={`${styles["sign-in"]} bold`}
                  onClick={() => {
                    showSignIn(true);
                    setShowProfileDropdown(!showProfileDropdown);
                  }}
                >
                  Sign in
                </button>
                <button
                  className={`${styles["register"]} bold`}
                  onClick={() => {
                    showRegistration(true);
                    setShowProfileDropdown(!showProfileDropdown);
                  }}
                >
                  Register
                </button>
              </div>
              <hr className={styles["account-controller-dropdown-hr"]} />
              <div className={styles["language-switcher"]}>
                <div
                  className={styles["choose-language"]}
                  style={{ backgroundImage: `url('${us}')` }}
                  data-name="en"
                ></div>
                <div
                  className={styles["choose-language"]}
                  data-name="geo"
                  style={{ backgroundImage: `url('${geo}')` }}
                ></div>
              </div>
              <hr
                className={styles["account-controller-dropdown-hr"]}
                style={{ marginBottom: "16px" }}
              />
              <Link
                to="/"
                className={styles["account-controller-password-change"]}
              >
                Password change
              </Link>
              <hr
                className={styles["account-controller-dropdown-hr"]}
                style={{ marginTop: "16px" }}
              />
              <ul className={styles["account-controller-dropdown-menu-items"]}>
                <li>
                  <Link to="/" onClick={() => setShowProfileDropdown(false)}>View Profile</Link>
                </li>
                <li>
                  <Link to="/organizations/account-information" onClick={() => setShowProfileDropdown(false)}>Account Informaton</Link>
                </li>
                <li>
                  <Link to="/organizations/social-projects" onClick={() => setShowProfileDropdown(false)}>My Social Projects</Link>
                </li>
                <li>
                  <Link to="/organizations/products" onClick={() => setShowProfileDropdown(false)}>My Products</Link>
                </li>
                <li>
                  <Link to="/organizations/sold" onClick={() => setShowProfileDropdown(false)}>Sold</Link>
                </li>
                <li>
                  <Link to="/organizations/my-orders" onClick={() => setShowProfileDropdown(false)}>My Orders</Link>
                </li>
                <li>
                  <Link to="/organizations/delivery-address" onClick={() => setShowProfileDropdown(false)}>Delivery Addresses</Link>
                </li>
              </ul>
            </div>
          </OutsideClickHandler>
        )}
      </div>
    </>
  );
};

export default UsersDropdown;

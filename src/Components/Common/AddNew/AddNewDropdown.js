import React, { useState } from "react";
import styles from "./AddNewDropdown.module.css";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const AddNewDropdown = () => {
  const [showAddNew, setShowAddNew] = useState(false);
  return (
    <div className={styles["add-new-items-container"]}>
      <div
        className={styles["add-new-items-button"]}
        onClick={() => setShowAddNew(true)}
      >
        +
      </div>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShowAddNew(false);
        }}
      >
        {showAddNew && (
          <div
            className={`${styles["account-controller-dropdown-unauthorized"]}`}
            style={{
              marginTop: "10px",
              marginLeft: "-160px",
              height: "165px",
              overflow: "auto",
              zIndex: "111111",
              position: "absolute",
              width: "393px",
            }}
          >
            <div
              className={"account-controller-dropdown-btns"}
              style={{ padding: "23px 0px 0px 20px" }}
            >
              Add
            </div>
            <hr
              className={"account-controller-dropdown-hr"}
              style={{ marginBottom: "0px" }}
            />
            <div className={styles["dropdowns-container"]}>
              <Link
                to="/create/product"
                className={styles["dropdown-option"]}
                onOutsideClick={() => {
                  setShowAddNew(false);
                }}
              >
                <span>Product</span> <span className={styles['plus-icon']}>+</span>
              </Link>
              <Link
                to="/create/social-programs"
                className={styles["dropdown-option"]}
                onOutsideClick={() => {
                  setShowAddNew(false);
                }}
              >
                <span>Social Programs</span> <span className={styles['plus-icon']}>+</span>
              </Link>
            </div>
          </div>
        )}
      </OutsideClickHandler>
    </div>
  );
};

export default AddNewDropdown;

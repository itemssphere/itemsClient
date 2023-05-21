import React from "react";
import styles from "./style.module.css";
import search from "../../images/icons/search.svg";
import MyOrdersProduct from "./MyOrdersProduct/MyOrdersProduct";

const MyOrders = () => {
  return (
    <>
      <div
        className={`${styles["section-head-container"]} ${styles["hide-section-head-container"]}`}
        style={{ justifyContent: "flex-end", marginBottom: "30px" }}
      >
        <p
          className={`bold ${styles["section-head-title"]}`}
          style={{ display: "none" }}
        >
          Account Informaton
        </p>
        <div
          className={styles["section-head-action-btns"]}
          style={{ justifyContent: "space-between", width: "100%" }}
        >
          <div className={styles["export-import-btns"]}>
            <button className={styles["export-to-xls"]}>Export to .xls</button>
            <button className={styles["export-to-xls"]} style={{color: "#42D921"}}>Import to .xls</button>
          </div>
          <p className={`fs15 bold ${styles["earnings"]}`}>Your spent 3,678.78 ₾</p>
        </div>
      </div>
      <div className={styles["news-list-header"]}>
        <p className={`${styles["main-section-head-title"]} bold`}>
          My Orders <span className="bold">5</span>
        </p>
        <div className={styles["flex-box"]}>
          <div className={styles["section-header-search-block"]}>
            <input
              type="text"
              name="search"
              className={styles["form-control-search"]}
              placeholder="Search Social Projects"
            />
            <button className={styles["start-search-btn-section-header"]}>
              <img src={search} alt="search" />
            </button>
          </div>
          <p className={styles["sort-text"]}>Sort by</p>
          <select
            className={styles["select-form-control"]}
            style={{
              fontSize: "15px",
              width: "149px",
              height: "32px",
              color: "black",
            }}
          >
            <option value="2">Latest</option>
            <option value="2">A-Z</option>
            <option value="1">Featured</option>
            <option value="3">Z-A</option>
          </select>
          <img
            src={search}
            alt="search"
            className={styles["searchicon-on-mobile"]}
          />
        </div>
      </div>
      
      <MyOrdersProduct />
      <MyOrdersProduct />
    </>
  );
};

export default MyOrders;

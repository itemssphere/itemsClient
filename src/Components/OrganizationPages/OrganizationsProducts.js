import React from "react";
import styles from "./style.module.css";
import search from "../../images/icons/search.svg"
import MyProducts from "./MyProducts/MyProducts";

const OrganizationsProducts = ({onEdit, setOnEdit}) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "9px",
        }}
      >
        
      </div>
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
            <button className={styles["import-xls"]}>Import .xls</button>
          </div>
          {onEdit && (
            <button
              className={`${styles["background-blue-btn"]} ${styles["save-changes"]}`}
              style={{ marginRight: "30px" }}
            >
              Save Changes
            </button>
          )}
          {!onEdit && <button
            className={`${["edit-inventory-btn"]} ${
              styles["border-blue-btn"]
            } ${styles["bold"]}`}
            onClick={() => setOnEdit(true)}
          >
            Edit inventory
          </button>}
          {onEdit && (
            <button
              className={`${styles["no-background-btn"]} ${styles["cancel-edit"]}`}
              onClick={() => setOnEdit(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className={styles["news-list-header"]}>
        <p className={`${styles["main-section-head-title"]} bold`}>
          My Products <span className="bold">5</span>
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
              <img
                src={search}
                alt="loop"
              />
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
            alt="loop"
            className={styles["searchicon-on-mobile"]}
          />
        </div>
      </div>
      <MyProducts />
      <MyProducts />
      <MyProducts />
      <MyProducts />
    </>
  );
};

export default OrganizationsProducts;

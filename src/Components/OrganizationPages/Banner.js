import React from "react";
import styles from "./style.module.css";

const Banner = () => {
  return (
    <div className={styles["organizations-banner-container"]}>
      <div className={styles["organization-banner-image-container"]}>
        <div className={styles["organization-page-baner-image"]}></div>
      </div>
      <div className={styles["organization-banner-info-container"]}>
        <div className={`${styles["organization-name-box"]} bold`}>Name Surname</div>
        <div className={styles["followers-info"]}>
          <div className={styles["following"]}>
            <p>28</p>
            <p>following</p>
          </div>
          <div className={styles["followers"]}>
            <p>7</p>
            <p>following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

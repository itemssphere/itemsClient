import React from "react";
import styles from "./Hashtags.module.css";
import hashtag from "../../images/banner.png"

const Hashtags = ({padding}) => {
  return (
    <div className={styles["hashtag-items-container"]} style={{paddingTop: padding ? padding : "0px"}}>
      <div className={styles["hashtag-item"]}>
        <div
          className={styles["hashtag-image"]}
          style={{backgroundImage: `url('${hashtag}')`}}
        ></div>
        <p className={styles["hashtag-name"]}>Anniversary</p>
      </div>
      <div className={styles["hashtag-item"]}>
        <div
          className={styles["hashtag-image"]}
          style={{backgroundImage: `url('${hashtag}')`}}
        ></div>
        <p className={styles["hashtag-name"]}>Anniversary</p>
      </div>
      <div className={styles["hashtag-item"]}>
        <div
          className={styles["hashtag-image"]}
          style={{backgroundImage: `url('${hashtag}')`}}
        ></div>
        <p className={styles["hashtag-name"]}>Anniversary</p>
      </div>
      <div className={styles["hashtag-item"]}>
        <div
          className={styles["hashtag-image"]}
          style={{backgroundImage: `url('${hashtag}')`}}
        ></div>
        <p className={styles["hashtag-name"]}>Anniversary</p>
      </div>
      <div className={styles["hashtag-item"]}>
        <div
          className={styles["hashtag-image"]}
          style={{backgroundImage: `url('${hashtag}')`}}
        ></div>
        <p className={styles["hashtag-name"]}>Anniversary</p>
      </div>
      <div className={styles["hashtag-item"]}>
        <div
          className={styles["hashtag-image"]}
          style={{backgroundImage: `url('${hashtag}')`}}
        ></div>
        <p className={styles["hashtag-name"]}>Anniversary</p>
      </div>
    </div>
  );
};

export default Hashtags;

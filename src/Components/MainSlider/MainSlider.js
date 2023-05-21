import React from "react";
import styles from "./MainSlider.module.css";
import arrow from "../../images/icons/banner-arrow.svg";
import { Link } from "react-router-dom";
import image from "../../images/banner.png";

const MainSlider = ({productsPages}) => {
  return (
    <>
      <div className={styles["main-slider-container"]} style={{marginBottom: productsPages ? "20px" : "0px"}}>
        <div className={styles["slider"]}>
          <div className={styles["slider-images-container"]}>
            <Link to="/" >
            <div
              className={styles["slider-image"]}
              style={{ backgroundImage: `url('${image}')` }}
            ></div>
            </Link>
          </div>
          <div
            className={`${styles["slider-buttons"]} ${styles["slider-buttons-prev"]}`}
          >
            <img src={arrow} alt="prev" />
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div
            className={`${styles["slider-buttons"]} ${styles["slider-buttons-next"]}`}
          >
            <img src={arrow} alt="next" />
          </div>
        </div>
        <div className={styles["sections"]}></div>
      </div>
      <div className={styles['slider-dots-container']}>
        <div className={`${styles["dots"]} ${styles["active"]}`}></div>
        <div className={styles['dots']}></div>
        <div className={styles['dots']}></div>
        <div className={styles['dots']}></div>
      </div>
      {
        !productsPages && (<div className={styles['sections-container']}>
        <Link to="/" className={styles['section-items-container']} style={{width: "calc(25% - 10px)"}}><div className={styles['section-item']} style={{backgroundImage: `src('${image}')`}}></div></Link>
        <Link to="/" className={styles['section-items-container']} style={{width: "calc(25% - 10px)"}}><div className={styles['section-item']} style={{backgroundImage: `src('${image}')`}}></div></Link>
        <Link to="/" className={styles['section-items-container']} style={{width: "calc(25% - 10px)"}}><div className={styles['section-item']} style={{backgroundImage: `src('${image}')`}}></div></Link>
        <Link to="/" className={styles['section-items-container']} style={{width: "calc(25% - 10px)"}}><div className={styles['section-item']} style={{backgroundImage: `src('${image}')`}}></div></Link>
      </div>)
      }
    </>
  );
};

export default MainSlider;

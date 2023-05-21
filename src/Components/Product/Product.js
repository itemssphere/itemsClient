import React from 'react'
import styles from './Product.module.css'
import background from '../../images/banner.png'
import fav from '../../images/icons/heart.svg'
import hover from '../../images/icons/charities.svg'
import {Link} from "react-router-dom";

const Product = ({discount, newProduct, free, productsInline, margin, data, market}) => {
  return (
    <Link to={`/product/${data.id}`} className={`${styles["product-container"]}  ${market && styles['product-container-market']}`} style={{width: `calc((100% / ${productsInline}) - 10px)`, marginRight: margin}}>
      <div
        className={styles["product-image"]}
        style={{backgroundImage: `url("${data.img.cover}")`}}
      >
        <div className={styles["hearts-on-hover"]}>
          <img src={hover} alt="" />
        </div>
        <div className={styles["product-add-favorite"]}>
          <button className={styles["product-add-favorite-btn"]}>
            <img src={fav} alt="" />
          </button>
        </div>
        <div className={styles["product-status-description"]}>
          {newProduct && <span className={styles["product-condition-on-image"]}>New</span>}
          {discount && <span className={styles["product-disscount-on-image"]}>{discount * 100}%</span>}
        </div>
      </div>
      <div className={styles["product-description"]}>
        <div className={styles["product-price"]}>
          {!free && <p className={`${styles["product-price-disscounted"]} bold`}>{data.price}₾</p>}
          {discount && !free && <p className={styles["product-price-old-price"]}>{data.proce_old}₾</p>}
          {free && <p className={`${styles["free-item"]} bold`}>free</p>}
        </div>
        <p className={styles["product-description-text"]} style={{color: "black"}}>
          {data.name.slice(0, 60)}...
        </p>
        <div className={styles["product-rates-and-view"]}>
          <div className={styles["product-rate"]}>
            <div className={`${styles["rate-circle"]} ${data.reviews_average > 0 && styles["selected-circle"]}`}></div>
            <div className={`${styles["rate-circle"]} ${data.reviews_average > 1 && styles["selected-circle"]}`}></div>
            <div className={`${styles["rate-circle"]} ${data.reviews_average > 2 && styles["selected-circle"]}`}></div>
            <div className={`${styles["rate-circle"]} ${data.reviews_average > 3 && styles["selected-circle"]}`}></div>
            <div className={`${styles["rate-circle"]} ${data.reviews_average > 4 && styles["selected-circle"]}`}></div>
          </div>
          <p className={styles["product-view"]}>{data.reviews_count} review</p>
        </div>
      </div>
    </Link>
  );
};

export default Product
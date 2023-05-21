import React, { useState } from "react";
import styles from "./MyProducts.module.css";
import banner from "../../../images/banner.png";
import recycle from "../../../images/icons/delete.svg"

const MyProducts = () => {
  const [products, setProducts] = useState(1);

  const QuantityOnKeyDown = (e) => {
    if (e.keyCode < 48 || e.keyCode > 57) e.preventDefault();
  };

  return (
    <div className={styles["products-row"]}>
      <div
        className={`${styles["product-image"]} ${styles["columns"]}`}
        style={{ backgroundImage: `url('${banner}')` }}
      />
      <div className={`${styles["product-description"]} ${styles["columns"]} ${styles["columns-size"]}`}>
        <span className={styles['new-item']}>new</span>
        <p className={styles["description-text"]}>TCL 40S325 40 Inch 1080p</p>
        <div className={styles["prices-container"]}>
          <span className={`${styles["current-price"]} bold`}>1,239.39 ₾</span>
          <span className={styles["old-price"]}>1,430.30₾</span>
        </div>
      </div>
      <div className={`${styles["product-quantity"]} ${styles["columns"]} ${styles["columns-size"]}`}>
        <span className={`${styles["title"]} bold`}>Quantity:</span>
        <div className={styles["content"]}>
          <div className={styles["products-quantity"]}>
            <span
              className={styles["products-counter"]}
              onClick={() => setProducts((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              -
            </span>
            <input
              type="text"
              onKeyDown={QuantityOnKeyDown}
              value={products}
              className={styles['product-quantity-field']}
              onChange={(e) => setProducts(e.target.value)}
            />
            <span
              className={styles["products-counter"]}
              onClick={() => setProducts((prev) => parseInt(prev) + 1)}
            >
              +
            </span>
          </div>
        </div>
      </div>
      <div className={`${styles["product-sum"]} ${styles["columns"]} ${styles["columns-size"]}`}>
        <span className={`${styles["title"]} bold`}>Sum:</span>
        <div className={styles["content"]}><span className={`${styles['price-sum']} bold`}>1239.39 ₾</span></div>
      </div>
      <div className={`${styles["product-date"]} ${styles["columns"]} ${styles["columns-size"]}`}>
        <span className={`${styles["title"]} bold`}>Date:</span>
        <div className={styles["content"]}>
            <p><span>Created:</span><span>2020-03-30</span></p>
            <p><span>Updated:</span><span>2020-03-30</span></p>
        </div>
      </div>
      <div
        className={`${styles["product-actions"]} ${styles["columns"]} ${styles["columns-size"]}`}
      >
        <select className={styles['select-dropdown']}>
            <option value="">Selling</option>
            <option value="">Selling</option>
            <option value="">Selling</option>
        </select>
        <div className={styles['edit-product']}>
            <span className={styles['edit-product-text']}>Edit Product</span>
            <button className={styles['bin-icon-button']}><img src={recycle} className={styles['bin-icon']} alt="bin" /></button>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;

import React, { useState } from "react";
import styles from "./MyOrdersProduct.module.css";
import banner from "../../../images/banner.png";
import message from "../../../images/icons/Path 549.svg";

const MyOrdersProduct = () => {
  const [showDetailed, setShowDetailed] = useState(false);

  return (
    <div className={styles["sold-product-content"]}>
      <div className={styles["products-row"]}>
        <div
          className={`${styles["product-image"]} ${styles["columns"]}`}
          style={{ backgroundImage: `url('${banner}')` }}
        />
        <div
          className={`${styles["product-description"]} ${styles["columns"]} ${styles["columns-size"]}`}
        >
          <span className={styles["new-item"]}>new</span>
          <p className={styles["description-text"]}>TCL 40S325 40 Inch 1080p</p>
          <div className={styles["prices-container"]}>
            <span className={`${styles["current-price"]} bold`}>
              1,239.39 ₾
            </span>
            <span className={styles["old-price"]}>1,430.30₾</span>
          </div>
        </div>
        <div
          className={`${styles["product-delivery"]} ${styles["columns"]} ${styles["columns-size"]}`}
        >
          <span className={`${styles["title"]} bold`}>Delivery:</span>
          <div className={styles["content"]}>
            <span className={`${styles["price-sum"]} bold`}>9.39 ₾</span>
          </div>
        </div>
        <div
          className={`${styles["product-quantity"]} ${styles["columns"]} ${styles["columns-size"]}`}
        >
          <span className={`${styles["title"]} bold`}>Quantity:</span>
          <div className={styles["content"]}>1</div>
        </div>
        <div
          className={`${styles["product-sum"]} ${styles["columns"]} ${styles["columns-size"]}`}
        >
          <span className={`${styles["title"]} bold`}>Sum:</span>
          <div className={styles["content"]}>
            <span className={`${styles["price-sum"]} bold`}>1239.39 ₾</span>
          </div>
        </div>
        <div
          className={`${styles["product-date"]} ${styles["columns"]} ${styles["columns-size"]}`}
        >
          <span className={`${styles["title"]} bold`}>Date:</span>
          <div className={styles["content"]}>
            <p>
              <span>Created:</span>
              <span>2020-03-30</span>
            </p>
            <p>
              <span>Updated:</span>
              <span>2020-03-30</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles["sold-item-container"]}>
        <div
          className={styles["orders-detail"]}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className={`${styles["order-profile-indo"]} ${styles["order-profile-info-mobile"]}`}
          >
            <img
              src={banner}
              alt="user"
              className={styles["user-image-rounded"]}
            />
            <div>
              <p className={`${styles["color-gray"]} fs20`}>Zoomer</p>
            </div>
          </div>
          <p
            className={`${styles["order-number"]} ${styles["color-gray"]} bold fs15`}
            style={{ marginRight: "0px" }}
          >
            Order_25
          </p>
        </div>
        <div className={styles["order-details-buttons"]}>
          <button
            className={`${styles["report-problem-btn"]} fs15`}
          >
            Report problem
          </button>
          <button
            className={`${styles["order-detail-send-message"]} fs15 bold`}
          >
            <img src={message} alt="icon" />
            <p>Send Message</p>
          </button>
          <button className={`${styles["order-detail-invoice"]} fs15 bold`}>
            Invoice
          </button>
          <button
            className={styles["order-detail-collapse"]}
            onClick={() => setShowDetailed(!showDetailed)}
          >
            Collapse
          </button>
        </div>
        {showDetailed && (
          <div className={styles["order-details-form"]}>
            <div className={styles["order-details-input-forms"]}>
              <div className={styles["form-input-container"]}>
                <label className={styles["organization-label"]}>Address</label>
                <input
                  type="email"
                  name="search"
                  className={styles["form-control-orgs"]}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <label className={styles["organization-label"]}>Shipping</label>
                <input
                  type="email"
                  name="search"
                  className={styles["form-control-orgs"]}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <label className={styles["organization-label"]}>
                  Reciver Name
                </label>
                <input
                  type="email"
                  name="search"
                  className={styles["form-control-orgs"]}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <label className={styles["organization-label"]}>
                  Personal #
                </label>
                <input
                  type="email"
                  name="search"
                  className={styles["form-control-orgs"]}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <label className={styles["organization-label"]}>Phone #</label>
                <input
                  type="email"
                  name="search"
                  className={styles["form-control-orgs"]}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <label className={styles["organization-label"]}>Status</label>
                <input
                  type="email"
                  name="search"
                  className={styles["form-control-orgs"]}
                />
              </div>
            </div>
            <div className={styles["text-area-container"]}>
              <label htmlFor="comment-box">Comment</label>
              <textarea
                name=""
                id="comment-box"
                className={styles["order-details-text-area"]}
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrdersProduct;

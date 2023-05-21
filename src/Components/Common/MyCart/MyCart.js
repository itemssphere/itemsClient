import React, { useState } from "react";
import styles from "./MyCart.module.css";
import cartIcon from "../../../images/icons/cart.svg";

const MyCart = () => {
    const [showMessages, setShowMessages] = useState(false)
  return (
    <div className={styles["cart-dropdown"]}>
      <div
        className={`${styles["cart-content-header"]} ${styles["header-buttons-content"]}`}
        onClick={() => setShowMessages(!showMessages)}
      >
        <div className={styles["header-btn-standard"]}>
          <img src={cartIcon} alt="msg" />
        </div>
      </div>
    </div>
  );
};

export default MyCart;

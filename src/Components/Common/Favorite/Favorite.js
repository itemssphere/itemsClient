import React, { useState } from "react";
import styles from "./Favorite.module.css";
import favorite from "../../../images/icons/wishlist.svg";

const Favorites = () => {
    const [showMessages, setShowMessages] = useState(false)
  return (
    <div className={styles["favorite-dropdown"]}>
      <div
        className={`${styles["favorite-content-header"]} ${styles["header-buttons-content"]}`}
        onClick={() => setShowMessages(!showMessages)}
      >
        <div className={styles["header-btn-standard"]}>
          <img src={favorite} alt="msg" />
        </div>
      </div>
    </div>
  );
};

export default Favorites;

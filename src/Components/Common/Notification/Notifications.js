import React, { useState } from "react";
import styles from "./Notification.module.css";
import notification from "../../../images/icons/notification.svg";

const Notifications = () => {
    const [showMessages, setShowMessages] = useState(false)
  return (
    <div className={styles["notification-dropdown"]}>
      <div
        className={`${styles["notification-content-header"]} ${styles["header-buttons-content"]}`}
        onClick={() => setShowMessages(!showMessages)}
      >
        <div className={styles["header-btn-standard"]}>
          <img src={notification} alt="msg" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;

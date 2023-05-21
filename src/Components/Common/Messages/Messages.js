import React, { useState } from "react";
import styles from "./Messages.module.css";
import message from "../../../images/icons/message.svg";
import zoomer from "../../../images/zoomer.png";
import OutsideClickHandler from "react-outside-click-handler";

const Messages = () => {
    const [showMessages, setShowMessages] = useState(false)
  return (
    <div className={styles["messages-dropdown"]}>
      <div
        className={`${styles["messages-content-header"]} ${styles["header-buttons-content"]}`}
        onClick={() => setShowMessages(!showMessages)}
      >
        <div className={styles["header-btn-standard"]}>
          <img src={message} alt="msg" />
        </div>
      </div>
      <OutsideClickHandler onOutsideClick={() => {
        setShowMessages(false)
      }}>
        {
            showMessages &&
            <div
            className={`${styles["account-controller-dropdown-unauthorized"]}`}
            style={{
              marginTop: "10px",
              marginLeft: "-160px",
              height: "430px",
              overflow: "auto",
              zIndex: "111111",
              position: "absolute"
            }}
          >
            <div
              className={"account-controller-dropdown-btns"}
              style={{ padding: "23px 0px 0px 20px" }}
            >
              Messages
            </div>
            <hr className={"account-controller-dropdown-hr"} />
            <div className={"messages-list-selectable"}>
              <div className={"messages-list-item"}>
                <div className={`d-flex align-items-center`}>
                  <div className={"unread-messages-item"}></div>
                  <img
                    src={zoomer}
                    alt=""
                    className={"message-sender-image-in-list"}
                    style={{ width: "57px", height: "57px" }}
                  />
                  <div className={"message-item-info"}>
                    <p className={"sender-name regular"}>Zoomer</p>
                    <p className={"latest-message regular"}>You: Madloba didi</p>
                  </div>
                </div>
                <div
                  className="read-message-in-list organization-messages-seen"
                  style={{ backgroundImage: `url('${zoomer}')` }}
                ></div>
              </div>
            </div>
          </div>
        }
      </OutsideClickHandler>
    </div>
  );
};

export default Messages;

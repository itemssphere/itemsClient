import { createPortal } from "react-dom";

const MobileBar = () => {
  return createPortal(
    <div class="mobile-bottom-section-container">
      <div class="save-orgs-form">
        <button class="bold">Save</button>
        <button class="bold">Cancel</button>
      </div>
      <div class="mobile-bottom-controls">
        <button class="header-btn-standard-mobile">
          <img src="../image/svg/header-btn/shop.svg" alt="msg" />
          <p>Cart</p>
        </button>
        <button class="header-btn-standard-mobile">
          <img src="../image/svg/header-btn/zari.svg" alt="msg" />
          <p>Notifications</p>
        </button>
        <div class="add-new-item-from-mobile">
          <div class="header-btn-standard-mobile add-new-item-from-mobile-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path
                d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
                fill="#42BE29"
              />
            </svg>
          </div>
        </div>
        <button class="header-btn-standard-mobile">
          <img src="../image/svg/messages.svg" alt="msg" />
          <p>Nessages</p>
        </button>
        <button class="header-btn-standard-mobile">
          <img src="../image/svg/man-icon.svg" alt="msg" />
          <p>My IS</p>
        </button>
      </div>
    </div>,
    document.getElementById("mobile-action-buttons")
  );
};

export default MobileBar;

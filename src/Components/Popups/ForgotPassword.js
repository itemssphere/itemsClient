import React from "react";
import { createPortal } from "react-dom";
import closeIcon from "../../images/icons/close-rounded.svg";
import email from "../../images/icons/email.svg";

const ForgotPassword = ({ closeModal, showRegistration }) => {
  return createPortal(
    <div className="modal">
      <div
        className="modal-backdrop"
        onClick={() => {
          closeModal();
        }}
      ></div>
      <div className="popup-content">
        <div className="modal-popup-content-container">
          <div className="modal-popup-header">
            <h2>Forgot Password?</h2>
            <img src={closeIcon} alt="close" onClick={() => {
          closeModal();
        }} />
          </div>
          <div className="registration-input-container" style={{marginTop: "8px"}}>
            <div className="block">
              <div className="d-flex-between">
                <img
                  src={email}
                  className="imput-fields-icon-at-start"
                  alt=""
                />
              </div>
              <input
                type="text"
                className="registration-input-fields"
                placeholder="Email"
              />
            </div>
            <button className="registration-button bold">Send Recovery Link</button>
            <div className="alredy-registered">
              <p className="fs15" style={{ color: "#828282" }}>
                New customer?{" "}
              </p>
              <span className="fs15 reg-btn-in-popup" style={{cursor: "pointer"}} onClick={() => {
                closeModal();
                showRegistration(true)
              }}>
                Register
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals")
  );
};

export default ForgotPassword;

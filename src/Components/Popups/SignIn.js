import React, { useState } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../../images/icons/close-rounded.svg"
import email from "../../images/icons/email.svg"
import password from "../../images/icons/password.svg"
import eye from "../../images/icons/eye.svg"
import fb from "../../images/icons/fb1.svg"
import google from "../../images/icons/google.svg"

const SignIn = ({closeModal, showForgotPass, showRegistration}) => {
  const [passwordType, setPasswordType] = useState(false);

  return (
    createPortal(
      <div className="modal">
        <div className="modal-backdrop" onClick={() => {closeModal()}}></div>
        <div className="popup-content">
          <div className="modal-popup-content-container">
            <div className="modal-popup-header">
              <h2>Sign In</h2>
              <img src={closeIcon} alt="close" onClick={() => {closeModal()}} />
            </div>
            <div
              className="registration-input-container"
              style={{ marginTop: "8px" }}
            >
              <div className="block auth-inputs">
                <div
                  style={{
                    position: "absolute",
                    marginTop: "12px",
                    height: "44px",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "15px",
                  }}
                >
                  <img
                    src={email}
                    className="imput-fields-icon-at-start"
                    alt="email"
                  />
                </div>
                <input
                  type="email"
                  className="registration-input-fields"
                  placeholder="Email"
                />
              </div>
              <div className="block auth-inputs">
                <div className="d-flex-between">
                  <img
                    src={password}
                    className="imput-fields-icon-at-start"
                    alt="key"
                  />
                  <img
                    src={eye}
                    className="imput-fields-icon-at-the-end"
                    alt=""
                    style={{zIndex: "1111111111111111", cursor: "pointer"}}
                    onClick={() => setPasswordType(!passwordType)}
                  />
                </div>
                <input
                  type={!passwordType ? "password" : "text"}
                  className="registration-input-fields"
                  placeholder="Password"
                />
              </div>
              <div className="forgot-pass-block">
                <span onClick={() => {
                  closeModal();
                  showForgotPass(true);
                  }} style={{cursor: "pointer"}}>Forgot Password?</span>
              </div>
              <button className="registration-button bold">Sign In</button>
            </div>
            <div className="auth-by-social">
              <p>Or</p>
              <img src={google} alt="google" style={{width: "50px", height: "50px", border: "3px solid white", cursor: "pointer"}} />
              <img src={fb} alt="FB" style={{width: "50px", height: "50px", border: "3px solid white", cursor: "pointer"}} />
            </div>
            <div className="alredy-registered">
              <p className="fs15" style={{ color: "#828282" }}>
                New customer?{" "}
              </p>
              <span onClick={() => {
                showRegistration(true);
                closeModal();
                }} className="fs15 reg-btn-in-popup" style={{cursor: "pointer"}}>
                Register
              </span>
            </div>
          </div>
        </div>
      </div>, document.getElementById("modals")
    )
  );
};

export default SignIn;

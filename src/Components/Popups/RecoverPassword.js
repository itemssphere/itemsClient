import React, { useState } from "react";
import { createPortal } from "react-dom";
import closeIcon from "../../images/icons/close-rounded.svg";

const RecoverPassword = ({ closeModal }) => {
  const [passwordType, setPasswordType] = useState(false);

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
            <h2>Recover Password</h2>
            <img src={closeIcon} alt="close" onClick={() => closeModal()}/>
          </div>
          <div className="registration-input-container" style={{marginTop: "8px"}}>
            <div className="block">
              <div className="d-flex-between" style={{padding: "0px 15px"}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.734"
                  height="16.423"
                  viewBox="0 0 15.734 16.423"
                >
                  <path
                    id="Path_1789"
                    data-name="Path 1789"
                    d="M19.873,16.109,13.008,9.227a4.561,4.561,0,1,0-1.781,1.781l3.943,3.943-1.055,1.055a.721.721,0,0,0,0,1.038l1.66,1.66a.721.721,0,0,0,1.038,0l1.055-1.055.225.225a1.252,1.252,0,0,0,1.764,0A1.237,1.237,0,0,0,19.873,16.109ZM7.007,7.03A2.023,2.023,0,1,1,9.03,9.054,2,2,0,0,1,7.007,7.03Z"
                    transform="translate(-4.5 -2.5)"
                    opacity="0.18"
                  />
                </svg>
                <svg
                  id="eye-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() => setPasswordType(!passwordType)}
                >
                  <path
                    id="Path_574"
                    data-name="Path 574"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_575"
                    data-name="Path 575"
                    d="M1.181,12a11,11,0,0,1,21.638,0A11,11,0,0,1,1.181,12ZM12,17a5,5,0,1,0-5-5A5,5,0,0,0,12,17Zm0-2a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"
                    fill="#d1d1d1"
                  />
                </svg>
              </div>
              <input
                type={!passwordType ? "password" : "text"}
                className="registration-input-fields"
                placeholder="Password"
              />
            </div>
            <div className="block">
              <div className="d-flex-between" style={{padding: "0px 15px"}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.734"
                  height="16.423"
                  viewBox="0 0 15.734 16.423"
                >
                  <path
                    id="Path_1789"
                    dataname="Path 1789"
                    d="M19.873,16.109,13.008,9.227a4.561,4.561,0,1,0-1.781,1.781l3.943,3.943-1.055,1.055a.721.721,0,0,0,0,1.038l1.66,1.66a.721.721,0,0,0,1.038,0l1.055-1.055.225.225a1.252,1.252,0,0,0,1.764,0A1.237,1.237,0,0,0,19.873,16.109ZM7.007,7.03A2.023,2.023,0,1,1,9.03,9.054,2,2,0,0,1,7.007,7.03Z"
                    transform="translate(-4.5 -2.5)"
                    opacity="0.18"
                  />
                </svg>
                <svg
                  id="eye-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  onClick={() => setPasswordType(!passwordType)}
                >
                  <path
                    id="Path_574"
                    dataname="Path 574"
                    d="M0,0H24V24H0Z"
                    fill="none"
                  />
                  <path
                    id="Path_575"
                    dataname="Path 575"
                    d="M1.181,12a11,11,0,0,1,21.638,0A11,11,0,0,1,1.181,12ZM12,17a5,5,0,1,0-5-5A5,5,0,0,0,12,17Zm0-2a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"
                    fill="#d1d1d1"
                  />
                </svg>
              </div>
              <input
                type={!passwordType ? "password" : "text"}
                className="registration-input-fields"
                placeholder="Re-enter new Password"
              />
            </div>
            <button className="registration-button bold">Change password</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals")
  );
};

export default RecoverPassword;

import React, { useState } from "react";
import { createPortal } from "react-dom";
// import { Link } from "react-router-dom";
import closeIcon from "../../images/icons/close-rounded.svg";
import email from "../../images/icons/email.svg";
// import password from "../../images/icons/password.svg";
// import eye from "../../images/icons/eye.svg";

const Registration = ({ closeModal, showSignIn }) => {
  const [passwordType, setPasswordType] = useState(false);
  const [registrationType, setRegistrationType] = useState("standard");

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
            <h2>Registration as</h2>
            <img src={closeIcon} alt="close" onClick={() => {closeModal()}} />
          </div>
          <div className="registration-switcher">
            <div
              className={registrationType === "standard" ? "active" : "regular"}
              onClick={() => setRegistrationType("standard")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14.211"
                height="16.079"
                viewBox="0 0 14.211 16.079"
              >
                <path
                  id="Path_246"
                  dataname="Path 246"
                  d="M66.938,46a4.136,4.136,0,1,1,0,8.273,4.136,4.136,0,1,1,0-8.273Zm3.069,8.54c2.468.667,4.2,2,4.2,3.6,0,2.2-3.136,3.936-7.072,3.936S60,60.344,60,58.142c0-1.534,1.6-2.869,3.87-3.469a4.708,4.708,0,0,0,3,1.067A4.563,4.563,0,0,0,70.007,54.54Z"
                  transform="translate(-60 -46)"
                  fill="#606062"
                  fillnule="evenodd"
                />
              </svg>
              <p>Standard</p>
            </div>
            <div
              className={registrationType === "shop" ? "active" : "regular"}
              onClick={() => setRegistrationType("shop")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.614"
                height="12.1"
                viewBox="0 0 15.614 12.1"
              >
                <path
                  id="Path_411"
                  dataname="Path 411"
                  d="M24.841,12.622H14.154l-.586-1.267a.405.405,0,0,0-.367-.237h-2.42a.409.409,0,0,0-.406.412v1.5a.409.409,0,0,0,.406.412h1.224l2.465,5.282-.892,1.648a1.881,1.881,0,0,0-.238.925,1.9,1.9,0,0,0,1.886,1.917H24.1a.409.409,0,0,0,.406-.412V21.3a.409.409,0,0,0-.406-.412H15.91l.369-.679h5.272a1.877,1.877,0,0,0,1.65-.989l2.646-4.874a1.169,1.169,0,0,0-1.006-1.729Z"
                  transform="translate(-10.376 -11.118)"
                  fill="#707070"
                />
              </svg>
              <p>Shop</p>
            </div>
            <div
              className={registrationType === "charity" ? "active" : "regular"}
              onClick={() => setRegistrationType("charity")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12.365"
                height="16.487"
                viewBox="0 0 12.365 16.487"
              >
                <path
                  id="Path_38"
                  dataname="Path 38"
                  d="M17.541,9.519,20.473,5.3a.294.294,0,0,1,.536.168V9a.293.293,0,0,1-.051.166l-1.814,2.652Zm-6.489,9.327a.295.295,0,0,0,.078.413L12.9,20.437a.294.294,0,0,0,.406-.079l3.522-5.148L15.217,12.86Zm12.26,0L13.891,5.3a.294.294,0,0,0-.536.168V9a.293.293,0,0,0,.051.166l7.655,11.187a.294.294,0,0,0,.406.079l1.766-1.178a.295.295,0,0,0,.078-.413ZM14.375,4.968l1.441,2.071a9.885,9.885,0,0,1,2.733,0L19.99,4.967a.88.88,0,0,1,.424-.319A6.929,6.929,0,0,0,17.182,4a6.929,6.929,0,0,0-3.231.649.878.878,0,0,1,.424.319Z"
                  transform="translate(-11 -4)"
                  fill="#707070"
                />
              </svg>
              <p>Charity or NPO</p>
            </div>
          </div>
          <div className="registration-input-container">
            {registrationType !== "charity" && registrationType !== "shop" && (
              <>
                <div className="block">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.211"
                      height="16.079"
                      viewBox="0 0 14.211 16.079"
                    >
                      <path
                        id="Path_246"
                        dataname="Path 246"
                        d="M66.938,46a4.136,4.136,0,1,1,0,8.273,4.136,4.136,0,1,1,0-8.273Zm3.069,8.54c2.468.667,4.2,2,4.2,3.6,0,2.2-3.136,3.936-7.072,3.936S60,60.344,60,58.142c0-1.534,1.6-2.869,3.87-3.469a4.708,4.708,0,0,0,3,1.067A4.563,4.563,0,0,0,70.007,54.54Z"
                        transform="translate(-60 -46)"
                        fill="#D1D1D1"
                        fillnule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="registration-input-fields"
                    placeholder="Full Name"
                  />
                </div>
                <div className="block">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.571"
                      height="16.133"
                      viewBox="0 0 22.571 16.133"
                    >
                      <path
                        id="Path_1873"
                        dataname="Path 1873"
                        d="M10.473,29.2,0,20.005c0-1.479,1.119-1.542,1.119-1.542H21.452s1.119.063,1.119,1.542L12.152,29.2a1.836,1.836,0,0,1-.28.113h0a1.658,1.658,0,0,1-1.119,0h0A1.86,1.86,0,0,1,10.473,29.2Zm.839,2.05a2.477,2.477,0,0,1-1.559-.691C8.555,29.519,0,21.8,0,21.8V33.316A1.265,1.265,0,0,0,1.319,34.6H21.252a1.266,1.266,0,0,0,1.319-1.279V21.8s-8.5,7.715-9.7,8.755A2.475,2.475,0,0,1,11.313,31.249Z"
                        transform="translate(0 -18.463)"
                        fill="#d1d1d1"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="registration-input-fields"
                    placeholder="Email"
                  />
                </div>
                <div className="block">
                  <div
                    className="d-flex-between"
                    style={{ padding: "0px 15px" }}
                  >
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
                      style={{ zIndex: "111111111111111", cursor: "pointer" }}
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
                    placeholder="Password"
                  />
                </div>
                <div className="block">
                  <div
                    className="d-flex-between"
                    style={{ padding: "0px 15px" }}
                  >
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
                      style={{ zIndex: "111111111111111", cursor: "pointer" }}
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
                    placeholder="Repeat Password"
                  />
                </div>
              </>
            )}
            {(registrationType === "charity" ||
              registrationType === "shop") && (
              <>
                <div className="block">
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
                    <svg
                      id="account_balance_black_24dp"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        id="Path_1761"
                        dataname="Path 1761"
                        d="M0,0H24V24H0Z"
                        fill="none"
                      />
                      <path
                        id="Path_1762"
                        dataname="Path 1762"
                        d="M4,11.5v4a1.5,1.5,0,0,0,3,0v-4a1.5,1.5,0,0,0-3,0Zm6,0v4a1.5,1.5,0,0,0,3,0v-4a1.5,1.5,0,0,0-3,0ZM3.5,22h16a1.5,1.5,0,0,0,0-3H3.5a1.5,1.5,0,0,0,0,3ZM16,11.5v4a1.5,1.5,0,0,0,3,0v-4a1.5,1.5,0,0,0-3,0ZM10.57,1.49,2.67,5.65A1.245,1.245,0,0,0,3.25,8H19.76a1.245,1.245,0,0,0,.57-2.35l-7.9-4.16a1.976,1.976,0,0,0-1.86,0Z"
                        fill="#d1d1d1"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="registration-input-fields"
                    placeholder="Organization Name"
                  />
                </div>
                <div className="block">
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
                      alt=""
                    />
                  </div>
                  <input
                    type="text"
                    className="registration-input-fields"
                    placeholder="Organization Email"
                  />
                </div>
                <div className="block">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.211"
                      height="16.079"
                      viewBox="0 0 14.211 16.079"
                    >
                      <path
                        id="Path_246"
                        dataname="Path 246"
                        d="M66.938,46a4.136,4.136,0,1,1,0,8.273,4.136,4.136,0,1,1,0-8.273Zm3.069,8.54c2.468.667,4.2,2,4.2,3.6,0,2.2-3.136,3.936-7.072,3.936S60,60.344,60,58.142c0-1.534,1.6-2.869,3.87-3.469a4.708,4.708,0,0,0,3,1.067A4.563,4.563,0,0,0,70.007,54.54Z"
                        transform="translate(-60 -46)"
                        fill="#D1D1D1"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="registration-input-fields"
                    placeholder="Contact Person"
                  />
                </div>
                <div className="block">
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
                    <svg
                      id="call_black_24dp_1_"
                      dataname="call_black_24dp (1)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        id="Path_1758"
                        dataname="Path 1758"
                        d="M0,0H24V24H0Z"
                        fill="none"
                      />
                      <path
                        id="Path_1759"
                        dataname="Path 1759"
                        d="M19.23,15.26l-2.54-.29a1.991,1.991,0,0,0-1.64.57l-1.84,1.84a15.045,15.045,0,0,1-6.59-6.59L8.47,8.94A1.991,1.991,0,0,0,9.04,7.3L8.75,4.78A2,2,0,0,0,6.76,3.01H5.03a1.985,1.985,0,0,0-2,2.07A16.992,16.992,0,0,0,18.92,20.97a1.985,1.985,0,0,0,2.07-2V17.24A1.982,1.982,0,0,0,19.23,15.26Z"
                        fill="#d1d1d1"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="registration-input-fields"
                    placeholder="Contact Person Mobile Number"
                  />
                </div>
                <div className="block">
                  <div
                    className="d-flex-between"
                    style={{ padding: "0px 15px" }}
                  >
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
                      style={{ zIndex: "111111111111111", cursor: "pointer" }}
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
                    placeholder="Password"
                  />
                </div>
                <div className="block">
                  <div
                    className="d-flex-between"
                    style={{ padding: "0px 15px" }}
                  >
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
                      style={{ zIndex: "111111111111111", cursor: "pointer" }}
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
                    placeholder="Repeat Password"
                  />
                </div>
              </>
            )}
            <button className="registration-button bold">Create Account</button>
            <div className="terms-and-conditions">
              <input
                type="checkbox"
                name="agree"
                id="agreement-checkbox"
                className="checkbox-in-reg"
              />
              <p>
                By creating account, you agree to the{" "}
                <a href="/">ItemsSphere's Free Membership Agreement</a> and{" "}
                <a href="/">Privacy Policy</a>
              </p>
            </div>
          </div>
          <div className="alredy-registered">
            <p className="fs15" style={{ color: "#828282" }}>
              Have account?{" "}
            </p>
            <span
              href="/"
              className="fs15"
              style={{
                color: "#41C227",
                textDecoration: "none",
                marginLeft: "5px",
                cursor: "pointer"
              }}
              onClick={
                () => {
                  showSignIn(true);
                  closeModal(false)
                }
              }
            >
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modals")
  );
};

export default Registration;

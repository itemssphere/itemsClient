import React from "react";
import cash from '../../../images/footer-icon/cash.svg'
import fb from '../../../images/footer-icon/fb.svg'
import linkedin from '../../../images/footer-icon/in.svg'
import instagram from '../../../images/footer-icon/instagram.svg'
import location from '../../../images/footer-icon/location.svg'
import mail from '../../../images/footer-icon/mail.svg'
import mastercard from '../../../images/footer-icon/master.svg'
import mobile from '../../../images/footer-icon/mobile.svg'
import visa from '../../../images/footer-icon/visa.svg'
import logo from '../../../images/icons/header-logo.svg'
import apple from '../../../images/icons/applestore.png'
import google from '../../../images/icons/googleplay.png'
import "./Footer.css"
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="row flex-wrap footer-content">
            <div className="col-lg-5">
              <div className="footer__content--left">
                <Link to="/">
                    <img
                    src={logo}
                    alt="logo"
                    style={{width: "189px"}}
                    className="footer__content--logo d-lg-block"
                    />
                </Link>
                <p className="footer__content--status regular">
                  Manage Your Property and Contribute to Sustainable Dvelopment
                </p>
                <div
                  className="footer__content--app d-flex"
                  style={{marginBottom: "30px"}}
                >
                  <img src={apple} alt="" />
                  <img src={google} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-5 col-lg-12">
                      <h2 className="footer__title d-lg-block regular">TERMS</h2>
                      <ul className="footer__menu">
                        <li className="footer__menu--item d-flex">
                          <Link
                            to="/privacy-policy"
                            className="footer__menu--link footer-link-text regular"
                          >
                            PRIVACY POLICY
                          </Link>
                        </li>
                        <li className="footer__menu--item d-flex">
                          <Link
                            to="terms-conditions"
                            className="footer__menu--link footer-link-text regular"
                          >
                            TERMS & CONDITIONS
                          </Link>
                        </li>
                        <li className="footer__menu--item d-flex">
                          <Link
                            to="payment-delivery"
                            className="footer__menu--link footer-link-text regular"
                          >
                            PAYMENT & DELIVERY
                          </Link>
                        </li>
                        <li className="footer__menu--item d-flex">
                          <Link
                            to="/help-contact"
                            className="footer__menu--link footer-link-text regular"
                          >
                            HELP & CONTACT
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h2 className="footer__title d-lg-block mt-24 regular">
                    CONTACT US
                  </h2>
                  <ul className="footer__menu">
                    <li className="footer__menu--item d-flex">
                      <a
                        href="tel:+995599883253"
                        className="footer__menu--link regular d-flex align-items-center"
                      >
                        <img src={mobile} alt="" />
                        +995 599 88 32 53
                      </a>
                    </li>
                    <li className="footer__menu--item d-flex">
                      <a
                        href="mailto:info@itemssphere.ge"
                        className="footer__menu--link regular d-flex align-items-center"
                      >
                        <img src={mail} alt="" />
                        info@itemssphere.ge
                      </a>
                    </li>
                    <li className="footer__menu--item d-flex">
                      <a
                        href="https://google.map"
                        className="footer__menu--link regular d-flex align-items-center"
                      >
                        <img
                          src={location}
                          alt="location"
                        />
                        Tbilisi, Georgia, Kipshidze str 12.
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <h2 className="footer__title d-lg-block mt-24 regular">
                    FIND US
                  </h2>
                  <ul className="footer__menu d-flex footer-cosial-links">
                    <li className="footer__menu--item d-flex">
                      <a
                        href="https://facebook.com"
                        className="footer__menu--link regular d-flex align-items-center"
                      >
                        <img src={fb} alt="" />
                      </a>
                    </li>
                    <li className="footer__menu--item d-flex">
                      <a
                        href="https://instagram.com"
                        className="footer__menu--link regular d-flex align-items-center"
                      >
                        <img
                          src={instagram}
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="footer__menu--item d-flex">
                      <a
                        href="https://linkedin.com"
                        className="footer__menu--link regular d-flex align-items-center"
                      >
                        <img src={linkedin} alt="" />
                      </a>
                    </li>
                  </ul>
                  <div className="footer__payment d-lg-block">
                    <h2 className="footer__payment--title regular">
                      Payment method:
                    </h2>
                    <div className="d-flex">
                      <img
                        src={visa}
                        alt=""
                        className="footer__payment--icon"
                      />
                      <img
                        src={mastercard}
                        alt=""
                        className="footer__payment--icon"
                      />
                      <img
                        src={cash}
                        alt=""
                        className="footer__payment--icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

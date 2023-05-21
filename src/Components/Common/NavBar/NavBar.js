import React from "react";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles["navbar-container"]}>
      <ul className={styles["navbar-list"]}>
        <li style={{marginLeft: "0px !important"}}>
          <NavLink
            activeClassName={styles["active-navbar"]}
            className={styles["navbar-item"]}
            to="/"
            exact
          >
            <svg
              id="home_black_24dp_7_"
              dataname="home_black_24dp (7)"
              xmlns="http://www.w3.org/2000/svg"
              width="22.451"
              height="22.451"
              viewBox="0 0 22.451 22.451"
            >
              <path
                id="Path_791"
                dataname="Path 791"
                d="M0,0H22.451V22.451H0Z"
                fill="none"
              />
              <path
                id="Path_792"
                dataname="Path 792"
                d="M11.355,5.516l4.677,4.21v7.306H14.161V11.419H8.548v5.613H6.677V9.726l4.677-4.21m0-2.516L2,11.419H4.806V18.9h5.613V13.29H12.29V18.9H17.9V11.419H20.71Z"
                transform="translate(-0.129 -0.194)"
                fill="#4cc334"
              />
            </svg>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles["active-navbar"]}
            className={styles["navbar-item"]}
            to="/market"
            exact
          >
            <svg
              id="layout-grid-line"
              xmlns="http://www.w3.org/2000/svg"
              width="17.793"
              height="17.793"
              viewBox="0 0 17.793 17.793"
            >
              <path
                id="Path_607"
                dataname="Path 607"
                d="M0,0H17.793V17.793H0Z"
                fill="none"
              />
              <path
                id="Path_608"
                dataname="Path 608"
                d="M16.791,3a.791.791,0,0,1,.778.8V16.654a.791.791,0,0,1-.778.8H2.778a.791.791,0,0,1-.778-.8V3.8A.791.791,0,0,1,2.778,3ZM9.006,11.032H3.557v4.819H9.006Zm7.006,0H10.563v4.819h5.449ZM9.006,4.606H3.557V9.425H9.006Zm7.006,0H10.563V9.425h5.449Z"
                transform="translate(-0.888 -1.332)"
                fill="#4cc334"
              />
            </svg>
            <p>Market</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles["active-navbar"]}
            className={styles["navbar-item"]}
            to="/shops"
            exact
          >
            <svg
              id="store-line"
              xmlns="http://www.w3.org/2000/svg"
              width="17.793"
              height="17.793"
              viewBox="0 0 17.793 17.793"
            >
              <path
                id="Path_609"
                data-name="Path 609"
                d="M0,0H17.793V17.793H0Z"
                fill="none"
              />
              <path
                id="Path_610"
                data-name="Path 610"
                d="M16.791,9.509v7.282a.778.778,0,0,1-.778.778H3.557a.778.778,0,0,1-.778-.778V9.509A3.1,3.1,0,0,1,2,7.449V2.778A.778.778,0,0,1,2.778,2H16.791a.778.778,0,0,1,.778.778V7.449A3.106,3.106,0,0,1,16.791,9.509Zm-1.557.956a3.119,3.119,0,0,1-3.114-.956,3.114,3.114,0,0,1-4.671,0,3.106,3.106,0,0,1-3.114.956v5.547h10.9ZM11.342,7.449a.778.778,0,1,1,1.557,0,1.557,1.557,0,1,0,3.114,0V3.557H3.557V7.449a1.557,1.557,0,1,0,3.114,0,.778.778,0,1,1,1.557,0,1.557,1.557,0,0,0,3.114,0Z"
                transform="translate(-0.888 -0.888)"
                fill="#4cc334"
              />
            </svg>
            <p>Shops</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles["active-navbar"]}
            className={styles["navbar-item"]}
            to="/charities"
            exact
          >
            <svg
              id="service-line"
              xmlns="http://www.w3.org/2000/svg"
              width="17.793"
              height="17.793"
              viewBox="0 0 17.793 17.793"
            >
              <path
                id="Path_613"
                data-name="Path 613"
                d="M0,0H17.793V17.793H0Z"
                fill="none"
              />
              <path
                id="Path_614"
                data-name="Path 614"
                d="M2.71,4.067a4.843,4.843,0,0,1,6.746-.259,4.842,4.842,0,0,1,6.739.255,5.255,5.255,0,0,1,.264,6.966l-5.925,6.145a1.49,1.49,0,0,1-2.075.08l-.084-.08L2.45,11.029A5.255,5.255,0,0,1,2.71,4.067ZM3.789,5.182a3.637,3.637,0,0,0-.111,4.9l.111.121L9.455,16.06,13.5,11.876,10.8,9.087l-.809.836a2.237,2.237,0,0,1-3.238,0,2.424,2.424,0,0,1,0-3.347l1.6-1.659a3.35,3.35,0,0,0-4.454.149l-.118.115Zm6.475,2.231a.746.746,0,0,1,1.079,0L14.58,10.76l.54-.557a3.636,3.636,0,0,0,.057-4.962,3.354,3.354,0,0,0-4.8-.174l-.117.115L7.836,7.693a.809.809,0,0,0-.06,1.047l.06.069a.745.745,0,0,0,1.013.062l.066-.062Z"
                transform="translate(-0.558 -1.139)"
                fill="#4cc334"
              />
            </svg>
            <p>Charities & NPOs</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles["active-navbar"]}
            className={styles["navbar-item"]}
            to="/social-programs"
            exact
          >
            <svg
              id="hand-heart-line"
              xmlns="http://www.w3.org/2000/svg"
              width="17.793"
              height="17.793"
              viewBox="0 0 17.793 17.793"
            >
              <path
                id="Path_611"
                data-name="Path 611"
                d="M0,0H17.793V17.793H0Z"
                fill="none"
              />
              <path
                id="Path_612"
                data-name="Path 612"
                d="M4.014,7.775a.778.778,0,0,1,.754.8,5.059,5.059,0,0,1,3.263,1.2H9.666a3.3,3.3,0,0,1,2.527,1.2h2.372a3.757,3.757,0,0,1,3.4,2.284,9.721,9.721,0,0,1-7.925,4.125,10.371,10.371,0,0,1-5.32-1.328.756.756,0,0,1-.708.527H1.754a.778.778,0,0,1-.754-.8V8.576a.778.778,0,0,1,.754-.8Zm.754,2.4V14.2l.034.026a8.581,8.581,0,0,0,5.241,1.559,8.206,8.206,0,0,0,5.9-2.507l.1-.107-.09-.08a2.18,2.18,0,0,0-1.238-.5l-.154-.006H12.973a3.842,3.842,0,0,1,.084.8v.8H6.275v-1.6h5.117l-.026-.062A1.888,1.888,0,0,0,9.79,11.383l-.124,0H7.458a3.65,3.65,0,0,0-2.689-1.2Zm-1.508-.8H2.507v5.607h.754ZM10.53,3.429l.267.284.267-.284a1.806,1.806,0,0,1,2.664,0,2.093,2.093,0,0,1,0,2.832L10.8,9.377,7.865,6.261a2.093,2.093,0,0,1,0-2.832,1.806,1.806,0,0,1,2.664,0Zm-1.6,1.133a.42.42,0,0,0-.045.51l.044.055L10.8,7.11l1.866-1.982a.42.42,0,0,0,.044-.511l-.044-.056a.36.36,0,0,0-.481-.046l-.053.046L10.8,5.978,9.465,4.56l-.051-.045a.36.36,0,0,0-.481.046Z"
                transform="translate(-0.444 -1.262)"
                fill="#4cc334"
              />
            </svg>
            <p>Social Programs</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName={styles["active-navbar"]}
            className={styles["navbar-item"]}
            to="/news"
            exact
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <g id="newspaper_black_24dp" transform="translate(0.274)">
                <g id="Group_281" data-name="Group 281">
                  <rect
                    id="Rectangle_1480"
                    data-name="Rectangle 1480"
                    width="18"
                    height="18"
                    transform="translate(-0.274)"
                    fill="none"
                  />
                </g>
                <g
                  id="Group_282"
                  data-name="Group 282"
                  transform="translate(1.5 2.25)"
                >
                  <path
                    id="Path_722"
                    data-name="Path 722"
                    d="M17,3,15.747,4.253,14.5,3,13.25,4.253,12,3,10.753,4.253,9.5,3,8.247,4.253,7,3,5.75,4.253,4.5,3,3.253,4.253,2,3V15a1.5,1.5,0,0,0,1.5,1.5h12A1.5,1.5,0,0,0,17,15ZM8.75,15H3.5V10.5H8.75Zm6.75,0H10.25V13.5H15.5Zm0-3H10.25V10.5H15.5Zm0-3H3.5V6.75h12Z"
                    transform="translate(-2 -3)"
                    fill="#4cc334"
                  />
                </g>
              </g>
            </svg>
            <p>News</p>
          </NavLink>
        </li>
      </ul>
      <div className={styles['right-side']}>
        <Link to="/about">
            About us
        </Link>
        <Link to='/help-and-contact'>
            Help&Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

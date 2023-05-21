import React from "react";
import {Link} from "react-router-dom";
import styles from "./MobileHead.module.css";
import logo from "../../../images/icons/header-logo.svg";
import filter from "../../../images/icons/filter charities.svg"

const MobileHead = ({type}) => {
    return (
        <div className="container">
            <div className={styles["header-mobile-view"]}>
                {
                    type.includes("withLogo") && <Link to="/">
                        <img src={logo} style={{width: "137px"}} alt="logo"/>
                    </Link>
                }
                {
                    type.includes("filter") && <div className={styles["filter-button"]}>
                        <img src={filter} alt="filter icon"/>
                        Filter
                    </div>
                }
                {
                    type.includes("charities") && <div className={styles["filter-button"]}>
                        <img src={filter} alt="filter icon"/>
                        Charities
                    </div>
                }
                {
                    type.includes("categories") && <div className={styles["categories-button"]}>
                        <svg
                            id="apps_black_24dp"
                            xmlns="http://www.w3.org/2000/svg"
                            width="19.101"
                            height="19.101"
                            viewBox="0 0 19.101 19.101"
                        >
                            <path
                                id="Path_907"
                                data-name="Path 907"
                                d="M0,0H19.1V19.1H0Z"
                                fill="none"
                            />
                            <path
                                id="Path_908"
                                data-name="Path 908"
                                d="M4,7.183H7.183V4H4Zm4.775,9.55h3.183V13.55H8.775ZM4,16.734H7.183V13.55H4Zm0-4.775H7.183V8.775H4Zm4.775,0h3.183V8.775H8.775ZM13.55,4V7.183h3.183V4ZM8.775,7.183h3.183V4H8.775Zm4.775,4.775h3.183V8.775H13.55Zm0,4.775h3.183V13.55H13.55Z"
                                transform="translate(-0.817 -0.817)"
                                fill="#2BA513"
                            />
                        </svg>
                        Categories
                    </div>
                }
            </div>
        </div>
    );
};

export default MobileHead;

import React from "react";
import {Link} from "react-router-dom";
import styles from "./SocialProgram.module.css";

const SocialPrograms = ({
                            withDonate, data, socialProgramsPage, organizationsPage,
                        }) => {
    return (<Link to={`/social-program/${data.id}`} className={styles['soc-program-items']}>
            <div
                className={`${styles["social-programs-container"]} ${socialProgramsPage ? styles["social-programs-page-item"] : ""}`}
                style={{marginBottom: socialProgramsPage ? "20px" : "0px"}}
            >
                <div className={styles["social-program-item-container"]}>
                    <div
                        className={`${styles["social-program-item-image"]} ${socialProgramsPage ? styles["social-programs-page-item-image"] : ""}`}
                        style={{backgroundImage: `url('${data.cover}')`}}
                    ></div>
                    <div
                        className={styles["social-program-description"]}
                        style={{paddingTop: socialProgramsPage ? "20px" : "17px"}}
                    >
                        <p className="bold fs14" style={{color: "black", height: "28px"}}>{data.title}</p>
                        <div className={styles["social-programs-wrapper"]}>
                            <p
                                className={`fs13 ${socialProgramsPage ? styles["social-program-item-description"] : ""} ${styles["social-programs-paragraph"]}`}
                            >
                                {data.description.slice(0, 60)}...
                            </p>
                        </div>
                        {!socialProgramsPage && (<>
                                <div className={styles["social-program-prices"]}>
                                    <p className="fs13">
                    <span
                        className={`fs18 ${styles["social-program-current-donate"]} bold`}
                    >
                      {data.raised_amount} ₾{" "}
                    </span>
                                        <span style={{color: "#575757"}}>
                      raised of {data.goal_amount}₾ Goal
                    </span>
                                    </p>
                                </div>
                                <div className={styles["social-program-progress"]}>
                                    <div
                                        className={`${styles["social-programs-progress-line"]}`}
                                    ></div>
                                    <div
                                        className={`${styles["social-program-progress-done"]}`}
                                        style={{width: data.raised_diff}}
                                    ></div>
                                </div>
                            </>)}
                        <div className={styles["social-programs-actions"]}>
                            <div
                                className={`${styles["social-programs-add-to-favorite"]} ${styles["social-programs-actions-btns"]}`}
                            >
                                <div
                                    className={`${styles["social-programs-add-to-favorite-btn"]} ${styles["programs-actions-btns"]}`}
                                >
                                    <svg
                                        id="thumb_up_black_24dp"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            id="Path_1684"
                                            dataname="Path 1684"
                                            d="M0,0H24V24H0Z"
                                            fill="none"
                                        />
                                        <path
                                            id="Path_1685"
                                            dataname="Path 1685"
                                            d="M1,21H5V9H1ZM23,10a2.006,2.006,0,0,0-2-2H14.69l.95-4.57.03-.32a1.505,1.505,0,0,0-.44-1.06L14.17,1,7.59,7.59A1.955,1.955,0,0,0,7,9V19a2.006,2.006,0,0,0,2,2h9a1.987,1.987,0,0,0,1.84-1.22l3.02-7.05A1.976,1.976,0,0,0,23,12Z"
                                        />
                                    </svg>
                                </div>
                                <p
                                    className={`${styles["social-programs-favorited-quantity"]}`}
                                >
                                    {data.likes_count}
                                </p>
                                <p className={styles["social-programs-add-fav-actions-hover"]}>
                                    Like
                                </p>
                            </div>
                            <div
                                className={`${styles["social-program-share"]} ${styles["social-programs-actions-btns"]}`}
                            >
                                <div
                                    className={`${styles["social-program-share-btn"]} ${styles["programs-actions-btns"]}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        id="Layer_1"
                                        dataname="Layer 1"
                                        height="18px"
                                        width="16px"
                                        viewBox="0 0 122.88 120.94"
                                    >
                                        <path
                                            d="M98.11,0A24.77,24.77,0,1,1,80.6,42.28c-.22-.22-.43-.44-.64-.67l-31.14,13a25,25,0,0,1,.53,8.95L81,78.31A24.66,24.66,0,1,1,74.72,88L45.34,74.26A24.77,24.77,0,1,1,42.28,43c.44.44.87.9,1.27,1.37L74.29,31.55A24.77,24.77,0,0,1,98.11,0Z"
                                            fill="#1A1A1A"
                                        ></path>
                                    </svg>
                                </div>
                                <p className={`${styles["social-program-shared-quantity"]}`}>
                                    {data.shares_count}
                                </p>
                                <p className={styles["social-programs-share-actions-hover"]}>
                                    Share
                                </p>
                            </div>
                        </div>
                        {socialProgramsPage && (<>
                                <div
                                    className={styles["social-program-prices"]}
                                    style={{marginTop: "10px"}}
                                >
                                    <p className="fs13">
                    <span
                        className={`fs18 ${styles["social-program-current-donate"]} bold`}
                    >
                      {data.raised_amount} ₾{" "}
                    </span>
                                        <span style={{color: "#575757"}}>
                      raised of {data.goal_amount}₾ Goal
                    </span>
                                    </p>
                                </div>
                                <div className={styles["social-program-progress"]}>
                                    <div
                                        className={`${styles["social-programs-progress-line"]}`}
                                    ></div>
                                    <div
                                        className={`${styles["social-program-progress-done"]}`}
                                        style={{width: data.raised_diff}}
                                    ></div>
                                </div>
                            </>)}
                    </div>
                </div>
            </div>
            {organizationsPage && (<div
                    className={styles["social-progrram-on-edit"]}
                    style={{marginTop: "15px"}}
                >
                    <div className={styles["left-side"]}>
                        <div style={{display: "flex"}}>
              <span
                  className={`${styles["created"]} fs13`}
                  style={{color: "#707070", opacity: "0.7", width: "54px"}}
              >
                Created:{" "}
              </span>
                            <span
                                className={`${styles["created-date"]} fs13`}
                                style={{
                                    color: "#707070", opacity: "1 !important", marginTop: "4px",
                                }}
                            >
                {" "}
                                2020-03-30
              </span>
                        </div>
                        <div style={{display: "flex", marginTop: "20px"}}>
              <span
                  className={`${styles["updated"]} fs13`}
                  style={{color: "#707070", opacity: "0.7", width: "54px"}}
              >
                Updated:{" "}
              </span>
                            <span
                                className={`${styles["updated-date"]} fs13`}
                                style={{
                                    color: "#707070", opacity: "1 !important", marginTop: "4px",
                                }}
                            >
                2020-03-30
              </span>
                        </div>
                    </div>
                    <div className={styles["right-side"]}>
                        <select
                            name=""
                            id=""
                            className={`${styles["select-form-control"]} select-form-control fs15`}
                            style={{
                                width: "118px",
                                height: "32px",
                                background: "#F6F6F6",
                                color: "#707070",
                                marginBottom: "6px",
                                borderRightColor: "#F6F6F6",
                            }}
                        >
                            <option value="paused">Paused</option>
                            <option value="started">Started</option>
                        </select>
                        <a href="#" className={styles["edit-social-program"]}>
                            Edit
                        </a>
                        <a href="#" className={styles["edit-social-program-mobile"]}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    id="Group_1295"
                                    dataname="Group 1295"
                                    transform="translate(-330 -509)"
                                >
                                    <g
                                        id="Group_581"
                                        dataname="Group 581"
                                        transform="translate(105 142)"
                                    >
                                        <circle
                                            id="Ellipse_299"
                                            dataname="Ellipse 299"
                                            cx="12"
                                            cy="12"
                                            r="12"
                                            transform="translate(225 367)"
                                            fill="#2e76fc"
                                        />
                                    </g>
                                    <g id="pencil" transform="translate(338 515.686)">
                                        <path
                                            id="Path_547"
                                            dataname="Path 547"
                                            d="M5.384,82.473l-4.8,4.8a.191.191,0,0,0-.05.088L.005,89.492a.189.189,0,0,0,.229.229l2.134-.532a.189.189,0,0,0,.088-.05l4.8-4.8Zm0,0"
                                            transform="translate(0 -80.771)"
                                            fill="#fff"
                                        />
                                        <path
                                            id="Path_548"
                                            dataname="Path 548"
                                            d="M336.852,1.048l-.534-.534a.967.967,0,0,0-1.335,0l-.654.654L336.2,3.037l.654-.654a.944.944,0,0,0,0-1.335Zm0,0"
                                            transform="translate(-328.41 0)"
                                            fill="#fff"
                                        />
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>)}
        </Link>);
};

export default SocialPrograms;

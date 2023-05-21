import styles from "./ActionsCount.module.css";
import React from "react";

const ActionsCount = () => {
    return(
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
                    165
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
                    574
                </p>
                <p className={styles["social-programs-share-actions-hover"]}>
                    Share
                </p>
            </div>
        </div>
    )
}

export default ActionsCount
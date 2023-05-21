import React from "react";
import SocialProjectItem from "./SocialProjectItem.js"
import styles from "./style.module.css";


const OrganizationsSocialPrograms = ({ onEdit, setOnEdit }) => {
  return (
    <>
      <div className={styles["section-head-container"]} style={{justifyContent: "flex-end"}}>
        <div className={styles["section-head-action-btns"]} >
          <button
            className={`${styles["no-background-btn"]} ${styles["underlined"]} ${styles["on-desktop"]}`}
          >
            Profile Preview
          </button>
          <button
            className={`${styles["no-background-btn"]} ${styles["underlined"]} ${styles["on-mobile"]}`}
          >
            Preview
          </button>
          {!onEdit && (
            <button
              className={styles["border-blue-btn"]}
              onClick={() => setOnEdit(true)}
            >
              Edit
            </button>
          )}
          {onEdit && (
            <button
              className={`${styles["background-blue-btn"]} ${styles["save-changes"]}`}
              style={{ marginRight: "30px" }}
            >
              Save Changes
            </button>
          )}
          {onEdit && (
            <button
              className={`${styles["no-background-btn"]} ${styles["cancel-edit"]}`}
              onClick={() => setOnEdit(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
      <div className={styles["news-list-header"]}>
        <p className={`${styles["main-section-head-title"]} bold`}>
          Social Projects <span className="bold">5</span>
        </p>
        <div className={styles["flex-box"]}>
          <div className={styles["section-header-search-block"]}>
            <input
              type="text"
              name="search"
              className={styles["form-control-search"]}
              placeholder="Search Social Projects"
            />
            <button className={styles["start-search-btn-section-header"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.999"
                height="26.843"
                viewBox="0 0 26.999 26.843"
              >
                <g
                  id="Group_1291"
                  dataname="Group 1291"
                  transform="translate(-1318.031 -75)"
                >
                  <path
                    id="Exclusion_1"
                    dataname="Exclusion 1"
                    d="M13.262,25.934A13.439,13.439,0,0,1,8.1,24.915a13.238,13.238,0,0,1-4.215-2.779,12.911,12.911,0,0,1-2.842-4.122,12.744,12.744,0,0,1,0-10.095A12.911,12.911,0,0,1,3.884,3.8,13.238,13.238,0,0,1,8.1,1.019a13.585,13.585,0,0,1,10.324,0A13.238,13.238,0,0,1,22.639,3.8,12.912,12.912,0,0,1,25.481,7.92a12.744,12.744,0,0,1,0,10.095,12.912,12.912,0,0,1-2.842,4.122,13.238,13.238,0,0,1-4.215,2.779A13.438,13.438,0,0,1,13.262,25.934Zm0-22.572a9.517,9.517,0,0,0-9.4,9.605,9.517,9.517,0,0,0,9.4,9.605,9.517,9.517,0,0,0,9.4-9.605A9.517,9.517,0,0,0,13.262,3.362Z"
                    transform="translate(1318.031 75)"
                    fill="#42d921"
                  />
                  <path
                    id="Path_2"
                    dataname="Path 2"
                    d="M0,0,3.85.008l.015,7.219L.015,7.219Z"
                    transform="translate(1337.188 96.732) rotate(-45)"
                    fill="#42d921"
                  />
                </g>
              </svg>
            </button>
          </div>
          <p className={styles["sort-text"]}>Sort by</p>
          <select
            className={styles["select-form-control"]}
            style={{
              fontSize: "15px",
              width: "149px",
              height: "32px",
              color: "black",
            }}
          >
            <option value="2">Latest</option>
            <option value="2">A-Z</option>
            <option value="1">Featured</option>
            <option value="3">Z-A</option>
          </select>
          <button className={styles["head-search-button-mobile"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.999"
                height="26.843"
                viewBox="0 0 26.999 26.843"
                className={styles['']}
              >
                <g
                  id="Group_1291"
                  dataname="Group 1291"
                  transform="translate(-1318.031 -75)"
                >
                  <path
                    id="Exclusion_1"
                    dataname="Exclusion 1"
                    d="M13.262,25.934A13.439,13.439,0,0,1,8.1,24.915a13.238,13.238,0,0,1-4.215-2.779,12.911,12.911,0,0,1-2.842-4.122,12.744,12.744,0,0,1,0-10.095A12.911,12.911,0,0,1,3.884,3.8,13.238,13.238,0,0,1,8.1,1.019a13.585,13.585,0,0,1,10.324,0A13.238,13.238,0,0,1,22.639,3.8,12.912,12.912,0,0,1,25.481,7.92a12.744,12.744,0,0,1,0,10.095,12.912,12.912,0,0,1-2.842,4.122,13.238,13.238,0,0,1-4.215,2.779A13.438,13.438,0,0,1,13.262,25.934Zm0-22.572a9.517,9.517,0,0,0-9.4,9.605,9.517,9.517,0,0,0,9.4,9.605,9.517,9.517,0,0,0,9.4-9.605A9.517,9.517,0,0,0,13.262,3.362Z"
                    transform="translate(1318.031 75)"
                    fill="#42d921"
                  />
                  <path
                    id="Path_2"
                    dataname="Path 2"
                    d="M0,0,3.85.008l.015,7.219L.015,7.219Z"
                    transform="translate(1337.188 96.732) rotate(-45)"
                    fill="#42d921"
                  />
                </g>
              </svg>
            </button>
        </div>
      </div>
      <div className={styles['social-projects-list']}>
            {/* <SocialProjectItem /> */}
            <SocialProjectItem organizationsPage={true} />
            <SocialProjectItem organizationsPage={true} />
            <SocialProjectItem organizationsPage={true} />
            <SocialProjectItem organizationsPage={true} />
      </div>
    </>
  );
};

export default OrganizationsSocialPrograms;

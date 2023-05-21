import React, {useEffect, useState} from "react"
import OrganizationPrograms from "../OrganizationPrograms/OrganizationPrograms"
import styles from "./Organization.module.css"
import axios from "axios";

const Organization = () => {
    const [organisers, setOrganisers] = useState([]);

    useEffect(() => {
        axios(`${process.env.REACT_APP_BASIC_URL}/socials?limit=8`)
            .then((response) => {
                let data = response.data.data;
                setOrganisers(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return(
        <div className={styles["social-programs-container"]}>
    <div className={styles["social-programs-background"]}>
        <div className={styles["social-program-items-list"]}>
            {
                organisers.map((org) => {
                    return <OrganizationPrograms mainPage={true} data={org} />
                })
            }
        </div>
        <div className={styles["social-programs-content"]}>
            <div className={styles["social-program-text-section"]}>
                <h2 className={`${styles["social-program-title"]} bold`}>Organisers</h2>
                <h3 className={`${styles["social-program-level-two-title"]} bold`}>Buy and help others</h3>
                <p className={styles["social-program-description-text"]}>We used light green and blue colors that match the company identity. The app provides users with different types of statistics on products and sales. To make this data easy to understand, we visualized it with charts and created hierarchical navigation through data. We also created different</p>
                <button className={styles["view-all-social-program"]}>View all</button>
            </div>
        </div>
    </div>
</div>
    )
}

export default Organization
import React, {useEffect, useState} from "react"
import SocialPrograms from "../SocialProgram/SocialPrograms"
import styles from './SocialProgram.module.css'
import axios from "axios";

const SocialProgram = () => {

  const [socialPrograms, setSocialPrograms] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASIC_URL}/socials?limit=8`)
        .then((response) => {
          let data = response.data.data;
          setSocialPrograms(data)
        })
        .catch((err) => {
          console.log(err)
        })
  }, [])

    return(
        <div className={styles["social-programs-container"]}>
        <div className={styles["social-programs-background"]}>
          <div className={styles["social-programs-content"]}>
            <div className={styles["social-program-text-section"]}>
              <h2 className={`${styles["social-program-title"]} bold`}>Social Programs</h2>
              <h3 className={`${styles["social-program-level-two-title"]} bold`}>Lorem ipsum</h3>
              <p className={styles["social-program-description-text"]}>
                We used light green and blue colors that match the company
                identity. The app provides users with different types of
                statistics on products and sales. To make this data easy to
                understand, we visualized it with charts and
              </p>
              <button className={styles["view-all-social-program"]}>View all</button>
            </div>
          </div>
          <div className={styles["social-program-items-list"]}>
            {socialPrograms.map((p) => {
              return <SocialPrograms data={p} key={p.id} />
            })}
          </div>
        </div>
      </div>
    )
}

export default SocialProgram
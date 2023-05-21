import React from "react"
import arrow from "../../images/icons/arrow.svg"
import styles from "./NewsGroups.module.css"

const NewsGroups = ({groups, activeGroup, setActiveGroup}) => {
    return(
        <div className={styles["select-news-category-container"]}>
        <div className={styles["news-category-content"]}>
          <div style={{transform: "rotate()180deg"}} className={styles['next-prev-buttons']}><img src={arrow} alt="arrow"/></div>
          <ul className={styles["news-group-list"]}>
            {
              groups.map((group) => {
                if(group.value !== activeGroup.group) return <li key={group.id} onClick={() => setActiveGroup((prevState) => {return {...prevState, group: group.value}})} >{group.name}</li>;
                return <li key={group.id} onClick={() => setActiveGroup((prevState) => {return {...prevState, group: group.value}})} className={styles["active-group"]}>{group.name}</li>
              })
            }
          </ul>
          <button className={styles['next-prev-buttons']}><img src={arrow} alt="arrow"/></button>
        </div>
      </div>
    )
}

export default NewsGroups
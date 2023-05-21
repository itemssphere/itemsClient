import React from "react"
import styles from './SectionHead.module.css'
import arrow from '../../../images/icons/banner-arrow.svg'
import { Link } from "react-router-dom"

const SectionHead = ({title, redirect, margin}) => {
    return (
        <div className={styles['section-head-container']} style={{marginTop: margin}}>
            <div className={styles['section-title-content']}>
                <p className={styles["section-title"]}>{title}</p>
                <Link to={redirect} className={styles['view-all-button']}>View all</Link>
            </div>
            <div className={styles['slider-switcher']}>
                <div className={styles['prev-slide']}><img src={arrow} alt="prev"/></div>
                <div className={styles['next-slide']}><img src={arrow} alt="next"/></div>
            </div>
        </div>
    )
}

export default SectionHead
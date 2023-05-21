import React from 'react'
import styles from './SimpleSlider.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const SimpleSlider = ({children, padding}) => {
    return(
        <div className={styles['slider-container']} style={{paddingTop: padding ? padding : "0px"}}>
            <div className={styles['slider-content']}>
                {children}
            </div>
        </div>
    )
}

export default SimpleSlider
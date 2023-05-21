import React from "react";
import styles from './Charasteristics.module.css';

const Characteristics = () => {
    return(
        <div className={styles['characteristics-table-wrapper']}>
            <ul className={styles['characteristics-table']}>
                <li>
                    <span className={styles['table-title']}>Model</span> <span className={styles['table-value']}>TCL 40S325 40 Inch 1080p Smart LED Roku TV</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Case Size</span> <span className={styles['table-value']}>41mm, 45mm</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Case Thickness</span> <span className={styles['table-value']}>10.7mm</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Display</span> <span className={styles['table-value']}>Always-On Retina display Nearly 20% more screen area than Apple Watch SE and over 50% more screen area than Series 3</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Processor</span> <span className={styles['table-value']}>S7 with 64-bit dual-core processor; up to 20% faster than SE</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Optical Heart Sensor Heart Sensor</span> <span className={styles['table-value']}>Third-generation optical heart sensor</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Digital Crown</span> <span className={styles['table-value']}>Digital Crown with haptic feedback</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Altimeter</span> <span className={styles['table-value']}>Always-on Altimeter</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Speaker</span> <span className={styles['table-value']}>50% louder than Series 3</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Fall Detection</span> <span className={styles['table-value']}>Yes</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Noise Monitoring</span> <span className={styles['table-value']}>No</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Blood oxygen sensor</span> <span className={styles['table-value']}>Yes</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Electrical heart sensor</span> <span className={styles['table-value']}>Yes</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Capacity</span> <span className={styles['table-value']}>32GB, 64GB</span>
                </li>
                <li>
                    <span className={styles['table-title']}>Bluetooth</span> <span className={styles['table-value']}>BT 5.0</span>
                </li>
            </ul>
        </div>
    )
}

export default Characteristics
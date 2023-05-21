import React, {useState} from "react";
import styles from './Reviews.module.css'

const Reviews = () => {

    const [reviewCount, setReviewCount] = useState(0)

    return (
        <div>
            <p className={`${styles['title']} bold`}>You can add review</p>
            <div className={styles['add-new-review-container']}>
                <input type="text" className={styles['form-control']} />
                <div className={styles['reviews-count-wrapper']}>
                    <span>Rate now</span>
                    <div className={styles['review-count-dots']}>
                        <div className={reviewCount > 0 && styles['review-dots-active']} onClick={() => setReviewCount(1)}></div>
                        <div className={reviewCount > 1 && styles['review-dots-active']} onClick={() => setReviewCount(2)}></div>
                        <div className={reviewCount > 2 && styles['review-dots-active']} onClick={() => setReviewCount(3)}></div>
                        <div className={reviewCount > 3 && styles['review-dots-active']} onClick={() => setReviewCount(4)}></div>
                        <div className={reviewCount > 4 && styles['review-dots-active']} onClick={() => setReviewCount(5)}></div>
                    </div>
                </div>
                <button className={styles['submit-review-button']}>
                    Write review
                </button>
            </div>
            <div className={styles['reviews-container']}>
                <div className={styles['reviews-items-wrapper']}>
                    <div className={styles['author-avatar']} style={{backgroundImage: `url('${process.env.REACT_APP_BASIC_URL}/storage/53/300x300.jpeg')`}}></div>
                    <div className={styles['review-details']}>
                        <div className={styles['review-detail-head']}>
                            <div className={styles['create-date']}>
                                <span className={styles['review-upload-date']}>July 31, 2017</span>
                                <div className={styles['review-count-dots']} style={{marginTop: "0px"}}>
                                    <div className={styles['review-dots-active']}></div>
                                    <div className={styles['review-dots-active']}></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <span className={styles['report-review']}>Report</span>
                        </div>
                        <p className={`${styles['review-creator']} bold`}>Review From Guga Mechiauri</p>
                        <p className={styles['review-description-text']}>The NES Classic Edition system is a miniaturized version of the groundbreaking NES, originally released in 1985. Just plug the NES Classic Edition into your TV, pick up that gray controller, and rediscover the joy of NES games. Play NES games</p>
                    </div>
                </div>
                <div className={styles['reviews-items-wrapper']}>
                    <div className={styles['author-avatar']} style={{backgroundImage: `url('${process.env.REACT_APP_BASIC_URL}/storage/53/300x300.jpeg')`}}></div>
                    <div className={styles['review-details']}>
                        <div className={styles['review-detail-head']}>
                            <div className={styles['create-date']}>
                                <span className={styles['review-upload-date']}>July 31, 2017</span>
                                <div className={styles['review-count-dots']} style={{marginTop: "0px"}}>
                                    <div className={styles['review-dots-active']}></div>
                                    <div className={styles['review-dots-active']}></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div className={styles['action-buttons']}>
                                <span className={styles['report-review']} style={{marginRight: "13px"}}>Edit</span>
                                <span className={styles['report-review']}>Delete</span>
                            </div>
                        </div>
                        <p className={`${styles['review-creator']} bold`}>Review From Guga Mechiauri</p>
                        <p className={styles['review-description-text']}>The NES Classic Edition system is a miniaturized version of the groundbreaking NES, originally released in 1985. Just plug the NES Classic Edition into your TV, pick up that gray controller, and rediscover the joy of NES games. Play NES games</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews
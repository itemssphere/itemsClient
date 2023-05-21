import React, {useState} from "react";
import styles from './Questions.module.css';
import sendIcon from '../../../images/icons/sent-mail.svg'

const Questions = () => {
    const [showAddAnswer, setShowAddAnswer] = useState(false);
    return (
        <div className={styles['questions-container']}>
            <p className={`${styles['title']} bold`}>You can add question</p>
            <div className={styles['add-new-question-container']}>
                <input type="text" className={styles['form-control']} />
                <button className={styles['submit-question-button']}>
                    Add question
                </button>
            </div>
            <div className={styles['questions-container']}>
                <div className={styles['questions-items']}>
                    <span className={styles['question-create-date']}>July 31, 2017</span>
                    <div className={styles['question-content']}>
                        <div className={styles['question-text']}>
                            <span className="bold" style={{marginRight: "4px"}}>Guga Mechiauri:</span>
                            <p>How can I place an order in your store?</p>
                        </div>
                        <div className={styles['actions']}>
                            <span className={styles['report-question']}>Report</span>
                            <span className={styles['add-answer']} onClick={() => setShowAddAnswer(!showAddAnswer)}>{!showAddAnswer ? "Add answer" : "Cancel"}</span>
                        </div>
                    </div>
                    {
                        showAddAnswer && <div className={styles['add-answer-container']}>
                            <input type="text" className={styles['form-control-add-answer']} />
                            <button className={styles['add-answer-button']}><img src={sendIcon} alt="icon" /></button>
                        </div>
                    }
                    <div className={styles['answer-item-content']}>
                        <span className={`${styles['answer-author']} bold`}>Admin:</span>
                        <div className={styles['answer-text']}>
                            <span>The NES Classic Edition system is a miniaturized version of the groundbreaking NES, originally released in 1985. Just plug the NES Classic Edition into your TV, pick up</span>
                            <div className={styles['answer-actions-container']}>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['questions-items']}>
                    <span className={styles['question-create-date']}>July 31, 2017</span>
                    <div className={styles['question-content']}>
                        <div className={styles['question-text']}>
                            <span className="bold" style={{marginRight: "4px"}}>Guga Mechiauri:</span>
                            <p>How can I place an order in your store?</p>
                        </div>
                        <div className={styles['actions']}>
                            <span className={styles['report-question']}>Report</span>
                            <span className={styles['add-answer']} onClick={() => setShowAddAnswer(!showAddAnswer)}>{!showAddAnswer ? "Add answer" : "Cancel"}</span>
                        </div>
                    </div>
                    {
                        showAddAnswer && <div className={styles['add-answer-container']}>
                            <input type="text" className={styles['form-control-add-answer']} />
                            <button className={styles['add-answer-button']}><img src={sendIcon} alt="icon" /></button>
                        </div>
                    }
                    <div className={styles['answer-item-content']}>
                        <span className={`${styles['answer-author']} bold`}>Admin:</span>
                        <div className={styles['answer-text']}>
                            <span>The NES Classic Edition system is a miniaturized version of the groundbreaking NES, originally released in 1985. Just plug the NES Classic Edition into your TV, pick up</span>
                            <div className={styles['answer-actions-container']}>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
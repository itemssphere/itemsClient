import React, {useEffect, useState} from "react";
import styles from './ProductPage.module.css';
import axios from "axios";
import {Link, useLocation} from "react-router-dom";
import Carousel from "nuka-carousel";
import ActionsCount from "../Product/ActionsCount/ActionsCount";
import Characteristics from "./Characteristics/Characteristics";
import Description from "./Description/Description";
import Reviews from "./Reviews/Reviews";
import Questions from "./Questions/Questions";

const ProductPage = () => {
    const location = useLocation();
    const [counter, setCounter] = useState(1);
    const [activeTab, setActiveTab] = useState("product");
    const [productData, setProductData] = useState({})
    const [images, setImages] = useState([
        {
            url: "https://api.laradevtest.com/storage/53/300x300.jpeg",
            id: 1453
        },
        {
            url: "https://api.laradevtest.com/storage/53/300x300.jpeg",
            id: 1454
        },
        {
            url: "https://api.laradevtest.com/storage/53/300x300.jpeg",
            id: 1455
        },
        {
            url: "https://api.laradevtest.com/storage/53/300x300.jpeg",
            id: 1456
        },
        {
            url: "https://api.laradevtest.com/storage/53/300x300.jpeg",
            id: 1457
        }
    ]);
    const [activeImage, setActiveImage] = useState("https://api.laradevtest.com/storage/53/300x300.jpeg")
    const counterPlus = () => {
        setCounter(counter + 1)
    }

    const counterMinus = () => {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }

    useEffect(() => {
        const productId = location.pathname.slice(9);
        axios(`${process.env.REACT_APP_BASIC_URL}/products/${productId}`)
            .then((response) => {
                setProductData({...response.data.data})
            })
            .catch((err) => {
                console.log(err)
            })
    }, [location.pathname]);

    return (
        <div className="container">
            <div className="pages-anchor" style={{marginBottom: "20px"}}>
                <Link to="/market">Home</Link>
                <span>{`>`}</span>
                <Link to="/category1">category1</Link>
                <span>{`>`}</span>
                <Link to="/market">product</Link>
                <span>{`>`}</span>
                <Link to={`/product/${productData.id}`}>{productData.id}</Link>
            </div>
            <div className={styles['product-content-container']}>
                <div className="row">
                    <div className="col-md-4">
                        <Carousel withoutControls={true} autoplay={false} style={{borderRadius: "20px", marginBottom: "13px"}} >
                            <div style={{backgroundImage: `url('${activeImage}')`}} className={styles["slider-image"]} />
                        </Carousel>
                        <Carousel withoutControls={false} autoplay={false} slidesToShow="3" defaultControlsConfig={{
                            prevButtonText: "<",
                            nextButtonText: ">",
                            pagingDotsContainerClassName: "display-none"
                        }} >
                            {
                                images.map((i) => {
                                    return(
                                        <div style={{backgroundImage: `url('${i.url}')`}} onClick={() => setActiveImage(i.url)} className={styles["slider-image-selector"]} />
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="col-md-8">
                        <div className={styles['product-head']}>
                            <span className={styles['create-date']}>Created: 01.06.2021</span>
                            <div className={styles['hashtags']}>
                                <span className={styles['hashtag']}>#Anniversary </span>
                                <span className={styles['hashtag']}>#Christmas & Winter </span>
                                <span className={styles['hashtag']}>#Birthday </span>
                            </div>
                        </div>
                        <h3 className={`${styles['product-title']} bold`}>TCL 40S325 40 Inch 1080p Smart LED Roku TV</h3>
                        <div className={styles['product-condition']}>
                            <span className={styles['new-item']}>New</span>
                            <div className={styles['review-count']}>
                                <div className={`${styles["circle"]} ${styles["filled"]}`}></div>
                                <div className={`${styles["circle"]} ${styles["filled"]}`}></div>
                                <div className={`${styles["circle"]} ${styles["filled"]}`}></div>
                                <div className={`${styles["circle"]}`}></div>
                                <div className={`${styles["circle"]}`}></div>
                                <span className={styles["reviews-count"]}>132 Review</span>
                            </div>
                        </div>
                        <ActionsCount />
                        <div className={styles['product-details-wrapper']}>
                            <div className={styles['product-details-container']}>
                                <span className={styles['manufacturer']}>Manufacturing Year: <span>2019</span></span>
                                <span className={styles['location']}>Location: <span>Tbilisi</span></span>
                                <span className={styles['color']}>Color: <span>Pink</span></span>
                                <div className={styles['choose-item']}>
                                    <div style={{backgroundImage: `url('${process.env.REACT_APP_BASIC_URL}/storage/53/300x300.jpeg')`}}></div>
                                    <div style={{backgroundImage: `url('${process.env.REACT_APP_BASIC_URL}/storage/53/300x300.jpeg')`}}></div>
                                </div>
                                <span className={`${styles['section-name']} bold`}>Case Size:</span>
                                <select className={styles['select-form-control']}>
                                    <option value="40mm">40mm</option>
                                    <option value="30mm">30mm</option>
                                    <option value="20mm">20mm</option>
                                </select>
                                <span className={`${styles['section-name']} bold`}>Capacity:</span>
                                <select className={styles['select-form-control']}>
                                    <option value="40mm">32gb</option>
                                    <option value="30mm">16gb</option>
                                    <option value="20mm">8gb</option>
                                </select>
                                <span className={`${styles['section-name']} bold`}>Shipping type:</span>
                                <div className={styles['delivery-type']}>
                                    <span>Georgian Post (2 days),</span>
                                    <span>Owners Delivery (1 day)</span>
                                </div>
                                <span className={styles['in-stock']}>In stock: 143</span>
                                <span className={`${styles['section-name']} bold`}>Quantity:</span>
                                <div className={styles['counter-container']}>
                                    <button onClick={counterMinus}>-</button>
                                    <p>{counter}</p>
                                    <button onClick={counterPlus}>+</button>
                                </div>
                                <button className={`${styles['add-to-wishlist']} bold`}>
                                    Add to wishlist
                                </button>
                            </div>
                            <div className={styles['owner-and-price-info']}>
                                <div className={styles['flex-wrap']}>
                                    <div className={styles['product-prices-container']}>
                                        <span className={`${styles['section-name']} bold`}>Price:</span>
                                        <div className={styles['discounter-price-wrapper']}>
                                            <span className={styles['discount']}>10%</span>
                                            <span className={styles['old-price']}>1,430.30₾</span>
                                        </div>
                                        <span className={`${styles['price-now']} bold`}>1,239.39₾</span>
                                        <span className={`${styles['section-name']} bold`}>Total:</span>
                                        <p className={`${styles['total-price-amount']} bold`}>1,239.39₾</p>
                                        <button className={`${styles['add-to-cart']} bold`}>Add to cart</button>
                                    </div>
                                    <div className={styles['donation-container']}>
                                        <p className={styles['donation-title']}>Donation</p>
                                        <div className={styles['donation-wrapper']}> <span className={`${styles['donation-percents']} bold`}>20%</span> <span className={styles['donation-percent-text']}>of this product amount supports for</span></div>
                                        <div className={styles['donation-image']} style={{backgroundImage: `url('${process.env.REACT_APP_BASIC_URL}/storage/53/300x300.jpeg')`}}></div>
                                        <p className={`${styles['donation-user-name']} bold`}>Achiko Chikovani</p>
                                        <p className={styles['donation-description']} >On August 23rd my son was shot multiple times in the back by a my</p>
                                    </div>
                                </div>
                                <div className={styles['seller-container']}>
                                    <p className={styles['seller-title']}>Seller</p>
                                    <div className={styles['seller-image']} style={{backgroundImage: `url('${process.env.REACT_APP_BASIC_URL}/storage/53/300x300.jpeg')`}}></div>
                                    <p className={`${styles['seller-user-name']} bold`}>Achiko Chikovani</p>
                                    <p className={styles['seller-description']} >On August 23rd my son was shot multiple times in the back by a my</p>
                                    <button className={`${styles['send-message']} bold`}>Send message</button>
                                    <button className={styles['send-email']}>Applecity@gmail.com</button>
                                    <button className={styles['report-problems']}>Report problem</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['product-detail-tabs']}>
                <div className={styles['tabs-header']}>
                    <span className={activeTab === "product" && styles['active-tab']} onClick={() => setActiveTab("product")}>Product Characteristics</span>
                    <span className={activeTab === "descriptions" && styles['active-tab']} onClick={() => setActiveTab("descriptions")}>Descriptions</span>
                    <span className={activeTab === "policy" && styles['active-tab']} onClick={() => setActiveTab("policy")}>Return Policy</span>
                    <span className={activeTab === "reviews" && styles['active-tab']} onClick={() => setActiveTab("reviews")}>Customer Reviews</span>
                    <span className={activeTab === "questions" && styles['active-tab']} onClick={() => setActiveTab("questions")}>Questions & Answers</span>
                </div>
                {
                    activeTab === "product" && <Characteristics />
                }
                {
                    activeTab === "descriptions" && <Description />
                }
                {
                    activeTab === "reviews" && <Reviews />
                }
                {
                    activeTab === "questions" && <Questions />
                }
            </div>
        </div>
    )
}

export default  ProductPage

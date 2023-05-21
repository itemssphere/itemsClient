import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Categories from "../Components/Categories/Categories";
import Filter from "../Components/Filter/Filter";
import MainSlider from "../Components/MainSlider/MainSlider";
import Product from "../Components/Product/Product";
import SortProducts from "../Components/SortProducts/SortProducts";

const Market = ({typesetter}) => {
    const [products, setProducts] = useState({
        beforeSlider: [],
        afterSlider: []
    })

    const [nextUrl, setNextUrl] = useState("")

    useEffect(() => {
        typesetter(["categories", "filter"])
        axios(`${process.env.REACT_APP_BASIC_URL}/products?limit=16`)
            .then((response) => {
                const rData = response.data.data
                setProducts({
                    beforeSlider: rData.slice(0, 8),
                    afterSlider: rData.slice(9, 16)
                });
                setNextUrl(response.data.next_page_url)
            })
    }, [typesetter])

    const loadMoreButtonHandler = () => {
        axios(nextUrl)
            .then((response) => {
                const rData = response.data.data
                setProducts((prev) => {
                    return {
                        ...prev,
                        afterSlider: prev.afterSlider.concat(rData)
                    }
                });
                setNextUrl(response.data.next_page_url);
                console.log(products)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const [sort, setSort] = useState({
        type: 'all',
        seller: 'all',
        cause: 'all',
        by: null
    })

    return (
        <div className="container">
            <div className="pages-anchor">
                <Link>Home</Link>
                <span>{`>`}</span>
                <Link>Market</Link>
            </div>
            <div className="row" style={{position: "relative", marginTop: "24px"}}>
                <div className="col-md-3 categories-container">
                    <Categories/>
                    <Filter/>
                </div>
                <div className="col-md-9 slider-container market-page-content">
                    <p className="page-titles">Product <span>60,000</span></p>
                    <SortProducts setFormData={setSort} formData={sort}/>
                    <div className="market-content-container">
                        {
                            products.beforeSlider.length > 0 && products.beforeSlider.map((resp) => {
                                return (
                                    <Product discount={resp.discount} market={true} margin="12px" newProduct={resp.new}
                                             data={resp}/>
                                )
                            })
                        }
                        <div style={{width: "100%", marginBottom: "20px"}}>
                            <MainSlider productsPages={true}/>
                        </div>
                        {
                            products.afterSlider.length > 0 && products.beforeSlider.map((resp) => {
                                return (
                                    <Product discount={resp.discount} market={true} margin="12px" newProduct={resp.new}
                                             data={resp}/>
                                )
                            })
                        }
                    </div>
                    <div className="load-more">
                        <button className="load-more-button" onClick={loadMoreButtonHandler}>
                            Load
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Market
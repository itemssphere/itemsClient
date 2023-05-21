import React, {useEffect, useState} from "react";
import Categories from "../Components/Categories/Categories";
import SectionHead from "../Components/Common/SectionHead/SectionHead";
import Hashtags from "../Components/Hashtags/Hashtags";
import MainSlider from "../Components/MainSlider/MainSlider";
import Product from "../Components/Product/Product";
import SimpleSlider from "../Components/SimpleSlider/SimpleSlider";
import SocialProgram from "../Components/MainPage/SocialProgram";
import Organization from "../Components/MainPage/Organization";
import axios from "axios";
import ProductsLoader from "../Loaders/ProductsLoader";

const Main = ({typesetter}) => {
    let loaderElements = [];
    for (let i = 0; i < 6; i++) {
        loaderElements.push(Math.floor(100000 + Math.random() * 900000))
    }
    const nextSliderItem = () => {
    };
    const prevSliderItem = () => {
    };
    const [topOffers, setTopOffers] = useState([]);
    const [sales, setSales] = useState([]);

    useEffect(() => {
        typesetter(["withLogo", "categories"])
        axios.get(`${process.env.REACT_APP_BASIC_URL}/products?limit=6&resource_type=TOP_OFFERS`)
            .then((response) => {
                let responseData = response.data.data;
                setTopOffers(responseData)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.get(`${process.env.REACT_APP_BASIC_URL}/products?limit=6&resource_type=SALE`)
            .then((response) => {
                let responseData = response.data.data;
                setSales(responseData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [typesetter])

    return (
        <div className="container">
            <div className="row" style={{position: "relative", marginTop: "24px"}}>
                <div className="col-md-3 categories-container">
                    <Categories/>
                </div>
                <div className="col-md-9 slider-container">
                    <MainSlider/>
                </div>
            </div>
            <SectionHead
                title="Top offers"
                redirect="/market?type=top-offers"
                margin="52px"
                nextSlide={nextSliderItem}
                prevSlide={prevSliderItem}
            />
            <SimpleSlider padding="18px">
                {topOffers.length > 0 ? (
                    topOffers.map((p) => {
                        return <Product discount={p.discount} margin="12px" newProduct={p.new} data={p}/>
                    })
                ) : (
                    loaderElements.map((loader) => {
                        return <ProductsLoader key={loader}/>
                    })
                )
                }
            </SimpleSlider>
            <SectionHead
                title="Hashtags"
                redirect="/top-offers"
                margin="31px"
                nextSlide={nextSliderItem}
                prevSlide={prevSliderItem}
            />
            <Hashtags padding="24px"/>
            <SocialProgram/>
            <SectionHead
                title="Sales"
                redirect="/market?type=sales"
                margin="95px"
                nextSlide={nextSliderItem}
                prevSlide={prevSliderItem}
            />
            <SimpleSlider padding="18px">
                {sales.length > 0 && (
                    sales.map((p) => {
                        return <Product discount={p.discount} margin="12px" newProduct={p.new} data={p}/>
                    })
                )
                }
            </SimpleSlider>
            <Organization/>
        </div>
    );
};

export default Main;

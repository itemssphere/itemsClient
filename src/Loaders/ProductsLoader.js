import React from "react";
import Skeleton from "../Components/Common/Skeleton/Skeleton";

const ProductsLoader = () => {
    return (
        <div className="skeleton-product-container">
            <div className="product-loader-image"><Skeleton loaderStyles={{width: "100%", height: "100%", borderRadius: "20px, 20px, 0px, 0px"}} /></div>
            <div className="product-loader-description">
                <Skeleton loaderStyles={{width: "77.8px", height: "18px"}} />
                <Skeleton loaderStyles={{width: "85%", height: "11px", margin: "6px 0px 3px 0px"}} />
                <Skeleton loaderStyles={{width: "70%", height: "12px", margin: "0px 0px 8px 0px"}} />
                <div className="skeleton-review">
                    <Skeleton loaderStyles={{width: "12px", height: "12px", borderRadius: "50%", marginRight: "2px"}} />
                    <Skeleton loaderStyles={{width: "12px", height: "12px", borderRadius: "50%", marginRight: "2px"}} />
                    <Skeleton loaderStyles={{width: "12px", height: "12px", borderRadius: "50%", marginRight: "2px"}} />
                    <Skeleton loaderStyles={{width: "12px", height: "12px", borderRadius: "50%", marginRight: "2px"}} />
                    <Skeleton loaderStyles={{width: "12px", height: "12px", borderRadius: "50%", marginRight: "2px"}} />
                    <Skeleton loaderStyles={{width: "60px", height: "12px", marginLeft: "6px"}} />
                </div>
            </div>
        </div>
    )
}

export default ProductsLoader
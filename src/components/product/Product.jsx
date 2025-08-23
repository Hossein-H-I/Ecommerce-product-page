import { useState } from "react";
import ProductSlider from "./ProductSlider";
import ProductLightBox from "./ProductLightBox";


export default function Product({ onSave }){

    const[count, setCount]= useState(0);

    const[boxState, setBoxState]= useState(false);

    const handleOpenBox = ()=>{
        setBoxState(true)
    }
    const handleCloseBox = ()=>{
        setBoxState(false)
    }
    return(
        <main>
            <ProductSlider handleOpenBox={handleOpenBox}/>
            <div className="product-content-box">
                <h1 className="company-name">Sneaker Company</h1>
                <h2 className="product-name">Fall Limited Edition Sneakers</h2>
                <div className="product-info-box">
                    <p className="product-info">
                        These low-profile sneakers are your perfect
                        casual wear companion. Featuring a durable
                        rubber outer sole, they'll withstand everything
                        the weather can offer.
                    </p>
                </div>
                <div className="price-box">
                    <p className="dis-price">$125.00 <span className="dis-value">50%</span></p>
                    <p className="main-price"><del>$250.00</del></p>
                </div>
                <div className="adding-box">
                    <div className="cart-value-box">
                        <button className="minus-btn cart-btn" aria-label="minus button" onClick={() => setCount((prev) => prev - 1 < 0 ? 0 : prev - 1)}>
                            <img src="images/icon-minus.svg" alt="minus" />
                        </button>

                        <span className="cart-value">{count}</span>

                        <button className="plus-btn cart-btn" aria-label="plus button" onClick={() => setCount((prev) => prev + 1)}>
                            <img src="images/icon-plus.svg"/>
                        </button>
                    </div>
                    <div>
                        <button className="add-to-chart-btn" onClick={() => onSave(count)}>
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill-rule="nonzero"/></svg>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            {boxState && <ProductLightBox handleCloseBox={handleCloseBox}/>}
        </main>
    )
}
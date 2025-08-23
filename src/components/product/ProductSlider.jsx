
import { useState } from "react";

export default function ProductSlider ({handleOpenBox}){

    
    const[current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slideImages.length)
    }
    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slideImages.length) % slideImages.length);
    }
    
    const slideImages=[
        "/images/image-product-1.jpg","/images/image-product-2.jpg","/images/image-product-3.jpg","/images/image-product-4.jpg"
    ];

    const thumbnailSlides = slideImages.map((slideImage, index)=>{
        return(
            <div key={index} onClick={() => setCurrent(index)} className={`thumbnail-overly ${index == current ? 'active' : ''}`}>
                <img src={slideImage} className="thumbnail"/>
            </div>
        )
    })
    
    function ThumbnailSliders(){
        return(    
            <div className="thumbnail-box">
                {thumbnailSlides}
            </div>    
        )
    }
    
    return(
    <div className="product-slider-container">
        <div className="slider-box">
            <div className="slide" onClick={handleOpenBox}>
                <img src={slideImages[current]} alt="slider image"/>
            </div>
            <div className="nav-slide-box">
                <button className="nav-slide-btn nav-slide-left" onClick={prevSlide}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
                <button className="nav-slide-btn nav-slide-right" onClick={nextSlide}>
                    <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
            </div>
        </div>
        <div className="thumbnail-container">
            <ThumbnailSliders/>
        </div>
    </div>
    )

}
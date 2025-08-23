
import { useState } from "react";

export default function ProductLightBox ({handleCloseBox}){

    // Slider start  
    const[current, setCurrent] = useState(0); // state for current slide

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slideImages.length)
    }
    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slideImages.length) % slideImages.length);
    }
    // slider end

    const slideImages=[ // slider images
        "/images/image-product-1.jpg","/images/image-product-2.jpg","/images/image-product-3.jpg","/images/image-product-4.jpg"
    ];


    // thumbnail slider start

    const thumbnailSlides = slideImages.map((slideImage, index)=>{
        return(
            <div key={index} onClick={() => setCurrent(index)} className={`thumbnail-overly light-box ${index == current ? 'active' : ''}`}>
                <img src={slideImage} key={index} className={`thumbnail ${index == current ? 'active' : ''}`}/>
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
    // thumbnail slider end


    

    
    return(
    <div className="light-box-overly">

    <div className="product-light-box-container">
        <div className="light-box-slider-box">
            <div className="slide light-box-slide">
                <img src={slideImages[current]} alt="slider image"/>
            </div>
            <div className="nav-light-box">
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
        <button className="close-light-box-btn" onClick={handleCloseBox}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="" fill-rule="evenodd"/></svg>
        </button>
    </div>
    </div>
    )

}
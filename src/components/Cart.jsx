
export default function Cart({ cartValue, removeValue }){

    const singlePrice = 125;
    const totalPrice = cartValue * singlePrice;
    const CartProduct = ()=>{
        return(
            <>
            <div className="cart-product-box">
                <img src="/images/image-product-1.jpg" alt="product image" width={'50px'} className="cart-product-image" />
                <div className="cart-info-box">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>${singlePrice.toFixed(2)} * {cartValue} <span className="cart-total-price">${totalPrice.toFixed(2)}</span></p>
                </div>
                <div className="cart-trash-box">
                    <button className="cart-trash-btn" onClick={removeValue}></button>
                </div>
            </div>
                
            <div className="cart-btn-box">
                <button className="cart-checkout-btn">Checkout</button>
            </div>
            </>
        )
    }
    const EmptyMessage = ()=>{
        return(
            <>
            <div>
                <p className="error-message">your cart is empty</p>
            </div>
            </>
        )
    }
    

    return(
        <section className="cart-section">
            <div className="cart-heading-box">
                <span className="cart-heading">Cart</span>
            </div>
            <div className="cart-product-container">
                {cartValue == 0 ? <EmptyMessage/> : <CartProduct/>}
            </div>
        </section>
    )
}
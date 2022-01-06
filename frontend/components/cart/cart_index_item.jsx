import React from "react";

const CartIndexItem = (props) => {
    const { product, cartItem, deleteCartItem } = props;
    return(
        <div className="cart-item">
            <div className="cart-img-box">
                <img src={product.imageURL} />
            </div>
            <div className="cart-item-details">
                <h2>{product.title}</h2>
            <button onClick={e=>deleteCartItem(cartItem.id)}>Delete</button>
            </div>
            <div className="cart-item-price">
                <span>${product.price.toFixed(2)}</span>
            </div>
        </div>
    )
} 

export default CartIndexItem;
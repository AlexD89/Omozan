import React from "react";

const CartIndexItem = (props) => {
    const { cartItem, deleteCartItem } = props;
    return(
        <li>
            {/* <h1>Hello</h1> */}
            <h1>item {cartItem.id}</h1>
            <p>buyer id: {cartItem.buyer_id}</p>
            <p>product id: {cartItem.product_id}</p>
            <p>quantity: {cartItem.product_qty}</p>
            <button onClick={e=>deleteCartItem(cartItem.id)}>Delete</button>
        </li>
    )
} 

export default CartIndexItem;
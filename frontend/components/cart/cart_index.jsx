import React from "react";
import CartIndexItem from "./cart_index_item";


class CartIndex extends React.Component {

    render(){
        return(
            <div className="cart-page">
                <section className="cart-index">
                    <CartIndexItem />
                </section>
                <aside className="checkout-box"></aside>
            </div>
        )
    }
}

export default CartIndex;
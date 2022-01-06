import React from "react";
import CartIndexItem from "./cart_index_item";


class CartIndex extends React.Component {
    componentDidMount(){
        this.props.requestCartItems()
    }

    render(){
        if (!this.props.cartItems) return null;
        return(
            <div className="cart-page">
                <section className="cart-index">
                    <ul>
                        {this.props.cartItems.map( (cartItem, i) => (
                            <CartIndexItem 
                                cartItem={cartItem}
                                deleteCartItem={this.props.deleteCartItem}
                                key={i}/>
                        ))}
                    </ul>
                </section>
                <aside className="checkout-box"></aside>
            </div>
        )
    }
}

export default CartIndex;
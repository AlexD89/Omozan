import React from "react";
import CartIndexItem from "./cart_index_item";


class CartIndex extends React.Component {
    componentDidMount(){
        this.props.requestCartItems();
        this.props.requestAllProducts();
    }

    render(){
        const { products, cartItems, deleteCartItem} = this.props;
        if (!this.props.cartItems || Object.values(products).length < 2) return null;
        return(
            <div className="cart-page">
                <section className="cart-index">
                    <ul>
                        {cartItems.map( (cartItem, i) => (
                            <CartIndexItem 
                                cartItem={cartItem}
                                product={products[cartItem.product_id]}
                                deleteCartItem={deleteCartItem}
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
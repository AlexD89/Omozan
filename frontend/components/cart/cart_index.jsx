import React from "react";
import CartIndexItem from "./cart_index_item";


class CartIndex extends React.Component {
    componentDidMount(){
        this.props.requestCartItems();
        this.props.requestAllProducts();
    }

    itemsCounter = (arr) => {
        let total = 0;
        arr.forEach(obj => total += parseInt(obj.product_qty))
        return total;
    }

    totalCounter = (arr) => {
        let total = 0;
        arr.forEach(obj => total += (
            parseFloat(obj.product_qty) * parseFloat(this.props.products[obj.product_id].price)
        ))
        return total.toFixed(2);
    }


    render(){
        const { products, cartItems, deleteCartItem, updateCartItem} = this.props;
        if (!this.props.cartItems || Object.values(products).length < 2) return null;
        console.log(this.totalCounter(cartItems));

        
        return(
            <div className="cart-page">
                <section className="cart-index">
                    <ul>
                        {cartItems.map( (cartItem, i) => (
                            <CartIndexItem 
                                cartItem={cartItem}
                                product={products[cartItem.product_id]}
                                deleteCartItem={deleteCartItem}
                                updateCartItem={updateCartItem}
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
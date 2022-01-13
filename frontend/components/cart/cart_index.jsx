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

    handleCheckout = (e) => {
        e.preventDefault();
        const products = this.props.products;
        const cartItems = this.props.cartItems.map(item => item);
        this.props.cartItems.forEach(item => this.props.deleteCartItem(item.id))
        this.props.history.push({
            pathname: "/checkout", 
            state: {
                products: products, 
                cartItems: cartItems
        }})
    }


    render(){
        const { products, cartItems, deleteCartItem, updateCartItem} = this.props;
        if (!this.props.cartItems || Object.values(products).length < 2) return null;
        
        return(
            <div className="cart-page">
                <section className="cart-index">
                    <div className="cart-index-title">
                        <h2>Shopping Cart</h2>
                        <p>Price</p>
                    </div>
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
                    <div className="cart-index-sub">
                        <h3>
                            Subtotal ({this.itemsCounter(cartItems)} items): 
                            <span>${this.totalCounter(cartItems)}</span>
                        </h3>
                    </div>
                </section>
                <aside className="checkout-box">
                    <h3>
                        Subtotal ({this.itemsCounter(cartItems)} items):
                        <span>${this.totalCounter(cartItems)}</span>
                    </h3>
                    <label>    
                        <input 
                            type="checkbox" 
                            id="gift-checkbox"
                            />
                        This order contains a gift
                    </label>
                    <button onClick={this.handleCheckout}>Proceed to checkout</button>
                </aside>
            </div>
        )
    }
}

export default CartIndex;
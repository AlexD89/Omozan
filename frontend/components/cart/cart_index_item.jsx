import React from "react";
import { Link } from "react-router-dom"


class CartIndexItem extends React.Component {

    handleQty = (e) => {
        const newQty =  parseInt(e.currentTarget.value);
        const newCartItem = this.props.cartItem;
        newCartItem.product_qty = newQty;
        this.props.updateCartItem(newCartItem);
    }

    render(){
        const { product, cartItem, deleteCartItem } = this.props;
        const range = [1,2,3,4,5,6,7,8,9,10]
        
        return(
            <div className="cart-item">
                <div className="cart-img-box">
                    <Link to={`/products/${product.id}`}>
                        <img src={product.imageURL} />
                    </Link>
                </div>
                <div className="cart-item-details">
                    <Link to={`/products/${product.id}`}>
                        <h2>{product.title}</h2>
                    </Link>
                    <span>In Stock</span> 
                    <br />
                    <br />
                    <select defaultValue={cartItem.product_qty} onChange={this.handleQty}>
                        <option value={cartItem.product_qty}>Qty: {cartItem.product_qty}</option>
                        {range.map(num => {
                            return <option 
                                key={num}
                                value={num}>{num}</option>
                        })}
                    </select>
                    <span 
                        className="delete-link" 
                        onClick={e=>deleteCartItem(cartItem.id)}>Delete</span>
                </div>
                <div className="cart-item-price">
                    <span>${product.price.toFixed(2)}</span>
                </div>
            </div>
        )
    }
} 

export default CartIndexItem;
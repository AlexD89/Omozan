import React from "react";


class CartIndexItem extends React.Component {

    handleQty = (e) => {
        const newQty =  parseInt(e.currentTarget.value);
        const newCartItem = this.props.cartItem;
        newCartItem.product_qty = newQty;
        this.props.updateCartItem(newCartItem);
    }

    render(){
        const { product, cartItem, deleteCartItem, updateCartItem } = this.props;
        const range = [1,2,3,4,5,6,7,8,9,10]
        
        return(
            <div className="cart-item">
                <div className="cart-img-box">
                    <img src={product.imageURL} />
                </div>
                <div className="cart-item-details">
                    <h2>{product.title}</h2>
                    <br />
                    <select defaultValue={cartItem.product_qty} onChange={this.handleQty}>
                        <option value={cartItem.product_qty}>Qty: {cartItem.product_qty}</option>
                        {range.map(num => {
                            return <option 
                                key={num}
                                value={num}>{num}</option>
                        })}
                    </select>
                    <br />
                    <button onClick={e=>deleteCartItem(cartItem.id)}>Delete</button>
                </div>
                <div className="cart-item-price">
                    <span>${product.price.toFixed(2)}</span>
                </div>
            </div>
        )
    }
} 

export default CartIndexItem;
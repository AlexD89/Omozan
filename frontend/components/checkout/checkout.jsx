import React from "react";

class Checkout extends React.Component {

    render(){
        if(!this.props.location.state) {
            return (
            <div className="empty-cart">
                <img src={window.empty_cartURL}/>
            </div>
        )}
        const { products , cartItems } = this.props.location.state
        return(
            <div>
                CHECKOUT!!!
            </div>
        )
    }
}

export default Checkout;
import React from "react";
import { FaCheckCircle } from "react-icons/fa"

class Checkout extends React.Component {

    render(){
        // if(!this.props.location.state) {
        //     return (
        //     <div className="empty-cart">
        //         <img src={window.empty_cartURL}/>
        //     </div>
        // )}
        const { currentUser } = this.props
        return(
            <div className="checkout-page">
                <div className="checkout-msg-box">
                    <h2><FaCheckCircle />  Order placed, thanks!</h2>
                    <p>Confirmation will be sent to your email</p>
                    <p><b>Shipping to {currentUser.username}</b>, 20 W 34th St, NEW YORK, NY, 10001</p>
                    <div className="estimated-delivery">
                        <p>Jan. 1 - Dec. 31</p>
                        <p>Estimated delivery</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Checkout;
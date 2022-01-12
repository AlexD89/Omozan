import React from "react";
import { Link } from "react-router-dom";
import SerchBarContainer from "../searchbar/serchbar_container";


class Navbar extends React.Component {

    componentDidMount(){
        if( this.props.currentUser ){
            this.props.requestCartItems()
        }
    }

    itemsCounter = (arr) => {
        let total = 0;
        arr.forEach(obj => total += parseInt(obj.product_qty))
        return total;
    }

    display = () => {
        const { currentUser, logout } = this.props
        if (currentUser){
            return(
                <div onClick={e=>logout()}>
                    {`Hello, ${currentUser.username}`}
                    <br />
                    <span>
                        Logout
                    </span>
                </div>
            )
        } else {
            return (
                <div>
                    Hello, Sign in
                    <br />
                    <span>
                        Account
                    </span>
                </div>
            )
        }
    }

    render(){
        return(
            <header>
                <div className="nav-bar">
                    <Link to="/" >
                        <div className="header-logo">
                            <img src={window.logoURL} alt="logo" />
                        </div>
                    </Link>
                    <div>
                        <SerchBarContainer />
                    </div>
                    <Link to="/login" className="login-button-link">
                        <div className="login-button">
                            {this.display()}
                        </div>
                    </Link>
                    <Link to="/cart">
                        <div className="cart-button">
                            <div className={this.itemsCounter(this.props.count) > 9 ? "small-badge" : "large-badge"}>
                                {this.itemsCounter(this.props.count)}
                            </div>
                            <img src={window.cartURL} alt="cart" className="cart-image"/>
                            Cart
                        </div>
                    </Link>
                </div>
                <div className="categories">
                    <ul>
                        <Link to="/departments/all"><li>All</li></Link>
                        <Link to="/departments/electronics"><li>Electronics</li></Link>
                        <Link to="/departments/computers"><li>Computers</li></Link>
                        <Link to="/departments/furniture"><li>Furniture</li></Link>
                        <Link to="/departments/bed_bath"><li>Bed {"&"} Bath</li></Link>
                        <Link to="/departments/cellphones"><li>Cellphones</li></Link>
                        <Link to="/departments/pet_supplies"><li>Pet Supplies</li></Link>
                        <Link to="/departments/kitchen"><li>Kitchen</li></Link>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navbar;
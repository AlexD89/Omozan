import React from "react";
import { Link } from "react-router-dom";
import SerchBarContainer from "../searchbar/serchbar_container";
import logoImg from "/app/assets/images/logo.png"
import cartImg from "/app/assets/images/cart.png"

class Navbar extends React.Component {

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
                        Acount
                    </span>
                </div>
            )
        }
    }

    render(){
        return(
            <header>
                <div className="nav-bar">
                    <div className="header-logo">
                        <Link to="/" >
                            <img src={logoImg} alt="logo" />
                        </Link>
                    </div>
                    <div>
                        <SerchBarContainer />
                    </div>
                    <Link to="/login" className="login-button-link">
                        <div className="login-button">
                            {this.display()}
                        </div>
                    </Link>
                    <div className="cart-button">
                        <img src={cartImg} alt="cart" className="cart-image"/>
                        Cart
                    </div>
                </div>
                <div className="categories">
                    <ul>
                        <li>All</li>
                        <li>Computers</li>
                        <li>Electronics</li>
                        <li>Amazon Home</li>
                        <li>Books</li>
                        <li>Movies</li>
                        <li>Pet Supplies</li>
                        <li>Home Improvment</li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navbar;
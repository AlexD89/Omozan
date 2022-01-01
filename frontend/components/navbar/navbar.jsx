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
                    {/* <button onClick={e=>logout()}> */}
                        {`Hello, ${currentUser.username}`}
                        <br />
                        Logout
                    {/* </button> */}
                </div>
            )
        } else {
            return (
                <div>
                    Hello, Sign in
                    <br />
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
            )
        }
    }

    render(){
        return(
            <header>
                <div className="nav-bar">
                    <img src={logoImg} alt="logo" className="header-logo" />
                    <div>
                        <SerchBarContainer />
                    </div>
                    <div className="login-button">
                        {this.display()}
                    </div>
                    <div>
                        <img src={cartImg} alt="cart" className="cart-image"/>
                        Cart
                    </div>
                </div>
                <div className="categories">
                    <ul>
                        <li>Computers</li>
                        <li>Books</li>
                        <li>Movies</li>
                        <li>Home Improvment</li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Navbar;
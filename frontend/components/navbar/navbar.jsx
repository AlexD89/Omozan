import React from "react";
import { Link } from "react-router-dom";
import SerchBarContainer from "../searchbar/serchbar_container";


class Navbar extends React.Component {

    componentDidMount(){
        if( this.props.currentUser ){
            this.props.requestCartItems()
        }
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
                            <img src={window.logoURL} alt="logo" />
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
                    <Link to="/cart">
                        <div className="cart-button">
                            <div className={this.props.count.length > 9 ? "small-badge" : "large-badge"}>
                                {this.props.count.length}
                            </div>
                            <img src={window.cartURL} alt="cart" className="cart-image"/>
                            Cart
                        </div>
                    </Link>
                </div>
                <div className="categories">
                    <ul>
                        <li><Link to="/products">All</Link></li>
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
import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {

    display = () => {
        const { currentUser, logout } = this.props
        if (currentUser){
            return(
                <div>
                    {currentUser.username}
                    <button onClick={e=>logout()}>Logout</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                {this.display()}
            </div>
        )
    }
}

export default Navbar;
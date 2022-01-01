import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.processForm(this.state);
    } 

    render(){
        const { errors, formType } = this.props;
        return(
            <div className="signup-form">
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" alt="" />
                </Link>
                <br />
                <div className="form-box">
                    <form onSubmit={this.handleSubmit}>
                        {formType === "Signup" ? (
                            <label>Your name
                                <br />
                                <input
                                    type="text"
                                    onChange={(e) => this.setState({ username: e.currentTarget.value })} />
                                <br />
                            </label>) : ("")
                        }
                        <label>Email
                            <br />
                            <input 
                                type="text"
                                onChange={(e) => this.setState({email: e.currentTarget.value})} />
                        </label>
                        <br />
                        <label>Password
                            <br />
                            <input
                                type="password"
                                onChange={(e) => this.setState({ password: e.currentTarget.value })}
                                placeholder={formType === "Login" ? "" : "At least 6 characters"} />
                        </label>
                        <br />
                        <input 
                            type="submit" 
                            value={formType === "Login" ? "Sign-in" : "Create your Amazon account"} />
                    </form>
                    <br />
                    {errors}
                </div>
                {formType === "Login" ? (
                    <Link to="/signup">
                        <button>Create your Amazon Account</button>
                    </Link>
                ) : (
                    <Link to="login">
                        <button>Sign-in</button>
                    </Link>
                )}
            </div>
        )
    }
}

export default SessionForm;
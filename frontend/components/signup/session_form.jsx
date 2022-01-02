import React from "react";
import { Link } from "react-router-dom";
import logoImg from "/app/assets/images/dark-logo.png"

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
    
    handleDemoUser = (e) => {
        e.preventDefault()
        const demoUser = {
            username: "Demo User",
            email: "demo_user@gmail.com",
            password: "demo_user_3000"
        }
        this.props.processForm(demoUser);
    }

    render(){
        const { errors, formType } = this.props;
        return(
            <div className="signup-form">
                <Link to="/">
                    <img src={logoImg} alt="logo" />
                </Link>
                <br />
                <div className="form-box">
                    <h1>{formType === "login" ? "Sign-in" : "Create account"}</h1>
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
                    {formType === "Login" ? (
                        <button onClick={this.handleDemoUser}>Demo User</button>
                    ) : ("")}
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
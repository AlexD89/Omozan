import React from "react";
import { Link, useHistory } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    componentWillUnmount(){
        this.props.clearErrors()
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
            password: "demo_user_3000",
        }
        this.props.processForm(demoUser);
    }

    renderErrors = () => (
        <ul>
            {this.props.errors.map((error, i) => (
                <li key={i}>{error}</li>
            ))}
        </ul>
    )

    render(){
        const { errors, formType } = this.props;
        return(
            <div className="signup-form">
                <Link to="/">
                    <img src={window.darkLogoURL} />
                </Link>
                <br />
                <div className="form-box">
                    <h1>{formType === "Login" ? "Sign-in" : "Create account"}</h1>
                    <form onSubmit={this.handleSubmit}>
                        {formType === "Signup" ? (
                            <label><span>Your name</span>
                                <br />
                                <input
                                    type="text"
                                    onChange={(e) => this.setState({ username: e.currentTarget.value })} />
                                <br />
                            </label>) : ("")
                        }
                        <label><span>Email</span>
                            <br />
                            <input 
                                type="text"
                                onChange={(e) => this.setState({email: e.currentTarget.value})} />
                        </label>
                        <br />
                        <label><span>Password</span>
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
                    {this.renderErrors()}
                </div>
                <div className="divider">
                    {formType === "Login" ? (
                            <h5> New to Amazon ?</h5>
                        ) : (
                            <h5> Have an account ?</h5>
                        )}
                </div>
                {formType === "Login" ? (
                    <Link to="/signup" >
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
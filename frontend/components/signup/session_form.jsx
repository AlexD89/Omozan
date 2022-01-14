import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            password_confirmation: ""
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

    renderErrors = (field) => {
        switch (field) {
            case "username":
                if (this.props.errors.includes("Username can't be blank")) {
                    return <p className="inline-error">❗️ Username can't be blank</p>
                } else return ""
            case "email":
                if (this.props.errors.includes("Wrong email/password") ||
                    this.props.errors.includes("Email can't be blank")) {
                    // this.setState({email: ""})
                    return <p className="inline-error">
                        {this.props.formType === "Login" ? 
                            "❗️ Wrong email/password" : "❗️ Email can't be blank"}
                    </p>
                } else return ""
            case "password":
                if (this.props.errors.includes("Wrong email/password") ||
                    this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
                    // this.setState({password: ""})
                    return <p className="inline-error">
                        {this.props.formType === "Login" ? 
                            "❗️ Wrong email/password" : "❗️ Password is too short (minimum is 6 characters)"}
                    </p>
                } else return ""
            case "password-confirm":
                if (this.props.errors.includes("Password confirmation doesn't match Password")) {
                    return <p className="inline-error">
                        ❗️ Password confirmation doesn't match Password
                    </p>
                } else return ""
            default:
                return ""
        }
    }

    redStyle = (field) => {
        switch (field){
            case "username":
                if (this.props.errors.includes("Username can't be blank")){
                    return "red-field"
                } else return ""
            case "email":
                if (this.props.errors.includes("Wrong email/password") ||
                    this.props.errors.includes("Email can't be blank")) {
                        return "red-field"
                } else return ""
            case "password":
                if (this.props.errors.includes("Wrong email/password") || 
                    this.props.errors.includes("Password is too short (minimum is 6 characters)")){
                    return "red-field"
                } else return ""
            case "password-confirm":
                if (this.props.errors.includes("Password confirmation doesn't match Password") ||
                    (this.state.password_confirmation.length === 0 &&
                    this.props.errors.includes("Password is too short (minimum is 6 characters)"))){
                    return "red-field"
                } else return ""
            default:
                return ""
        }
    }

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
                        <input type="hidden" name="authenticity_token" value="<%= form_authenticity_token %>"></input>
                        {formType === "Signup" ? (
                            <label><span>Your name</span>
                                <br />
                                <input
                                    className={this.redStyle("username")}
                                    type="text"
                                    onChange={(e) => this.setState({ username: e.currentTarget.value })} />
                                <br />
                            </label>) : ("")
                        }
                        {this.renderErrors("username")}
                        <label><span>Email</span>
                            <input
                                className={this.redStyle("email")}
                                type="text"
                                onChange={(e) => this.setState({email: e.currentTarget.value})} />
                        </label>
                        {this.renderErrors("email")}
                        <br />
                        <label><span>Password</span>
                            <br />
                            <input
                                type="password"
                                className={this.redStyle("password")}
                                onChange={(e) => this.setState({ password: e.currentTarget.value })}
                                placeholder={formType === "Login" ? "" : "At least 6 characters"} />
                        </label>
                        {this.renderErrors("password")}
                        <br />
                        {formType === "Signup" ? (
                            <label><span>Confirm Password</span>
                                <br />
                                <input
                                    className={this.redStyle("password-confirm")}
                                    type="password"
                                    onChange={(e) => this.setState({ password_confirmation: e.currentTarget.value })} />
                                <br />
                            </label>) : ("")
                        }
                        {this.renderErrors("password-confirm")}
                        <input 
                            type="submit" 
                            value={formType === "Login" ? "Sign-in" : "Create your Amazon account"} />
                    </form>
                    {formType === "Login" ? (
                        <button onClick={this.handleDemoUser}>Demo User</button>
                    ) : ("")}
                    <br />
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
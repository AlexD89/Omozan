import React from "react";
import logo from "/app/assets/images/logo.png"

const Footer = () => {
    return (
        <div className="footer">
            <a href="#">
                <div className="back-to-top">
                    <h5>Back to top</h5>
                </div>
            </a>
            <div className="footer-links">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Footer;
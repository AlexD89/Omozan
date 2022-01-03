import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <a href="#">
                <div className="back-to-top">
                    <h5>Back to top</h5>
                </div>
            </a>
            <div className="footer-links">
                <img src={window.logoURL} alt="logo" />
            </div>
        </div>
    )
}

export default Footer;
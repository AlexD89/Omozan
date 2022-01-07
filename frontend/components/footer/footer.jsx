import React from "react";

const Footer = () => {
    const scrollUp = e => {
        e.preventDefault();
        window.scroll(0,0);
    }

    return (
        <div className="footer">
            <a href="" onClick={scrollUp}>
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
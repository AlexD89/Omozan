import React from "react";
import { Link } from "react-router-dom";

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
                <a href="https://www.linkedin.com/in/alexander-dziuba-0426a0122" target="_blank">
                    <img src={window.linkedin_picURL}/>

                </a>
                <a href="https://github.com/AlexD89" target="_blank">
                    <img src={window.github_picURL}/>
                </a>
                <a href="https://angel.co/u/alex-dziuba" target="_blank">
                    <img src={window.angellist_picURL}/>
                </a>
                <a href="https://alexd89.github.io/Portfolio/" target="_blank">
                    <img src={window.portfolio_picURL}/>
                </a>
            </div>
            <div className="footer-logo">
                <img src={window.logoURL} alt="logo" />
            </div>
        </div>
    )
}

export default Footer;
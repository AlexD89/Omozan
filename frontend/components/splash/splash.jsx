import React from "react";
import { Link } from "react-router-dom";
import splashBG from "/app/assets/images/splash-logo.jpg"
import img1 from "/app/assets/images/splash-tabs/img1.jpg"
import img2 from "/app/assets/images/splash-tabs/img2.jpg"
import img3 from "/app/assets/images/splash-tabs/img3.jpg"
import img4 from "/app/assets/images/splash-tabs/img4.jpg"

class Splash extends React.Component {
    render(){
        return(
            <div className="splah">
                <img src={splashBG} className="splash-background" />
                <ul className="splash-tabs">
                    <div className="tab-1">
                        <h3>Multicolor smart lamp for kids</h3>
                        <div className="img-box">
                            <img src={img1} alt="" />
                        </div>
                        <Link to="/">Shop Echo glow</Link>
                    </div>
                    <div className="tab-2">
                        <h3>Add voice control to any outlet</h3>
                        <div className="img-box">
                            <img src={img2} alt="" />
                        </div>
                        <Link to="/">Shop Amazon smart plug</Link>
                    </div>
                    <div className="tab-3">
                        <h3>Add voice control to any outlet</h3>
                        <div className="img-box">
                            <img src={img3} alt="" />
                        </div>
                        <Link to="/">Shop Amazon smart plug</Link>
                    </div>
                    <div className="tab-4">
                        <h3>Add voice control to any outlet</h3>
                        <div className="img-box">
                            <img src={img4} alt="" />
                        </div>
                        <Link to="/">Shop Amazon smart plug</Link>
                    </div>
                    <div className="tab-5"></div>
                    <div className="tab-6"></div>
                    <div className="tab-7"></div>
                    <div className="tab-8"></div>
                </ul>
            </div>
        )
    }
}

export default Splash;
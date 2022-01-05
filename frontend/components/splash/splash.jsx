import React from "react";
import { Link } from "react-router-dom";
import splashBG from "/app/assets/images/splash-logo.jpg"
import img1 from "/app/assets/images/splash-tabs/img1.jpg"
import img2 from "/app/assets/images/splash-tabs/img2.jpg"
import img3 from "/app/assets/images/splash-tabs/img3.jpg"
import img4 from "/app/assets/images/splash-tabs/img4.jpg"
import img5 from "/app/assets/images/splash-tabs/img5.jpg"
import img6 from "/app/assets/images/splash-tabs/img6.jpg"
import img7 from "/app/assets/images/splash-tabs/img7.jpg"
import img8 from "/app/assets/images/splash-tabs/img8.jpg"

class Splash extends React.Component {
    render(){
        return(
            <div className="splah">
                <img src={splashBG} className="splash-background" />
                <ul className="splash-tabs">
                    <div className="splash-tab">
                        <h3>Multicolor smart lamp for kids</h3>
                        <div className="img-box">
                            <img src={img1} alt="" />
                        </div>
                        <Link to="/products/7">Shop Echo glow</Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Add voice control to any outlet</h3>
                        <div className="img-box">
                            <img src={img2} alt="" />
                        </div>
                        <Link to="/products/8">Shop Amazon smart plug</Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Macbook Air M1 2020</h3>
                        <div className="img-box">
                            <img src={img3} alt="" />
                        </div>
                        <Link to="/products/1">Shop Apple Macbook</Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Atomic Habits by James CLear</h3>
                        <div className="img-box">
                            <img src={img4} alt="" />
                        </div>
                        <Link to="/products/2">Shop Amazon Books</Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Spider-Man: No Way Home</h3>
                        <div className="img-box">
                            <img src={img5} alt="" />
                        </div>
                        <Link to="/products/5">Shop Spider-Man movie</Link>
                    </div>
                    <div className="splash-tab">
                        <h3>New Bose QuietComfort 45</h3>
                        <div className="img-box">
                            <img src={img6} alt="" />
                        </div>
                        <Link to="/products/3">Shop Bose Headphones</Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Brushless motor of cordless drill combo kit</h3>
                        <div className="img-box">
                            <img src={img7} alt="" />
                        </div>
                        <Link to="/products/4">Shop DEWALT tool kit </Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Adjustable dumbels for home workout</h3>
                        <div className="img-box">
                            <img src={img8} alt="" />
                        </div>
                        <Link to="/products/6">Shop Bowflex Dumbbell</Link>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Splash;
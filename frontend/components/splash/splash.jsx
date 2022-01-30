import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
    componentDidMount(){
        this.props.requestAllProducts()
    }
    
    componentWillUnmount(){
        this.props.clearProducts()
    }

    pickSplash = () => {
        const arr = []
        const products = Object.values(this.props.products)
        for(let i=0; i<56; i+=7){
            arr.push(products[i])
        }
        return arr;
    }


    render(){
        if (this.pickSplash().some(prod => prod === undefined)) return <div className="splash"></div>;
        const productArr = this.pickSplash();
        return(
            <div className="splah">
                <img src={window.splashLogoURL} className="splash-background" />
                <ul className="splash-tabs">
                    <div className="splash-tab">
                        <h3>Macbook Air M1 2020</h3>
                        <Link to={`/products/${productArr[0].id}`}>
                            <div className="img-box">
                            <img src={macbook_picURL} alt="macbook" />
                            </div>
                        </Link>
                        <Link to={`/products/${productArr[0].id}`}>
                            Shop Apple MacBook
                        </Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Vibe All-in-one Computer Real-time Interactive Whiteboard</h3>
                        <Link to={`/products/${productArr[1].id}`}>
                            <div className="img-box">
                                <img src={vibe_picURL} alt="vibe" />
                            </div>
                        </Link>
                        <Link to={`/products/${productArr[1].id}`}>
                            Shop Vibe
                        </Link>
                    </div>
                    <div className="splash-tab">
                        <h3>WLIVE 2 Drawer Dresser</h3>
                        <Link to={`/products/${productArr[2].id}`}>
                            <div className="img-box">
                                <img src={wlive_picURL} alt="wLive" />
                            </div>
                        </Link>
                        <Link to={`/products/${productArr[2].id}`}>
                            Shop WLIVE furniture
                        </Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Meow Mix Original Choice </h3>
                        <Link to={`/products/${productArr[3].id}`}>
                            <div className="img-box">
                                <img src={meow_picURL} alt="meow" />
                            </div>
                        </Link>
                        <Link to={`/products/${productArr[3].id}`}>
                            Shop Cats food
                        </Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Moto G Power</h3>
                        <Link to={`/products/${productArr[4].id}`}>
                            <div className="img-box">
                                <img src={motog_picURL} alt="motog" />
                            </div>
                        </Link>
                        <Link to={`/products/${productArr[4].id}`}>
                            Shop Mototrola cellphone
                        </Link>
                    </div>
                    <div className="splash-tab">
                        <h3>iMucci Pink</h3>
                        <Link to={`/products/${productArr[5].id}`}>
                            <div className="img-box">
                                <img src={imucci_picURL} alt="imucci" />
                            </div>
                        </Link>
                        <Link to={`/products/${productArr[5].id}`}>
                            Shop Bathroom Accessories Set
                        </Link>
                    </div>
                    <div className="splash-tab">
                        <h3>Ball Regular Mouth</h3>
                        <Link to={`/products/${productArr[6].id}`}>
                            <div className="img-box">
                                <img src={ball_picURL} alt="ball-regular" />
                            </div>
                        </Link>
                        <Link to={`/products/${productArr[6].id}`}>
                            Mason Jar with Lids  
                        </Link>
                    </div>
                    <div className="splash-tab">
                        <h3>New Bose SoundLink Flex</h3>
                        <Link to={`/products/${productArr[7].id}`}>
                            <div className="img-box">
                                <img src={soundlink_picURL} alt="soundlink" />
                            </div>
                        </Link>
                        <Link to={`/products/${productArr[7].id}`}>
                            Shop Bose Speakers
                        </Link>
                    </div>
                </ul>
            </div>
        )
    }
}

export default Splash;
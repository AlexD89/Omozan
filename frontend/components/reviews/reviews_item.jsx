import React from "react";
import { FaCheckCircle } from "react-icons/fa"


const ReviewItem = (props) => {
    
    const handleHelpful = e => {
        e.currentTarget.className="hidden"
        $(`.helpful-${props.review.id}`).toggle();
    }

    const handleAbuse = () => {
        window.open(window.report_abuseURL, 
                        "Report Content is inapropriate", 
                        "left=0,top=0,width=640,height=480")
    }



    const {review} = props;
    return(
        <div className="single-review">
            <div className="avatar-img-box">
                <img src={window.avatarURL} alt="avatar" />
                {review.author}
            </div>
            <div className="review-title">
                <div className={`temp num-${review.score}`}></div>    
                <h3>{review.title}</h3>
            </div>
            <h4>Verified Purcahse</h4>
            <p>{review.body}</p>
            <div className="helpful-box">
                <button onClick={e => handleHelpful(e)}>Helpful</button> 
                <div className={`helpful-${review.id} green hidden`}><FaCheckCircle /> </div><p className={`helpful-${review.id} green hidden`} >Thank you for your feedback.</p> 
                <p>|<span onClick={handleAbuse}>Report abuse</span></p>
            </div>
        </div>
    )
}

export default ReviewItem;
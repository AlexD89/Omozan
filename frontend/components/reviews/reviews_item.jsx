import React from "react";

const ReviewItem = (props) => {
    const {review} = props;
    return(
        <div className="single-review">
            <div className="avatar-img-box">
                <img src={window.avatarURL} alt="avatar" />
                {review.author}
            </div>
            <div className="review-title">
                <div className={`temp num-${review.score}`}></div>    
                {/* <img src={window.starsURL} alt="score" /> */}
                {review.title}
            </div>
            <p>Verified Purcahse</p>
            {review.body}
            <br />
            <button>Helpful</button> | Report abuse
        </div>
    )
}

export default ReviewItem;
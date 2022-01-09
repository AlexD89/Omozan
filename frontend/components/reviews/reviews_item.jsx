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
                <h3>{review.title}</h3>
            </div>
            <h4>Verified Purcahse</h4>
            <p>{review.body}</p>
            <button>Helpful</button> | Report abuse
        </div>
    )
}

export default ReviewItem;
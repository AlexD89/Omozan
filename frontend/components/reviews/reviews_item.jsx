import React from "react";

const ReviewItem = (props) => {

    const avgScore = score => {
        switch (score) {
            case (score > 0 && score < 0.5):
                return "avg-1";
            case (score >= 0.5 && score < 1):
                return "avg-2";
            case (score >= 1 && score < 1.5):
                return "avg-3";
            case (score >= 1.5 && score < 2):
                return "avg-4";
            case (score >= 2 && score < 2.5):
                return "avg-5";
            case (score >= 2.5 && score < 3):
                return "avg-6";
            case (score >= 3 && score < 3.5):
                return "avg-7";
            case (score >= 3.5 && score < 4):
                return "avg-8";
            case (score >= 4 && score < 4.3):
                return "avg-9";
            case (score >= 4.3 && score < 4.8):
                return "avg-10";
            case (score >= 4.8 && score <= 5):
                return "avg-11";
            default:
                return "avg-0";
        }
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
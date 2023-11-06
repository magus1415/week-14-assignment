import ReviewList from "./ReviewList";
import React from 'react'

function ReviewForm() {
    return (
        <>
            <ReviewList description='temporary comments' /><br/>

            <form className="App-header">
                <label htmlFor="form">Review form:</label><br />
                <input type="form" id="form" name="form" placeholder="Leave review..." /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default ReviewForm

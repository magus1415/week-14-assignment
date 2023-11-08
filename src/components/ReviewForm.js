import React, { useState } from 'react'


export default function ReviewForm() {

    const [review, setReview] = useState('');
    const [comments, setComments] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, review]); // Push the review into the comments array
        setReview(''); // Reset the review input field
    }


    return (
        <>
            {/* <ReviewList description='temporary comments' /><br /> */}

            {comments}
            <div className="card w-50 mx-auto bg-secondary text-white">

                <form onSubmit={handleSubmit}>
                    <label className="mb-2 mt-2 fs-4">Review Form: </label> <br />
                    <input
                        type="text"
                        required
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    /><br />
                    <button className="btn btn-primary mt-2">Submit</button>
                </form>


            </div>
        </>
    )
}
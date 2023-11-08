import React from "react"
import Stars from './Stars';
import ReviewForm from './ReviewForm';



export default class Movie extends React.Component {
    constructor(props) {
// props is accessing our object through props
        super();

        // console.log('test', props.movieData)
        //  console.log('test2', props.movieData.title)
        this.movieName = props.movieData.title;
        this.movieImg = props.movieData.image;
        this.state = {
            reviews: [{
                comment: 'this comment is a test',
                id: 1
            }
            ]
        };
    }

    render() {
        // console.log('test moviedate: ', movieData)
        return (
            <div className="bg-black text-white p-5">
                <div className="card w-75 rounded bg-dark text-white text-center m-0 p-5">
                    <h2>{this.movieName}</h2><br></br>
                    <img className="img-thumbnail mx-auto" src={this.movieImg} />
                    <Stars />
                    <div>Your Review: <span><ReviewForm reviews={this.state.reviews} /></span></div>
                    

                    {/* beginning of reviews container */}
                    <div className='container'>
                        {this.state.reviews.map((review, index) => (
                            <div key={index}>
                                {/* {review.comment} */}
                            </div>
                            // <Movie key={index} movieData={movie} />
                        ))}
                    </div>
                    {/* end of reviews container */}
                    
                </div>
            </div>
        );
    }
}

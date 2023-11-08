
import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


function Stars() {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
  
    const handleReset = () => {
      // Set the initial value
      setRating(0)
    }
  
  return (
    <div className='App mt-4'>
      {/* set initial value */}
      <Rating onClick={handleRating} initialValue={rating} />

      <button className='btn btn-danger'  onClick={handleReset}>reset</button>
    </div>
  )
}

export default Stars
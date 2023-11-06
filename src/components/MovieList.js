import React from 'react';
import Stars from './Stars';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const MovieList = ({ movies }) => {
  return (
    <div className='bg-black text-white p-5'>
      <h1 className='container text-center'>Movie Review</h1>
      <table className='container'>
        <tbody>
          {movies.map((movie, index) => (
            <tr className='card w-75 bg-dark text-white text-center m-5 p-5' key={index}>
              <td>
                <img className='img-thumbnail mx-auto' src={movie.image} alt={movie.title} />
              </td>
              <td>
                <h2>{movie.title}</h2>
                <strong>Synopsis:</strong> {movie.synopsis}
                <br /><br />
                <Stars /><br /><br />
                <ReviewForm />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default MovieList;
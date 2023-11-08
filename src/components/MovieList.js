import React from 'react';
import Movie from './Movie';

const MovieList = () => {
  const movies = [
    {
        title: "The Shawshank Redemption",                 
        synopsis: "Wrongly convicted man finds hope and friendship in prison, ultimately achieving redemption and freedom.",
        rating: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzGdfg4HcAI-yCi9gXofi7JLT8T8vgcufIfTyTxqL4_3UUiNJ"
    },
    {
        title: "The Godfather",
        synopsis: "Epic saga of an Italian-American crime family's patriarch and his son's ascent in organized crime.",
        rating: 5,
        image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6EAZYpFPv-j-msWE7uFUueby2qiH_lz67ryBOJ41kg4nKHJ6y"
    },
    {
        title: "Pulp Fiction",
        synopsis: "Nonlinear narrative of intersecting lives, crime, and dark humor in a gritty Los Angeles setting.",
        rating: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNRzwKlBbE6QGNyvO0rGoruofKdYgGK9MeozNwRdWmnDMf8xI"
    }

]




  return (
    <div className='bg-black text-white p-5'>
      <h1 className='container text-center text-warning'>Movie Review</h1>
      <div className='container'>
        
          {movies.map((movie, index) => (
      

              <Movie key={index} movieData={movie}/>

          ))}
     
      </div>
    </div>
    
  );
};


export default MovieList;
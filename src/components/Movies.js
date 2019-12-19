import React from 'react';
import { movies } from '../data';

const returnGenres = (genres) => {
  return (
    genres.map((genre) => {
      return <li key={genre + '-genre'}>{genre}</li>
    })
  )
}

const returnMovies = () => {
  return (
    movies.map((movie) => {
      return <div key={movie.name + '-movie'}>
              <h2>{movie.title}</h2>
              <p>Time: {movie.time}</p>
              <ul>
                {returnGenres(movie.genres)}
              </ul>
            </div>
    })
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {returnMovies()}
    </div>
  );
};

export default Movies;

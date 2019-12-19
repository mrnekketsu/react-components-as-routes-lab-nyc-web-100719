import React from 'react';
import { directors } from '../data';

const returnMovies = (movies) => {
  return (
    movies.map((movie) => {
      return <li key={movie + '-directedmovie'}>{movie}</li>
    })
  )
}
const returnDirectors = () => {
  return (
    directors.map((director) => {
      return <div key={director.name + '-director'}>
              <h2>{director.name}</h2>
              <ul>
                {returnMovies(director.movies)}
              </ul>
            </div>
    })
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {returnDirectors()}
    </div>
  );
}

export default Directors

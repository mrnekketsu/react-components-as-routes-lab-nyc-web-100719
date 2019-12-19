import React from 'react';
import { actors } from '../data';

const returnMovies = (movies) => {
  return (
    movies.map((movie) => {
      return <li key={movie + '-movie'}>{movie}</li>
    })
  )
}
const returnActors = () => {
  return (
    actors.map((actor) => {
      return <div key={actor + '-actor'} className='actor'>
              <h2>{actor.name}</h2>
              <ul>
                {returnMovies(actor.movies)}
              </ul>
            </div>
    })
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {returnActors()}
    </div>
  );
};

export default Actors;

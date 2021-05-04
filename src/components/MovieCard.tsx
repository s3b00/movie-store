import React from 'react';
import { Link } from 'react-router-dom';
import { IMovieCard } from '../types/movies';

interface MovieCardPropsType {
    card: IMovieCard
}

export const MovieCard: React.FC<MovieCardPropsType> = ({ card }) => (
  <div className="card mb-2" style={{ width: '220px' }} key={card.imdbID}>
    <div className="card-header">
      <Link to={`/movie/${card.imdbID}`}>
        <img src={card.Poster} className="img-fluid p-1" alt="." />
      </Link>
    </div>
    <div className="card-body">
      <h5 className="card-title">{card.Title}</h5>
      <div className="card-text d-flex flex-column justify-content-between">
        <small>
          Тип фильма:
          {' '}
          {card.Type}
        </small>
        {' '}
        <br />
        <small>
          Год выхода:
          {' '}
          {card.Year}
        </small>
        {' '}
        <br />
        <small>
          imdbID:
          {' '}
          {card.imdbID}
        </small>
        {' '}
        <br />
      </div>
    </div>
  </div>
);

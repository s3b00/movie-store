import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { MovieActionTypes } from '../types/movie';
import { IMovieCard } from '../types/movies';

export const MoviePage: React.FC<any> = ({ match }) => {
  const { movie, error, loading } = useTypedSelector((store) => store.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: MovieActionTypes.FETCH_MOVIE_REQUESTED,
      payload: `i=${match.params.imdbID}`,
    });
  }, []);

  return (
    <div className="row mt-5">
      <div className="col-3">
        <img src={movie?.Poster} alt={movie?.Title} />
      </div>
      <div className="col-9">
        <h1>{ movie?.Title }</h1>
        <small>
          Страна:
          {' '}
          { movie?.Country }
        </small>
        {' '}
        <br />
        <small>
          imdbRating:
          {' '}
          { movie?.imdbRating }
        </small>

        <div>
          <p>
            Жанр:
            {' '}
            { movie?.Genre }
          </p>
          <p>
            Актеры:
            {' '}
            { movie?.Actors }
          </p>
          <p>
            Сборы:
            {' '}
            { movie?.BoxOffice }
          </p>
          <p>
            Выход на DVD:
            {' '}
            { movie?.DVD }
          </p>
          <p>
            Режисер:
            {' '}
            { movie?.Director }
          </p>
          <p>
            Сценарист:
            {' '}
            { movie?.Writer }
          </p>
          <p>
            Язык:
            {' '}
            { movie?.Language }
          </p>
          <p>
            Метаскор:
            {' '}
            { movie?.Metascore }
          </p>
          <p>
            Описание:
            {' '}
            { movie?.Plot }
          </p>
          <p>
            Производитель:
            {' '}
            { movie?.Production }
          </p>
          <p>
            Website:
            {' '}
            { movie?.Website }
          </p>
          <p>
            Тип:
            {' '}
            { movie?.Type }
          </p>
          <p>
            Время просмотра:
            {' '}
            { movie?.Runtime }
          </p>
        </div>
      </div>
    </div>
  );
};

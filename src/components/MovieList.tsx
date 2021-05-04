import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { MovieCard } from './MovieCard';

const MovieList: React.FC = () => {
  const { movies, error, loading } = useTypedSelector((store) => store.movies);

  if (loading) {
    return (
      <div>Загружается..</div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="d-flex justify-content-between flex-wrap m-auto">
      {movies.map((el) => (
        <MovieCard card={el} key={el.imdbID} />
      ))}
    </div>
  );
};

export default MovieList;

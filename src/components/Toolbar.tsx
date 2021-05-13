/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MovieFields } from '../constants';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IMovieCard, MoviesActionTypes } from '../store/movies/movies';

const Toolbar: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [plot, setPlot] = useState<string>('Short');

  const { movies } = useTypedSelector((store) => store.movies);

  const dispatch = useDispatch();

  const titleChange = ({ target }:
    React.ChangeEvent<HTMLInputElement>):void => {
    setTitle(target.value);
  };

  const yearChange = ({ target }:
    React.ChangeEvent<HTMLInputElement>):void => {
    setYear(target.value);
  };

  const plotChange = ({ target }:
    React.ChangeEvent<HTMLSelectElement>):void => {
    setPlot(target.value);
  };

  const searchClick = ():void => {
    dispatch({
      type: MoviesActionTypes.MOVIES_FETCH_REQUESTED,
      payload: `s=${title}&y=${year}&plot=${plot}`,
    });
  };

  const sort = (type: MovieFields): void => {
    dispatch({
      type: MoviesActionTypes.SET_MOVIES,
      payload: movies.sort((a: IMovieCard, b: IMovieCard) => {
        if (a[type] > b[type]) return 1;
        if (a[type] < b[type]) return -1;

        return 0;
      }),
    });
  };

  return (
    <div>
      <form className="row mb-3">
        <div className="col-12 col-md-4">
          <label
            className="visually-hidden"
            htmlFor="titleInput"
          >
            Title
          </label>

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="titleInput"
              placeholder="Title"
              onChange={titleChange}
              value={title}
            />
          </div>
        </div>

        <div className="col-12 col-md-3">
          <label
            className="visually-hidden"
            htmlFor="yearInput"
          >
            Year
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="yearInput"
              placeholder="Year"
              onChange={yearChange}
              value={year}
            />
          </div>
        </div>

        <div className="col-12 col-md-3">
          <label
            className="visually-hidden"
            htmlFor="plotInput"
          >
            Plot
          </label>
          <select
            className="form-select"
            id="plotInput"
            onChange={plotChange}
          >
            <option value="short">Short</option>
            <option value="full">Full</option>
          </select>
        </div>
        <div className="col-12 col-md-2">
          <button
            type="button"
            className="btn btn-primary col-12"
            onClick={searchClick}
          >
            Search
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-around mt-2">
        <div className="form-check">
          <input
            type="radio"
            name="type"
            value="title"
            className="form-check-input"
            id="titleRB"
            onChange={() => sort(MovieFields.Title)}
          />
          <label className="form-check-label" htmlFor="nameRB">
            Title
          </label>
        </div>
        <div className="form-check ">
          <input
            type="radio"
            name="type"
            value="year"
            className="form-check-input"
            id="yearRB"
            onChange={() => sort(MovieFields.Year)}
          />
          <label className="form-check-label" htmlFor="abvRB">
            Year
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="type"
            value="type"
            className="form-check-input"
            id="typeRB"
            onChange={() => sort(MovieFields.Year)}
          />
          <label className="form-check-label" htmlFor="attRB">
            Type
          </label>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

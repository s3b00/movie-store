import axios from 'axios';
import {
  put, call, takeEvery,
} from 'redux-saga/effects';

import { URL } from '../../constants';

import {
  FetchMoviesAction, FetchMoviesErrorAction,
  FetchMoviesSuccessAction, IMovieCard, MoviesActionTypes,
  MoviesFetchRequestAction,
} from '../../types/movies';

const requestMovies = ():FetchMoviesAction => ({
  type: MoviesActionTypes.FETCH_MOVIES,
});

const requestMoviesSuccess = (data: IMovieCard[]):FetchMoviesSuccessAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: data,
});

const requestMoviesError = (error: string): FetchMoviesErrorAction => ({
  type: MoviesActionTypes.FETCH_MOVIES_ERROR,
  payload: error,
});

function* fetchMovies(action: MoviesFetchRequestAction): any {
  yield put(requestMovies());
  try {
    const response = yield call(
      () => axios({ method: 'GET', url: URL + action.payload }),
    );

    if (response.data.Response === 'False') {
      throw new Error(response.data.Error);
    }
    const movies = response.data.Search;

    yield put(requestMoviesSuccess(movies));
  } catch (e) {
    yield put(requestMoviesError(e.message));
  }
}

export default function* watchFetchMovies(): any {
  yield takeEvery(MoviesActionTypes.MOVIES_FETCH_REQUESTED, fetchMovies);
}

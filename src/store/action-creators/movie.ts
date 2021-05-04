import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { URL } from '../../constants';
import {
  FetchMovieAction, FetchMovieActionError,
  FetchMovieActionSuccess, IMovie,
  MovieActionTypes,
} from '../../types/movie';
import { MoviesFetchRequestAction } from '../../types/movies';

export const FetchMovie = ():FetchMovieAction => ({
  type: MovieActionTypes.FETCH_MOVIE,
});

export const FetchMovieSuccess = (movie: IMovie):FetchMovieActionSuccess => ({
  type: MovieActionTypes.FETCH_MOVIE_SUCCESS,
  payload: movie,
});

export const FetchMovieError = (error: string):FetchMovieActionError => ({
  type: MovieActionTypes.FETCH_MOVIE_ERROR,
  payload: error,
});

function* fetchMovie(action: MoviesFetchRequestAction):any {
  yield put(FetchMovie());
  try {
    const response = yield call(() => axios({
      method: 'GET',
      url: URL + action.payload,
    }));

    yield put(FetchMovieSuccess(response.data));
  } catch (e) {
    put(FetchMovieError(e.message));
  }
}

export function* watchFetchMovie(): any {
  yield takeEvery(MovieActionTypes.FETCH_MOVIE_REQUESTED, fetchMovie);
}

import { MovieAction, MovieActionTypes, movieStateType } from './movie';

const initialState:movieStateType = {
  movie: null,
  loading: false,
  error: null,
};

export const movieReducer = (state = initialState,
  action: MovieAction):movieStateType => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIE:
      return { loading: true, error: null, movie: null };
    case MovieActionTypes.FETCH_MOVIE_SUCCESS:
      return { loading: false, error: null, movie: action.payload };
    case MovieActionTypes.FETCH_MOVIE_ERROR:
      return { loading: false, error: action.payload, movie: null };
    default: {
      return state;
    }
  }
};

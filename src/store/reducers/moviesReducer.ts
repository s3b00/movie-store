import {
  MoviesAction,
  MoviesActionTypes, MoviesState,
} from '../../types/movies';

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: null,
};

export const moviesReducer = (state = initialState,
  action: MoviesAction): MoviesState => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES:
      return { loading: true, error: null, movies: [] };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return { loading: false, error: null, movies: action.payload };
    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return { loading: false, error: action.payload, movies: [] };
    case MoviesActionTypes.SET_MOVIES:
      return { loading: false, error: null, movies: action.payload };
    default:
      return state;
  }
};

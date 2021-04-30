import { MovieAction, MovieActionTypes, MovieState } from '../../types/movie';

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

export const movieReducer = (state = initialState,
  action: MovieAction): MovieState => {
  switch (action.type) {
    case MovieActionTypes.FETCH_MOVIES:
      return { loading: true, error: null, movies: [] };
    case MovieActionTypes.FETCH_MOVIES_SUCCESS:
      return { loading: true, error: null, movies: action.payload };
    case MovieActionTypes.FETCH_MOVIES_ERROR:
      return { loading: false, error: action.payload, movies: [] };
    default:
      return state;
  }
};

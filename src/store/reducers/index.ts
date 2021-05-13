import { combineReducers } from 'redux';
import { movieReducer } from '../movie/movieReducer';
import { moviesReducer } from '../movies/moviesReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

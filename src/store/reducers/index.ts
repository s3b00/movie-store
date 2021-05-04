import { combineReducers } from 'redux';
import { movieReducer } from './movieReducer';
import { moviesReducer } from './moviesReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchFetchMovie } from './action-creators/movie';
import watchFetchMovies from './action-creators/movies';
import { rootReducer } from './reducers';

const saga = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(watchFetchMovies);
saga.run(watchFetchMovie);

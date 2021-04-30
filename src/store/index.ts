import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';

const saga = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(saga));

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import math from './reducers/mathReducer';
import user from './reducers/userReducer';

// const myLogger = store => next => action => {
//     console.log('Logged action:' + action);
//     next(action);
// };

const promise = createPromise();

// Create store
export default createStore(
    combineReducers({ math, user }),
    {},
    applyMiddleware(createLogger(), thunk, promise)
);

// Dependencies
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from '../app/redux/rootReducer';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';


export default function configureStore(initialState) {
  const middleware = [
    thunk
  ];

  if (isDevelopment) {
    middleware.push(logger);
  }

  /* eslint-disable no-underscore-dangle */
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
  /* eslint-enable */
}

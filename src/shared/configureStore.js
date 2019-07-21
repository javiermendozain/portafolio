// Dependencies
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import { createStore, applyMiddleware, compose } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import firebaseConfig from '../shared/configureFirebase';


// Root Reducer
import rootReducer from '../app/redux/rootReducer';

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

export default function configureStore(initialState) {
  const middleware = [
    thunk.withExtraArgument({getFirebase, getFirestore})
  ];

  if (isDevelopment) {
    middleware.push(logger);
  }

  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore);

  const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );

  return store;
}

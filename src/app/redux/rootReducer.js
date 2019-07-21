// Dependencies
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

// Containers Reducers
import blogReducer from './reducers/blogReducer';
import modalReducer from './reducers/modaReducer';

// Shared Reducers
import device from './reducers/deviceReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  device,
  blogReducer,
  modalReducer
});

export default rootReducer;

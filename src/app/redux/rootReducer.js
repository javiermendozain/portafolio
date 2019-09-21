// Dependencies
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

// Containers Reducers
import modalReducer from './reducers/modaReducer';
import newPostReducer from './reducers/newPostReducer';
import categoryReducer from './reducers/categoryReducer';
import postReducer from './reducers/postReducer';

// Shared Reducers
import device from './reducers/deviceReducer';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  device,
  modalReducer,
  newPostReducer,
  categoryReducer,
  postReducer
});

export default rootReducer;

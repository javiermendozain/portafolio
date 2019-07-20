// Dependencies
import { combineReducers } from 'redux';

// Containers Reducers
import blogReducer from './reducers/blogReducer';
import modalReducer from './reducers/modaReducer';

// Shared Reducers
import device from './reducers/deviceReducer';

const rootReducer = combineReducers({
  blogReducer,
  device,
  modalReducer
});

export default rootReducer;

import { POSTs } from '../types/postActionsTypes';

const INITIAL_STATE = {
  posts: []

};

export default ( state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case POSTs.getPostInitial():
      return {
        ...state,
        posts: action.payload
      };


    default:
      return state;
  }
};

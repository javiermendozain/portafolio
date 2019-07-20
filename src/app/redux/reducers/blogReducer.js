// Action Types
import { FETCH_POSTS } from '../types/blogActionsTypes';

const initialState = {
  posts: [],
  error:'',
  loading:false
};

export default (state = initialState, action) =>{
  switch (action.type) {

    case FETCH_POSTS.request(): {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_POSTS.success(): {
      return {
        ...state,
        posts: action.payload,
        loading:false,
        error:''
      };
    }
    case FETCH_POSTS.error(): {
      return {
        ...state,
        error: action.payload,
        loading:false

      };
    }
    default:
      return state;
  }
};
